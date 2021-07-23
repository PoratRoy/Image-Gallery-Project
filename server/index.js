const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const nanoid = require('nanoid');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());


// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });


app.listen(PORT, () => console.log(`listening on port ${PORT}...`))

app.get('/', (req,res)=> {
  
})


// app.get('/images', (req,res)=> {
//   const data = JSON.parse(fs.readFileSync('images-db.json'));
//   console.log(data);
//   res.json(data);
// })


// app.post('/appendImage', (req,res)=> {
//   console.log(req.body);
//   const data = JSON.parse(fs.readFileSync('images-db.json'));
//   console.log('1');
//   const newData = data.items.push(req.body);
//   console.log('2');
//   fs.writeFileSync('images-db.json', newData);
  
//   res.status(200).send({'message':'date saved'})
// })