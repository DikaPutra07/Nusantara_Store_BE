const { cart } = require('../models');

const getAllCart = async () => {
    return cart.findAll();
}

const getCartById = async (id) => {
    return cart.findByPk(id);
}

const getCartByUserId = async (user_id) => {
    return cart.findAll({
        where: {
            user_id: user_id
        }
    });
}

const createCart = async (data) => {
    return cart.create(data);
}

const updateCart = async (id, data) => {
    return cart.update(data, {
        where: {
            id: id
        }
    });
}

const deleteCart = async (id) => {
    return cart.destroy({
        where: {
            id: id
        }
    });
}

const deleteCartByUserId = async (user_id) => {
    return cart.destroy({
        where: {
            user_id: user_id
        }
    });
}

module.exports = {
    getAllCart,
    getCartById,
    getCartByUserId,
    createCart,
    updateCart,
    deleteCart,
    deleteCartByUserId
};