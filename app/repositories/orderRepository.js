const { order } = require('../models');

const getAllOrders = async () => {
    return order.findAll();
}

const getOrderById = async (id) => {
    return order.findByPk(id);
}

const getOrderByUserId = async (user_id) => {
    return order.findAll({
        where: {
            user_id: user_id
        }
    });
}

const createOrder = async (data) => {
    return order.create(data);
}

const updateOrder = async (id, data) => {
    return order.update(data, {
        where: {
            id: id
        }
    });
}

const deleteOrder = async (id) => {
    return order.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrderByUserId,
    createOrder,
    updateOrder,
    deleteOrder
};