let db = require("./db.js");


const Panier = db.sequelize.define("panier", {
  
  type: db.Sequelize.STRING,

  id: {
    primaryKey: true,
    autoIncrement: true,
    type: db.Sequelize.INTEGER,
    notEmpty: false,
  },

  IdPlat: {
    type: db.Sequelize.INTEGER,
    notEmpty: false,
  },

  PrixPlat: {
    type: db.Sequelize.INTEGER,
    notEmpty: false,
  },
});

module.exports = Panier;
