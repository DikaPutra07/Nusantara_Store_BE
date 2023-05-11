const { config } = require('dotenv');
const productsService = require('../services/productsService');
const cloudinary = require('../utilz/cloudinary');

const getAllProducts = async (req, res) => {
    productsService.getAllProducts()
        .then((products) => {
            if(!products) {
                return res.status(404).send({
                    message: 'Products not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Products found',
                    data: products
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
};

const getProductById = async (req, res) => {
    const id = req.params.id;
    productsService.getProductById(id)
        .then((product) => {
            if(!product) {
                return res.status(404).send({
                    message: 'Product not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Product found',
                    data: product
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const getProductByCategory = async (req, res) => {
    const category_id = req.params.category_id;
    productsService.getProductByCategory(category_id)
        .then((product) => {
            if (!product) {
                return res.status(404).send({
                    message: 'Product not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Product found',
                    data: product
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const getProductByShop = async (req, res) => {
    const shop = req.params.shop;
    productsService.getProductByShop(shop)
        .then((product) => {
            if (!product) {
                return res.status(404).send({
                    message: 'Product not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Product found',
                    data: product
                });
            }
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const createProduct = async (req, res) => {
    const product = req.body;

    // console.log(product);

    const uploadRes = await cloudinary.uploader.upload(product.image, {
        upload_preset: 'NusantaraStore'
    });

    // console.log(uploadRes);

    productsService.createProduct({
        name: product.name,
        category_id: product.category_id,
        image: uploadRes?uploadRes.secure_url:"",
        shop: product.shop,
        price: product.price,
        description: product.description,
    })
        .then((newProduct) => {
            return res.status(201).send({
                message: 'Product created',
                data: newProduct
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const productImg = JSON.stringify(product.image);

    console.log(product);


    if (productImg.indexOf('res.cloudinary.com') == -1) {
        const uploadRes = await cloudinary.uploader.upload(product.image, {
            upload_preset: 'NusantaraStore'
        })
        product.image = uploadRes.secure_url;
    }

    console.log(product.image);

    productsService.updateProduct(id, {
        name: product.name,
        category_id: product.category_id,
        image: product.image,
        shop: product.shop,
        price: product.price,
        description: product.description,
    })
        .then((updatedProduct) => {
            return res.status(200).send({
                message: 'Product updated',
                data: updatedProduct
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    productsService.deleteProduct(id)
        .then((deletedProduct) => {
            return res.status(200).send({
                message: 'Product deleted',
                data: deletedProduct
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByCategory,
    getProductByShop,
    createProduct,
    updateProduct,
    deleteProduct
};
