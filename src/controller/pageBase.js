
var passport   = require('passport');
const Parametre = require('../model/Parametre');


exports.getHomepage = ( req,res,next) => {
    res.render("index", {});
}

exports.getLoginPage = ( req, res , next) => {
    res.render("index", {});
}


