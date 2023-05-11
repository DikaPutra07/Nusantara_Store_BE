const orderStatusService = require('../services/orderStatusService');

const getAllOrderStatuses = async (req, res) => {
    orderStatusService.getAllOrderStatuses()
        .then((orderStatuses) => {
            if(!orderStatuses) {
                return res.status(404).send({
                    message: 'Order statuses not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Order statuses found',
                    data: orderStatuses
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

const getOrderStatusById = async (req, res) => {
    const id = req.params.id;
    orderStatusService.getOrderStatusById(id)
        .then((orderStatus) => {
            if(!orderStatus) {
                return res.status(404).send({
                    message: 'Order status not found',
                    data: {}
                });
            }
            else {
                return res.status(200).send({
                    message: 'Order status found',
                    data: orderStatus
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

const createOrderStatus = async (req, res) => {
    const orderStatus = req.body;
    orderStatusService.createOrderStatus(orderStatus)
        .then((createdOrderStatus) => {
            return res.status(201).send({
                message: 'Order status created',
                data: createdOrderStatus
            });
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

const updateOrderStatus = async (req, res) => {
    const id = req.params.id;
    const orderStatus = req.body;
    orderStatusService.updateOrderStatus(id, orderStatus)
        .then((updatedOrderStatus) => {
            return res.status(200).send({
                message: 'Order status updated',
                data: updatedOrderStatus
            });
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

const deleteOrderStatus = async (req, res) => {
    const id = req.params.id;
    orderStatusService.deleteOrderStatus(id)
        .then((deletedOrderStatus) => {
            return res.status(200).send({
                message: 'Order status deleted',
                data: deletedOrderStatus
            });
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

module.exports = {
    getAllOrderStatuses,
    getOrderStatusById,
    createOrderStatus,
    updateOrderStatus,
    deleteOrderStatus
};