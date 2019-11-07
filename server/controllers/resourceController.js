const resourceDb = require('../models/resources')

function getResources(req, res, next) {
    resourceDb.getResources()
    .then(data => {
        res.locals.data = data;
        next();
    })
    .catch(err => {
        next(err);
    })
}

function getOneResource(req, res, next) {
    resourceDb.getOneResource(req.params.id)
    .then(data => {
        res.locals.data = data;
        next();
    })
    .catch(err => {
        next(err);
    })
}

function createResource(req, res, next) {
    resourceDb.createResource(req.body)
    .then (data => {
        res.locals.data = data;
        next();
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {
    getResources,
    getOneResource,
    createResource
}