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
  const newCategory = req.body.categories;
  let categories;

  database.find().exec(function (err, result) {
    if (err) {
    console.error(err);
    } else {
    data = result;
    }

    if(data.length === 0){
      database.insert({categories:[newCategory]})
    } else {
      // console.log(data[0].categories);
      // let newCategories = data[0].categories;

      // newCategories.push(newCategory);
      // console.log(newCategories);
      console.log(data[0]);

      database.update(
        {categories: data[0].categories},
        {categories: data[0].categories.push(newCategory)},
        {},
        function (err, numReplaced) {
            console.log("number of changes in update", numReplaced);
        }
      );    
    }
  })
}


