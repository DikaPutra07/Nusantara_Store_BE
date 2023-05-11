const orderRepository = require('../repositories/orderRepository');

const getAllOrders = async () => {
    try {
        const orders = await orderRepository.getAllOrders();
        return orders;
    }
    catch (error) {
        throw error;
    }
}

const getOrderById = async (id) => {
    try {
        const order = await orderRepository.getOrderById(id);
        return order;
    }
    catch (error) {
        throw error;
    }
}

const getOrderByUserId = async (user_id) => {
    try {
        const order = await orderRepository.getOrderByUserId(user_id);
        return order;
    }
    catch (error) {
        throw error;
    }
}

const createOrder = async (order) => {
    try {
        const newOrder = await orderRepository.createOrder(order);
        return newOrder;
    }
    catch (error) {
        throw error;
    }
}

const updateOrder = async (id, order) => {
    try {
        const updatedOrder = await orderRepository.updateOrder(id, order);
        return updatedOrder;
    }
    catch (error) {
        throw error;
    }
}

const deleteOrder = async (id) => {
    try {
        const deletedOrder = await orderRepository.deleteOrder(id);
        return deletedOrder;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrderByUserId,
    createOrder,
    updateOrder,
    deleteOrder
};