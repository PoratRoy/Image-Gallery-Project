const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nanoid = require('nanoid');
const Datastore = require('nedb');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(express.static('public'));
app.use(cors());

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
  });
  
  app.post('/appendImage', (request, response) => {
    const data = request.body;
    console.log(request.body);
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
  });


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


//---

// const storagePath = path.join(__dirname,"storage");
// fs.access(storagePath,(err)=>{
//     if(err){
//         fs.mkdir(storagePath,(err)=>{
//             if(err){
//                 console.log('error');
//             }
//         });
//     }
// });

// app.post('/upload',(req,res)=>{
//     let sampleFile = req.body.image;
//     let data = sampleFile.replace(/^data:image\/\w+;base64,/,"");
//     let buf = Buffer.from(data, 'base64');

//     fs.writeFile('image.png', buf, (err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('image saved');
//             res.send('image saved');
//         }
//     })
// })


