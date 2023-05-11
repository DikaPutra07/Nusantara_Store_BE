const userService = require('../services/usersService');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
    userService.getAllUsers()
        .then((users) => {
            if (!users) {
                return res.status(404).send({
                    message: 'Users not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Users found',
                    data: users
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

const getUserById = async (req, res) => {
    const id = req.params.id;
    userService.getUserById(id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'User found',
                    data: user
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


// REGISTER

const registerUser = async (req, res) => {
    const { name, email, password, shop } = req.body;

    const user = await userService.getUserByEmail(email);
    if (user) {
        return res.status(400).send({
            message: 'User already registered',
        });
    }

    const store = await userService.getUserByShop(shop);
    if (store) {
        return res.status(400).send({
            message: 'Name of store has been taken',
        });
    }

    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);
    const data = {
        name: name,
        email: email,
        shop: shop,
        password: hashedPassword
    };
    userService.registerUser(data)
        .then((user) => {
            res.status(201).send({
                message: 'User created',
                data: user
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: 'Internal server error',
                data: {}
            });
        });
};

// LOGIN

const loginUser = async (req, res) => {
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(400).send({
                message: 'Invalid email or password',
            });
        }
        const validPassword = await bycrpt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send({
                message: 'Invalid email or password',
            });
        }
        
        const token = jwt.sign({
            id: user.id, 
            name: user.name,
            email: user.email,
            shop: user.shop
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '3h'
        });

        return res.status(200).send({
            message: 'User logged in',
            data: {
                token: token
            }
        });
    }
    catch (error) {
        return res.status(500).send({
            message: 'Internal server error',
            data: {}
        });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    userService.updateUser(id, data)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'User updated',
                    data: user
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

const deleteUser = async (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'User deleted',
                    data: user
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

module.exports = {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};
