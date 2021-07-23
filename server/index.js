const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Datastore = require('nedb');
//const Jimp = require("jimp");


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({extended: true, limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(express.static('public'));
app.use(cors());

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/', (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }

    data.map(image =>{
      const body = fs.readFileSync(image.src);
      const imageBase64 = body.toString('base64');
      image.src = imageBase64;
    })
    res.json(data);
  });
});
  
app.post('/appendImage', (req, res) => {
  const image = req.body;
  const p = path.join(__dirname,"db-images", image.caption);
  bufferToImageInDbFile(image.src, p);
  image.src = p;
  const timestamp = Date.now();
  image.timestamp = timestamp;
  database.insert(image);
  res.json(image);
});


const bufferToImageInDbFile = (imageBase64, path) => {
  let res = imageBase64.replace(/^data:image\/\w+;base64,/,""); 
  let buf = Buffer.from(res, 'base64'); 
  fs.writeFileSync(path, buf);
}
 // Jimp.read(buf, (err, res) => {
  //   if (err) throw new Error(err);
  //   res.quality(5).write(__dirname + name);
  // }); 


app.listen(PORT, () => console.log(`listening on port ${PORT}...`))




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


