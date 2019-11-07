const router = require('express').Router();

const resourceController = require('../controllers/resourceController')
const responseController = require('../controllers/responseController')

router.route('/')
    .get(
        resourceController.getResources,
        responseController.sendStatus,
        responseController.sendError
    )
    .post(
        resourceController.createResource,
        responseController.sendStatus,
        responseController.sendError
    )

router.route('/:id')
    .get(
        resourceController.getOneResource,
        responseController.sendStatus,
        responseController.sendError
    )

module.exports = router;