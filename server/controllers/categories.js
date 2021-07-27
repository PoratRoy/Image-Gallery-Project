
const { AsyncNedb } = require('nedb-async');

const database = new AsyncNedb({
  filename: 'db-categories.db',
  autoload: true,
})


exports.defaultCategories = async ()=> {
  let categories = await database.asyncFind({})

  if(categories.length === 0){
    await database.asyncInsert({category:'Animals'})
    await database.asyncInsert({category:'Landscapes'})
    await database.asyncInsert({category:'People'})
    await database.asyncInsert({category:'Structures'})
  }
}

exports.gatAllCategories = async (req, res) => {
  try{
    let categoriesArray;
    let categories = await database.asyncFind({})

    categoriesArray = categories.map((c)=> {
      return c.category;
    })
    res.send(categoriesArray);
  }catch(err){
    console.log(err);
  }
};


exports.addNewCategory = async (req, res) => {
  const newCategory = req.body.categories;
  try{
    await database.asyncInsert({category:newCategory})
  }catch(err){
    console.log(err);
  }
}


