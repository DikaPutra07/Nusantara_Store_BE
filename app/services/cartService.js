const cartRepository = require('../repositories/cartRepository');

const getAllCart = async () => {
    try {
        const carts = await cartRepository.getAllCart();
        return carts;
    }
    catch (error) {
        throw error;
    }
}

const getCartById = async (id) => {
    try {
        const cart = await cartRepository.getCartById(id);
        return cart;
    }
    catch (error) {
        throw error;
    }
}

const getCartByUserId = async (user_id) => {
    try {
        const carts = await cartRepository.getCartByUserId(user_id);
        return carts;
    }
    catch (error) {
        throw error;
    }
}

const createCart = async (data) => {
    try {
        const cart = await cartRepository.createCart(data);
        return cart;
    }
    catch (error) {
        throw error;
    }
}

const updateCart = async (id, data) => {
    try {
        const cart = await cartRepository.updateCart(id, data);
        return cart;
    }
    catch (error) {
        throw error;
    }
}

const deleteCart = async (id) => {
    try {
        const cart = await cartRepository.deleteCart(id);
        return cart;
    }
    catch (error) {
        throw error;
    }
}

const deleteCartByUserId = async (user_id) => {
    try {
        const cart = await cartRepository.deleteCartByUserId(user_id);
        return cart;
    }
    catch (error) {
        throw error;
    }
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