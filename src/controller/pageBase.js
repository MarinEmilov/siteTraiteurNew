
const db = require('../model/db.js');
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

exports.getAdminPage = ( req, res , next) => {
    res.render("admin", {});
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

exports.postAdminPage = async ( req, res , next) => { 
    const {name, date} = req.files.pic;   
    await db.sequelize.create({nameImage: name, image: date }).into('imgs');
        res.sendStatus(200);
}
    










// 1 er vercion 

// exports.postAdminPage = async ( req, res , next) => {
//     const {name, date} = req.files.pic;
//     if(name && data){
//         await db.sequelize.create({name: name, img: data}).into('img');
//         res.sendStatus(200);
//     }else {
//         res.sendStatus(400);
//     }
    
// }




// 2em version 






// exports.postAdminPage = async ( req, res , next) => {
//     File.create({
//         type: req.files.pic,
//         name: req.file.pic,
//         data: req.file.pic
//     }).then(file =>{
//         console.log(file);
    
//     const result = {
//         status: "ok",
//         filename: req.file.originalname,
//         message: "Upload Successfully!",
//         downloadUrl: "http://localhost:8080/api/file/" + file.dataValues.id,
//     }

//     res.json(result);
// }).catch(err => {
//     console.log(err);

//     const result = {
//         status: "error",
//         error: err
//     }
//     res.json(result);
// });
// }




