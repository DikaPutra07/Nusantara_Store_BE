const route = require('express').Router();
const orderStatusController = require('../controllers/orderStatusController');

route.get('/', orderStatusController.getAllOrderStatuses);
route.get('/:id', orderStatusController.getOrderStatusById);
route.post('/', orderStatusController.createOrderStatus);
route.put('/:id', orderStatusController.updateOrderStatus);
route.delete('/:id', orderStatusController.deleteOrderStatus);

module.exports = route;