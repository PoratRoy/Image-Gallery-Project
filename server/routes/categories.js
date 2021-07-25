const express = require('express');
const router = express.Router();
const {gatAllCategories,addNewCategory} = require('../controllers/categories');

//http://localhost:5000/api/category/ -- get all the categories
router.get('/', gatAllCategories);

//http://localhost:5000/api/category/append -- append new category to the db
router.post('/append', addNewCategory);



module.exports = router;