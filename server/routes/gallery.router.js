const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');
const { query } = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let query = `UPDATE "gallery"
    SET "likes" = ${req.body.newLikes}
    WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in PUT:', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let query = `SELECT * FROM "gallery"
    ORDER BY "id";`;
    pool.query(query)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log('error in GET:', error);
        res.sendStatus(500);
    })
    
}); // END GET Route

// DELETE Route
router.delete('/:id', (req, res) => {
    let query = `DELETE FROM "gallery"
    WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
    .then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in DELETE', error);
        res.sendStatus(500);
    })
}); // END DELETE route

// POST Route
router.post('/', (req, res) => {
    let query = `INSERT INTO "gallery" ("path", "description")
    VALUES ($1, $2);`;
    pool.query(query, [req.body.path, req.body.description])
    .then(response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error in POST:', error);
        res.setStatus(500);
    })
})

module.exports = router;