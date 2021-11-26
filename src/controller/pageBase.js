
const Plat = require('../model/Plat.js');




exports.getHomepage = async( req,res,next) => {
    let datas = await Plat.findAll();
    res.render("index", {Plat:datas});
}

exports.getLoginPage = ( req, res , next) => {
   
    res.render("index", {});
}

exports.getVgPage = ( req, res , next) => {
    res.render("vg", {});
}

exports.getSansGlutenPage = ( req, res , next) => {
    res.render("sansgluten", {});
}

exports.getFamilialePage = ( req, res , next) => {
    
    res.render("familiale", {});
}

exports.getDejeunerPage = ( req, res , next) => {
    res.render("dejeuner", {});
}

exports.getIndividuellePage = ( req, res , next) => {
    res.render("individuelle", {});
}

exports.getEmploiPage = ( req, res , next) => {
    res.render("emploi", {});
}

exports.getHistoirePage = ( req, res , next) => {
    res.render("histoire", {});
}

exports.getLocationPage = ( req, res , next) => {
    res.render("location", {});
}