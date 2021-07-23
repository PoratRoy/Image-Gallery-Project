const express = require('express');
const router = express.Router();
const {gatAllImages,addNewImage} = require('../controllers/images');

//http://localhost:5000/ -- get all the images
router.get('/', gatAllImages);

//http://localhost:5000/appendImage -- append new image to the db
router.post('/appendImage', addNewImage);

module.exports = router;