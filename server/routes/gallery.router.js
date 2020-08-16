const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    query = `UPDATE "gallery"
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
    query = `SELECT * FROM "gallery"
    ORDER BY "id";`;
    pool.query(query)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log('error in GET:', error);
        res.sendStatus(500);
    })
    
}); // END GET Route

module.exports = router;