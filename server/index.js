const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 5000;
const URL = '/api';

app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(express.static('public'));
app.use(cors());

app.use(`${URL}`, require('./routes/images')); 

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))


