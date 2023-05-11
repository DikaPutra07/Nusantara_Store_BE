const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res) => {
    categoryService.getAllCategories()
        .then((categories) => {
            if(!categories) {
                return res.status(404).send({
                    message: 'Categories not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Categories found',
                    data: categories
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        })
}

const getCategoryById = async (req, res) => {
    const id = req.params.id;
    categoryService.getCategoryById(id)
        .then((category) => {
            if(!category) {
                return res.status(404).send({
                    message: 'Category not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Category found',
                    data: category
                });
            }
        }
    )
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        }
    )
}

const createCategory = async (req, res) => {
    const category = req.body;
    categoryService.createCategory(category)
        .then((createdCategory) => {
            return res.status(201).send({
                message: 'Category created',
                data: createdCategory
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        });
}

const updateCategory = async (req, res) => {
    const id = req.params.id;
    const category = req.body;
    categoryService.updateCategory(id, category)
        .then((updatedCategory) => {
            return res.status(200).send({
                message: 'Category updated',
                data: updatedCategory
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        });
}

const deleteCategory = async (req, res) => {
    const id = req.params.id;
    categoryService.deleteCategory(id)
        .then((deletedCategory) => {
            return res.status(200).send({
                message: 'Category deleted',
                data: deletedCategory
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: `Internal server error, ${error}`,
                data: {}
            });
        });
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}
