const { category } = require('../models');

const getAllCategories = async () => {
    return category.findAll();
}

const getCategoryById = async (id) => {
    return category.findByPk(id);
}

const createCategory = async (data) => {
    return category.create(data);
}

const updateCategory = async (id, data) => {
    return category.update(data, {
        where: {
            id: id
        }
    });
}

const deleteCategory = async (id) => {
    return category.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};
