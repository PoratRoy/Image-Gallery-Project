const express = require('express');
const router = express.Router();
const {gatAllImages,addNewImage, updateImage, 
       getImageByCaption, getImageByCategory, 
       getImageByFavorite, getImageByPrivate} = require('../controllers/images');

//http://localhost:5000/api/ -- get all the images
router.get('/', gatAllImages);

//http://localhost:5000/api/append -- append new image to the db
router.post('/append', addNewImage);

//http://localhost:5000/api/update -- update exsisting image
router.put('/update',updateImage);

//http://localhost:5000/api/byCaption/:caption -- get images by caption
router.get('/byCaption/:caption',getImageByCaption);

//http://localhost:5000/api/byCategory/:category -- get images by category
router.get('/byCategory/:category',getImageByCategory);

//http://localhost:5000/api/byPrivate -- get images by private
router.get('/byPrivate',getImageByFavorite);

//http://localhost:5000/api/byFavorite -- get images by favorite
router.get('/byFavorite',getImageByPrivate);


module.exports = router;




