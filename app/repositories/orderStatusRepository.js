const { status_order } = require('../models');

const getAllOrderStatuses = async () => {
    return status_order.findAll();
}

const getOrderStatusById = async (id) => {
    return status_order.findOne({
        where: {
            id: id
        }
    });
}

const createOrderStatus = async (orderStatus) => {
    return status_order.create(orderStatus);
}

const updateOrderStatus = async (id, orderStatus) => {
    return status_order.update(orderStatus, {
        where: {
            id: id
        }
    });
}

const deleteOrderStatus = async (id) => {
    return status_order.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllOrderStatuses,
    getOrderStatusById,
    createOrderStatus,
    updateOrderStatus,
    deleteOrderStatus
};