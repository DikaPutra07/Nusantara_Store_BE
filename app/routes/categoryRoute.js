const route = require('express').Router();
const categoryController = require('../controllers/categoryController');

route.get('/', categoryController.getAllCategories);
route.get('/:id', categoryController.getCategoryById);
route.post('/', categoryController.createCategory);
route.put('/:id', categoryController.updateCategory);
route.delete('/:id', categoryController.deleteCategory);

module.exports = route;