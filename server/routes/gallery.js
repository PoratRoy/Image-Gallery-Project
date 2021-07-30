const express = require('express');
const router = express.Router();
const {gatGallery,addNewGallery} = require('../controllers/gallery');

//http://localhost:5000/api/gallery/ -- get the gallery
router.get('/', gatGallery);

//http://localhost:5000/api/gallery/append -- add new gallery to the db
router.post('/append', addNewGallery);



module.exports = router;