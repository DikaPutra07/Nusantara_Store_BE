const cartService = require('../services/cartService');

const getAllCart = async (req, res) => {
    cartService.getAllCart()
        .then((carts) => {
            if(!carts) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: carts
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        })
};

const getCartById = async (req, res) => {
    const id = req.params.id;
    cartService.getCartById(id)
        .then((cart) => {
            if(!cart) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: cart
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        })
};

const getCartByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    cartService.getCartByUserId(user_id)
        .then((cart) => {
            if(!cart) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: cart
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        })
};

const createCart = async (req, res) => {
    const data = req.body;
    cartService.createCart(data)
        .then((cart) => {
            if(!cart) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: cart
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        })
};

const updateCart = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    cartService.updateCart(id, data)
        .then((cart) => {
            if(!cart) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: cart
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        })
};

const deleteCart = async (req, res) => {
    const id = req.params.id;
    cartService.deleteCart(id)
        .then((cart) => {
            if (!cart) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: cart
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
};

const deleteCartByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    cartService.deleteCartByUserId(user_id)
        .then((cart) => {
            if (!cart) {
                return res.status(404).send({
                    message: 'Cart not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Cart found',
                    data: cart
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
};

module.exports = {
    getAllCart,
    getCartById,
    getCartByUserId,
    createCart,
    updateCart,
    deleteCart,
    deleteCartByUserId
};