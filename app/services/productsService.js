const productsRepository = require('../repositories/productsRepository');

const getAllProducts = async () => {
    try {
        const products = await productsRepository.getAllProducts();
        return products;
    }
    catch (error) {
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const product = await productsRepository.getProductById(id);
        return product;
    }
    catch (error) {
        throw error;
    }
};

const getProductByCategory = async (category_id) => {
    try {
        const product = await productsRepository.getProductByCategory(category_id);
        return product;
    }
    catch (error) {
        throw error;
    }
};

const getProductByShop = async (shop) => {
    try {
        const product = await productsRepository.getProductByShop(shop);
        return product;
    }
    catch (error) {
        throw error;
    }
};

const createProduct = async (product) => {
    try {
        const newProduct = await productsRepository.createProduct(product);
        return newProduct;
    }
    catch (error) {
        throw error;
    }
};

const updateProduct = async (id, product) => {
    try {
        const updatedProduct = await productsRepository.updateProduct(id, product);
        return updatedProduct;
    }
    catch (error) {
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await productsRepository.deleteProduct(id);
        return deletedProduct;
    }
    catch (error) {
        throw error;
    }
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