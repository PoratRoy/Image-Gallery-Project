const fs = require('fs');
const path = require('path');
const Datastore = require('nedb');
//const Jimp = require("jimp");


const database = new Datastore('db-images.db');  //{ filename: 'my.db', autoload: true }  ?
database.loadDatabase();

exports.gatAllImages = (req, res) => {
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

exports.addNewImage = (req, res) => {
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


exports.updateImage = (req,res) => {
                        //then                    new
  database.update({ planet: 'Jupiter' }, { planet: 'Pluton'}, {}, function (err, numReplaced) {
    // numReplaced = 1
    // The doc #3 has been replaced by { _id: 'id3', planet: 'Pluton' }
    // Note that the _id is kept unchanged, and the document has been replaced
    // (the 'system' and inhabited fields are not here anymore)
  });
}

exports.getImageByCaption = (req,res) => {
  database.find({ name: 'John' })
  .exec(function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log('Got results: ', result);
    }
});
}

exports.getImageByCategory = (req,res) => {
  
}

exports.getImageByPrivate = (req,res) => {

}

exports.getImageByFavorite = (req,res) => {
  
}
