const orderStatusRepository = require('../repositories/orderStatusRepository');

const getAllOrderStatuses = async () => {
    try {
        const orderStatuses = await orderStatusRepository.getAllOrderStatuses();
        return orderStatuses;
    }
    catch (error) {
        throw error;
    }
}

const getOrderStatusById = async (id) => {
    try {
        const orderStatus = await orderStatusRepository.getOrderStatusById(id);
        return orderStatus;
    }
    catch (error) {
        throw error;
    }
}

const createOrderStatus = async (orderStatus) => {
    try {
        const createdOrderStatus = await orderStatusRepository.createOrderStatus(orderStatus);
        return createdOrderStatus;
    }
    catch (error) {
        throw error;
    }
}

const updateOrderStatus = async (id, orderStatus) => {
    try {
        const updatedOrderStatus = await orderStatusRepository.updateOrderStatus(id, orderStatus);
        return updatedOrderStatus;
    }
    catch (error) {
        throw error;
    }
}

const deleteOrderStatus = async (id) => {
    try {
        const deletedOrderStatus = await orderStatusRepository.deleteOrderStatus(id);
        return deletedOrderStatus;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllOrderStatuses,
    getOrderStatusById,
    createOrderStatus,
    updateOrderStatus,
    deleteOrderStatus
};
