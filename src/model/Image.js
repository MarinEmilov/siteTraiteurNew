
let db = require('./db.js');


const Image = db.sequelize.define("img", {
     type: db.Sequelize.STRING,

     nameImage: {
      type: db.Sequelize.STRING,
      notEmpty: false
  },
    
      
    image: {
      type: db.Sequelize.BLOB,
      notEmpty: false                     
    },
  });




  module.exports = Image;