const usersRepository = require('../repositories/usersRepository');

const getAllUsers = async () => {
    try {
        const users = await usersRepository.getAllUsers();
        return users;
    }
    catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await usersRepository.getUserById(id);
        return user;
    }
    catch (error) {
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await usersRepository.getUserByEmail(email);
        return user;
    }
    catch (error) {
        throw error;
    }
};

const getUserByShop = async (shop) => {
    try {
        const user = await usersRepository.getUserByShop(shop);
        return user;
    }
    catch (error) {
        throw error;
    }
};

const updateUser = async (id, data) => {
    try {
        const user = await usersRepository.updateUser(id, data);
        return user;
    }
    catch (error) {
        throw error;
    }
};

const registerUser = async (data) => {
    try {
        const newUser = await usersRepository.registerUser(data);
        return newUser;
    }
    catch (error) {
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const user = await usersRepository.deleteUser(id);
        return user;
    }
    catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByShop,
    updateUser,
    registerUser,
    deleteUser
};