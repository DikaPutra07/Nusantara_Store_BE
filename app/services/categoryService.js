const categoryRepository = require('../repositories/categoryRepository');

const getAllCategories = async () => {
    try {
        const categories = await categoryRepository.getAllCategories();
        return categories;
    }
    catch (error) {
        throw error;
    }
}

const getCategoryById = async (id) => {
    try {
        const category = await categoryRepository.getCategoryById(id);
        return category;
    }
    catch (error) {
        throw error;
    }
}

const createCategory = async (data) => {
    try {
        const createdCategory = await categoryRepository.createCategory(data);
        return createdCategory;
    }
    catch (error) {
        throw error;
    }
}

const updateCategory = async (id, data) => {
    try {
        const updatedCategory = await categoryRepository.updateCategory(id, data);
        return updatedCategory;
    }
    catch (error) {
        throw error;
    }
}

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await categoryRepository.deleteCategory(id);
        return deletedCategory;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};