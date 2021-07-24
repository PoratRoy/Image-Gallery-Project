const fs = require("fs");
const path = require("path");
const Datastore = require("nedb");
//const Jimp = require("jimp");

const database = new Datastore("db-images.db"); //{ filename: 'my.db', autoload: true }  ?
database.loadDatabase();

exports.gatAllImages = (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }

    data.map((image) => {
      const body = fs.readFileSync(image.src);
      const imageBase64 = body.toString("base64");
      image.src = imageBase64;
    });
    res.json(data);
  });
};

exports.addNewImage = (req, res) => {
  const image = req.body;
  const p = path.join(
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
  bufferToImageInDbFile(image.src, p);
  image.src = p;
  const timestamp = Date.now();
  image.timestamp = timestamp;
  database.insert(image);
  res.json(image);
};

const bufferToImageInDbFile = (imageBase64, path) => {
  let res = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  let buf = Buffer.from(res, "base64");
  fs.writeFileSync(path, buf);
};
// Jimp.read(buf, (err, res) => {
//   if (err) throw new Error(err);
//   res.quality(5).write(__dirname + name);
// });

exports.updateImage = (req, res) => {
  const imageWithChanges = req.body;
  let image;

  database.find({ _id: imageWithChanges._id }).exec(function (err, result) {
    if (err) {
      console.error(err);
    } else {
      image = result;
    }

    database.update(
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
      },
      {},
      function (err, numReplaced) {
        console.log("number of changes in update", numReplaced);
      }
    );
  });
};

exports.getImageByQueryString = (req, res) => {

  console.log('roro');
  console.log(req.query);
  console.log(req.query.property);

  res.send('s');

  // database.find({ name: "John" }).exec(function (err, result) {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log("Got results: ", result);
  //   }
  // });
};

exports.getImageByPrivate = (req, res) => {
  database.find({ private: true }).exec(function (err, data) {
    if (err) {
      console.error(err);
    } else {
      data.map((image) => {
        const body = fs.readFileSync(image.src);
        const imageBase64 = body.toString("base64");
        image.src = imageBase64;
      });
      res.json(data);
    }
  });
};

exports.getImageByFavorite = (req, res) => {
  database.find({ favorite: true }).exec(function (err, data) {
    if (err) {
      console.error(err);
    } else {
      data.map((image) => {
        const body = fs.readFileSync(image.src);
        const imageBase64 = body.toString("base64");
        image.src = imageBase64;
      });
      res.json(data);
    }
  });
};
