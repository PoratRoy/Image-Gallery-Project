const fs = require("fs").promises;
const path = require("path");
const { AsyncNedb } = require('nedb-async')

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
    __dirname.replace('controllers', ''),
    "storage-images",
    image.caption
  );

  try{
    bufferToImageInDbFile(image.src, imagePath);
    image.src = imagePath;
    const timestamp = Date.now();
    image.timestamp = timestamp;
    await database.asyncInsert(image);
    res.json(image);
  }catch(err){
    console.log(err);
  }

};


const bufferToImageInDbFile = async (imageBase64, path) => {
  try{
    let res = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(res, "base64");
    await fs.writeFile(path, buf);
  }catch(err){
    console.log(err);
  }
};


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

exports.getImagesByCaption = async (req, res) => {

  let images;
  try {
    if(req.query.caption === ''){
      images = await getImagesIfNoValue(req.query.private);
    } else {
      if(req.query.private === 'true'){
        images = await database.asyncFind({ caption: req.query.caption, private: true })
      } else {
        images = await database.asyncFind({ caption: req.query.caption, private: false })
      }
    }

    images = await getBase64Images(images);
    
    res.json(images);

  } catch (err) {
    console.log(err);
  }
};

exports.getImagesByCategory = async (req, res) => {

  let images;
  try {
    if(req.query.categories === ''){
      images = await getImagesIfNoValue(req.query.private);
    } else {
      if(req.query.private === 'true'){
        images = await database.asyncFind({ categories: req.query.categories, private: true })
      } else {
        images = await database.asyncFind({ categories: req.query.categories, private: false })
      }
    }
    images = await getBase64Images(images);
    
    res.json(images);

  } catch (err) {
    console.log(err);
  }
};


exports.getImageByPrivate = async (req, res) => { 
  try{
    let images = await database.asyncFind({ private: true })
    let base64Images = await getBase64Images(images);
    res.json(base64Images);

  } catch (err){
    console.log(err);
  }
};

exports.getImageByNoPrivate = async (req, res) => { 
  try{
    let images = await database.asyncFind({ private: false })
    let base64Images = await getBase64Images(images);
    res.json(base64Images);

  } catch (err){
    console.log(err);
  }
};

exports.getImageByFavorite = async (req, res) => { 
  try{
    let images = await database.asyncFind({ favorite: true })
    let base64Images = await getBase64Images(images);
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

getImagesIfNoValue = async (private) => {

  let images
  try {
      if(private === 'true'){
        images = await database.asyncFind({ private: true })
      } else {
        images = await database.asyncFind({ private: false })
      }
      return images;
  } catch (err) {
    console.log(err);
  }
};



