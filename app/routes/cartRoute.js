const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getAllCart);
router.get('/:id', cartController.getCartById);
router.get('/user/:user_id', cartController.getCartByUserId);
router.post('/', cartController.createCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);
router.delete('/delete-user/:user_id', cartController.deleteCartByUserId);

module.exports = router;