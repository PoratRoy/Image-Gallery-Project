const fs = require("fs");
const path = require("path");
const Datastore = require("nedb");
//const Jimp = require("jimp");

const database = new Datastore("db-categories.db"); //{ filename: 'my.db', autoload: true }  ?
database.loadDatabase();

exports.gatAllCategories = (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
};

exports.addNewCategory = (req, res) => {
    const category = req.body;
    const timestamp = Date.now();
    category.timestamp = timestamp;
    database.insert(category);
    res.json(category);
};

exports.updateImage = (req, res) => {
const newCategory = req.body;
let categories;

database.find().exec(function (err, result) {
    if (err) {
    console.error(err);
    } else {
    categories = result;
    }

    database.update(
    {
        categories: categories[0],
    },
    {
        categories: newCategory,
    },
    {},
    function (err, numReplaced) {
        console.log("number of changes in update", numReplaced);
    }
    );
});
};


//{categories : [a,b,c,d,e]}

