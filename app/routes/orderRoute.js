const route = require('express').Router();
const orderController = require('../controllers/orderController');

route.get('/', orderController.getAllOrders);
route.get('/:id', orderController.getOrderById);
route.get('/user/:user_id', orderController.getOrderByUserId);
route.post('/', orderController.createOrder);
route.put('/:id', orderController.updateOrder);
route.delete('/:id', orderController.deleteOrder);

module.exports = route;