const { users } = require('../models');

const getAllUsers = async () => {
    return users.findAll();
}

const getUserById = async (id) => {
    return users.findByPk(id);
}

const getUserByEmail = async (email) => {
    return users.findOne({
        where: {
            email: email
        }
    });
}

const getUserByShop = async (shop) => {
    return users.findOne({
        where: {
            shop: shop
        }
    });
}

const updateUser = async (id, data) => {
    return users.update(data, {
        where: {
            id: id
        }
    });
}

const registerUser = async (data) => {
    return users.create(data);
}

const deleteUser = async (id) => {
    return users.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    getUserByShop,
    updateUser,
    registerUser,
    deleteUser
};