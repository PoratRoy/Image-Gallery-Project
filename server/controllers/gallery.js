const { AsyncNedb } = require('nedb-async')

const database = new AsyncNedb({
  filename: 'db-gallery.db',
  autoload: true,
})


exports.gatGallery = async (req, res) => {
  try{
    let gallery =await database.asyncFind({})
    res.json(gallery[0].gallery);
  } catch (err){
    console.log(err);
  }
};


exports.addNewGallery = async (req, res) => {
    const newGallery = req.body;
    try{
        await database.asyncRemove({},{multi:true})
        await database.asyncInsert({gallery:newGallery})
    }catch(err){
        console.log(err);
    }
};









