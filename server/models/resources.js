const db = require('../config/connection')

function getResources(){
    const query = db.any(`SELECT * FROM resources`);
    return query;
}

function getOneResource(parameter) {
    const query = db.one(
        `SELECT * FROM resources
        WHERE parameter = $1`, parameter);
    return query;
}

function createResource(resource) {
    const query = db.one(
        `INSERT INTO resources (title, logo, website, doc, pub, keywords, citations, pmid, altmetric, github, youtube)
        VALUES ($/title/, $/logo/, $/website/, $/pub/, $/keywords/, $/citations/, $/pmid/, $/altmetric/, $/github/, $/youtube/)
        RETURNING *`, resource);
    return query;
}

function updateResource(resource){
    const query = db.one(
        `UPDATE resources
        SET title=$/title/, logo = $/logo/, website = $/website/, pub = $/pub/, keywords = $/keywords/, citations = $/citations/, pmid = $/pmid/, altmetric = $/altmetric/, github = $/github/, youtube = $/youtube/
        WHERE id = $/id/
        RETURNING *`, resource);
    return query;
}

module.exports = {
    getResources,
    getOneResource,
    createResource,
    updateResource
}
