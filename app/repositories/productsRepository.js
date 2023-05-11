const { products } = require('../models');

const getAllProducts = async () => {
    return products.findAll();
};

const getProductById = async (id) => {
    return products.findByPk(id);
};

const getProductByCategory = async (category_id) => {
    return products.findAll({
        where: {
            category_id: category_id
        }
    });
};

const getProductByShop = async (shop) => {
    return products.findAll({
        where: {
            shop: shop
        }
    });
};

const createProduct = async (product) => {
    return products.create(product);
};

const updateProduct = async (id, product) => {
    return products.update(product, {
        where: {
            id: id
        }
    });
};

const deleteProduct = async (id) => {
    return products.destroy({
        where: {
            id: id
        }
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    getProductByCategory,
    getProductByShop,
    createProduct,
    updateProduct,
    deleteProduct
};