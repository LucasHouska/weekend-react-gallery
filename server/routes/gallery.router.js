const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;

    const queryText = `UPDATE galleryItems
    SET "likes" = "likes" + 1
    WHERE "id" = $1;`

    pool.query(queryText, [galleryId])
    .then(result => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('Error in PUT', error);
        res.sendStatus(500);
    })


    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    const queryText = `
    SELECT * FROM "galleryitems"
    ORDER BY "path";`

    pool.query(queryText)
    .then(result => {
        console.log(result.rows);
        res.send(result.rows)
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
}); // END GET Route

router.post('/', (req, res) => {
    
})

module.exports = router;