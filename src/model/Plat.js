
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
      type: db.Sequelize.INTEGER,
      allowNull: false
    },

    ImagePlat: {
      type: db.Sequelize.BLOB('long'),
                     
    },

    OptionPlat: {
      type: db.Sequelize.BOOLEAN,
      notEmpty: false                    
    },

    PlatVisible: {
      type: db.Sequelize.BOOLEAN,
     
      
    }
    
    
  });




  module.exports = Plat;