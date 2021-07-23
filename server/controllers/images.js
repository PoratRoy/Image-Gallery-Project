const fs = require('fs');
const path = require('path');
const Datastore = require('nedb');
//const Jimp = require("jimp");


const database = new Datastore('db-images.db');
database.loadDatabase();

exports.gatAllImages = async (req, res, next) => {
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
};

exports.addNewImage = async (req, res, next) => {
    const image = req.body;
    const p = path.join(__dirname,"storage-images", image.caption);
    bufferToImageInDbFile(image.src, p);
    image.src = p;
    const timestamp = Date.now();
    image.timestamp = timestamp;
    database.insert(image);
    res.json(image);
};

const bufferToImageInDbFile = (imageBase64, path) => {
    let res = imageBase64.replace(/^data:image\/\w+;base64,/,""); 
    let buf = Buffer.from(res, 'base64'); 
    fs.writeFileSync(path, buf);
};
 // Jimp.read(buf, (err, res) => {
  //   if (err) throw new Error(err);
  //   res.quality(5).write(__dirname + name);
  // }); 


