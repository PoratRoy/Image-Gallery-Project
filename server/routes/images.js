const express = require('express');
const router = express.Router();
const {gatAllImages,addNewImage, updateImage, getImageByQueryString, 
       getImageByFavorite, getImageByPrivate} = require('../controllers/images');

//http://localhost:5000/api/ -- get all the images
router.get('/', gatAllImages);

//http://localhost:5000/api/append -- append new image to the db
router.post('/append', addNewImage);

//http://localhost:5000/api/update -- update exsisting image
router.put('/update',updateImage);

//http://localhost:5000/api/search -- get images by search query string of caption and category
router.get('/search',getImageByQueryString);

//http://localhost:5000/api/byPrivate -- get images by private
router.get('/byPrivate',getImageByPrivate);

//http://localhost:5000/api/byFavorite -- get images by favorite
router.get('/byFavorite',getImageByFavorite);


module.exports = router;




