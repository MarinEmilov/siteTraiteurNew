
let db = require('./db.js');


const Plat = db.sequelize.define("plat", {
     type: db.Sequelize.STRING,

     namePlat: {
      type: db.Sequelize.STRING,
      notEmpty: false
  },
    
    description: {
      type: db.Sequelize.STRING
    },

    prix: {
      type: db.Sequelize.INTEGER
    },

    optionVG: {
      type: db.Sequelize.BOOLEAN                     
    },
    
  });




  module.exports = Plat;