const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.get('/category/:category_id', productsController.getProductByCategory);
router.get('/shop/:shop', productsController.getProductByShop);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;