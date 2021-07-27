const express = require('express');
const router = express.Router();
const {gatAllImages,addNewImage, updateImage, getImageByQueryString, 
       getImageByNoPrivate, getImageByFavorite, getImageByPrivate} = require('../controllers/images');

//http://localhost:5000/api/image/ -- get all the images
router.get('/', gatAllImages);

//http://localhost:5000/api/image/append -- append new image to the db
router.post('/append', addNewImage);

//http://localhost:5000/api/image/update -- update exsisting image
router.put('/update',updateImage);

//http://localhost:5000/api/image/search -- get images by search query string of caption and category
router.get('/search',getImageByQueryString);

//http://localhost:5000/api/image/byPrivate -- get images that private
router.get('/byPrivate',getImageByPrivate);

//http://localhost:5000/api/image/byNoPrivate -- get images that arent private
router.get('/byNoPrivate',getImageByNoPrivate);

//http://localhost:5000/api/image/byFavorite -- get images by favorite
router.get('/byFavorite',getImageByFavorite);


module.exports = router;




