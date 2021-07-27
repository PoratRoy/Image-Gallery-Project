const fs = require("fs").promises;
const path = require("path");
const Datastore = require("nedb");
const { AsyncNedb } = require('nedb-async')
//const Jimp = require("jimp");

const database = new AsyncNedb({
  filename: 'db-images.db',
  autoload: true,
})


exports.gatAllImages = async (req, res) => {
  try{
    let images =await database.asyncFind({})
    images = await getBase64Images(images);
    res.json(images);
  } catch (err){
    console.log(err);
  }
};


exports.addNewImage = async (req, res) => {
  const image = req.body;
  if(image.src === ''){return;}

  const imagePath = path.join(
    "C:",
    "Users",
    "Roy",
    "source",
    "repos",
    "-BigProjects",
    "ImagesGalleryProject",
    "server",
    "storage-images",
    image.caption
  );

  bufferToImageInDbFile(image.src, imagePath);
  image.src = imagePath;
  const timestamp = Date.now();
  image.timestamp = timestamp;

  await database.asyncInsert(image);
  res.json(image);
};


const bufferToImageInDbFile = async (imageBase64, path) => {
  let res = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  let buf = Buffer.from(res, "base64");
  await fs.writeFile(path, buf);
};
// Jimp.read(buf, (err, res) => {
//   if (err) throw new Error(err);
//   res.quality(5).write(__dirname + name);
// });


exports.updateImage = async (req, res) => {
  try{
    const imageWithChanges = req.body;
  
    let image = await database.asyncFind({ _id: imageWithChanges._id })
      
    await database.asyncUpdate(
      {
        caption: image[0].caption,
        src: image[0].src,
        categories: image[0].categories,
        location: image[0].location,
        favorite: image[0].favorite,
        private: image[0].private,
      },
      {
        caption: imageWithChanges.caption,
        src: image[0].src,
        categories: imageWithChanges.categories,
        location: imageWithChanges.location,
        favorite: imageWithChanges.favorite,
        private: imageWithChanges.private,
      }
    );
  } catch (err){
    console.log(err);
  }

};

exports.getImageByQueryString = async (req, res) => {

  let images
  try {
    if(req.query.caption === ''){
      images = await database.asyncFind({})
    } else {
      images = await database.asyncFind(req.query)
    }    

  } catch (err) {
    console.log(err);
  }

  images = getBase64Images(images);
  res.json(images);
};



exports.getImageByPrivate = async (req, res) => { 
  try{
    let images = await database.asyncFind({ private: true })
    let base64Images = getBase64Images(images);
    res.json(base64Images);

  } catch (err){
    console.log(err);
  }
};

exports.getImageByFavorite = async (req, res) => { 
  try{
    let images = await database.asyncFind({ favorite: true })
    let base64Images = getBase64Images(images);
    res.json(base64Images);

  } catch (err){
    console.log(err);
  }
};

getBase64Images = async (images) => {
  
  const promises = images.map(async (image) => {
    const body = await fs.readFile(image.src).catch((err)=> console.log(err));
    const imageBase64 = body.toString("base64");
    image.src = imageBase64;
    return image;
  });
  const res = await Promise.all(promises);
  return res;
}



// exports.gatAllImages = (req, res) => {
//   const findImages = new Promise((res, rej)=> {
//     data.asyncFind({}).then((data)=>{

//       data.map((image) => {
//         const body = fs.readFileSync(image.src);
//         const imageBase64 = body.toString("base64");
//         image.src = imageBase64;
//       });
//       res(data)
//     });
//   })

//   findImages.then(images => {
//     res.json(images);
//   })
// };


// exports.updateImage = (req, res) => {
//   const imageWithChanges = req.body;
//   let image;

//   database.find({ _id: imageWithChanges._id }).exec(function (err, result) {
//     if (err) {
//       console.error(err);
//     } else {
//       image = result;
//     }

//     database.update(
//       {
//         caption: image[0].caption,
//         src: image[0].src,
//         categories: image[0].categories,
//         location: image[0].location,
//         favorite: image[0].favorite,
//         private: image[0].private,
//       },
//       {
//         caption: imageWithChanges.caption,
//         src: image[0].src,
//         categories: imageWithChanges.categories,
//         location: imageWithChanges.location,
//         favorite: imageWithChanges.favorite,
//         private: imageWithChanges.private,
//       },
//       {},
//       function (err, numReplaced) {
//         console.log("number of changes in update", numReplaced);
//       }
//     );
//   });
// };

// exports.getImageByQueryString = (req, res) => {

//   if(req.query.caption === ''){
    
//     if(req.query.categories === ''){
//       database.find({}, (err, data) => {
//         if (err) {
//           res.end();
//           return;
//         }
    
//         data.map((image) => {
//           const body = fs.readFileSync(image.src);
//           const imageBase64 = body.toString("base64");
//           image.src = imageBase64;
//         });
//         res.json(data);
//       });
//     } else {
//       database.find({categories:req.query.categories}).exec(function (err,data){
//         if (err) {
//           console.error(err);
//         } else {
//           data.map((image) => {
//             const body = fs.readFileSync(image.src);
//             const imageBase64 = body.toString("base64");
//             image.src = imageBase64;
//           });
//           res.json(data);
//         }
//       })
//     }
//   } else {
//     database.find( req.query ).exec(function (err, data) {
//       if (err) {
//         console.error(err);
//       } else {
//         data.map((image) => {
//           const body = fs.readFileSync(image.src);
//           const imageBase64 = body.toString("base64");
//           image.src = imageBase64;
//         });
//         res.json(data);
//       }
//     });
//   }
// };


// exports.gatAllImages = (req, res) => {
//   database.find({}, (err, data) => {
//     if (err) {
//       res.end();
//       return;
//     }

//     data.map((image) => {
//       const body = fs.readFileSync(image.src);
//       const imageBase64 = body.toString("base64");
//       image.src = imageBase64;
//     });
//     res.json(data);
//   });
// };


// exports.addNewImage = (req, res) => {
//   const image = req.body;
//   if(image.src === ''){return;}

//   const p = path.join(
//     "C:",
//     "Users",
//     "Roy",
//     "source",
//     "repos",
//     "-BigProjects",
//     "ImagesGalleryProject",
//     "server",
//     "storage-images",
//     image.caption
//   );
//   console.log(p);
//   bufferToImageInDbFile(image.src, p);
//   image.src = p;
//   const timestamp = Date.now();
//   image.timestamp = timestamp;
//   database.insert(image);
//   res.json(image);
// };


// exports.getImageByPrivate = (req, res) => {
//   database.find({ private: true }).exec(function (err, data) {
//     if (err) {
//       console.error(err);
//     } else {
//       data.map((image) => {
//         const body = fs.readFileSync(image.src);
//         const imageBase64 = body.toString("base64");
//         image.src = imageBase64;
//       });
//       res.json(data);
//     }
//   });
// };

// exports.getImageByFavorite = (req, res) => {
//   database.find({ favorite: true }).exec(function (err, data) {
//     if (err) {
//       console.error(err);
//     } else {
//       data.map((image) => {
//         const body = fs.readFileSync(image.src);
//         const imageBase64 = body.toString("base64");
//         image.src = imageBase64;
//       });
//       res.json(data);
//     }
//   });
// };


