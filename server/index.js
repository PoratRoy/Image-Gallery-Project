const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const { defaultCategories } = require('./controllers/categories')

const PORT = process.env.PORT || 5000;
const URL = '/api';
const PATH = path.join(__dirname,"storage-images");

app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(express.static('public'));
app.use(cors());
defaultCategories()

app.use(`${URL}/image`, require('./routes/images')); 
app.use(`${URL}/category`, require('./routes/categories')); 
app.use(`${URL}/gallery`, require('./routes/gallery')); 



app.listen(PORT, () => console.log(`listening on port ${PORT}...`))


