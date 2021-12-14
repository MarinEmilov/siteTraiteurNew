
let db = require('./db.js');



const Plat = db.sequelize.define("plats", {
     type: db.Sequelize.STRING,

     TitrePlat: {
      type: db.Sequelize.STRING,
      notEmpty: false
  },
    
  DescriptionPlat: {
      type: db.Sequelize.STRING
    },

    PrixPlat: {
      type: db.Sequelize.INTEGER
    },

    ImagePlat: {
      type: db.Sequelize.BLOB                   
    },

    OptionPlat: {
      type: db.Sequelize.BOOLEAN                     
    },
    
    
  });




  module.exports = Plat;