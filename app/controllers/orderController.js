const orderService = require('../services/orderService');

const getAllOrders = async (req, res) => {
    orderService.getAllOrders()
        .then((orders) => {
            if(!orders) {
                return res.status(404).send({
                    message: 'Orders not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Orders found',
                    data: orders
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

const getOrderById = async (req, res) => {
    const id = req.params.id;
    orderService.getOrderById(id)
        .then((order) => {
            if(!order) {
                return res.status(404).send({
                    message: 'Order not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Order found',
                    data: order
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const getOrderByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    orderService.getOrderByUserId(user_id)
        .then((order) => {
            if (!order) {
                return res.status(404).send({
                    message: 'Order not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Order found',
                    data: order
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const createOrder = async (req, res) => {
    const order = req.body;
    orderService.createOrder(order)
        .then((order) => {
            return res.status(200).send({
                message: 'Order created',
                data: order
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        });
}

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const order = req.body;
    orderService.updateOrder(id, order)
        .then((order) => {
            return res.status(200).send({
                message: 'Order updated',
                data: order
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        });
}

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    orderService.deleteOrder(id)
        .then((order) => {
            return res.status(200).send({
                message: 'Order deleted',
                data: order
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrderByUserId,
    createOrder,
    updateOrder,
    deleteOrder
}
