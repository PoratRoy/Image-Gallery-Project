const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const multipart = require('connect-multiparty');
const cors = require('cors');
var fs = require('fs');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.post('/changeImage', (req,res)=> {
  console.log(req.body);
  res.status(200).send({'message':'date received'})
})


app.listen(PORT, () => console.log(`listening on port ${PORT}...`))


