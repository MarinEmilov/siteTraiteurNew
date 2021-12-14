const db = require("../model/db.js");
const Panier = require("../model/Panier.js");
const Plat = require("../model/Plat.js");

exports.getHomepage = (req, res, next) => {
  res.render("index", {});
};

exports.getLoginPage = (req, res, next) => {
  res.render("index", {});
};

exports.getMenuDeJourPage = async (req, res, next) => {
  let datas = await Plat.findAll();
  res.render("menudejour", { Plat: datas });
};

exports.getAdminPage = (req, res, next) => {
  res.render("admin", {});
};

exports.getEmploiPage = (req, res, next) => {
  res.render("emploi", {});
};

exports.getHistoirePage = (req, res, next) => {
  res.render("histoire", {});
};

exports.getLocationPage = (req, res, next) => {
  res.render("location", {});
};

exports.getPanierPage = async (req, res, next) => {
    let datas = await Panier.findAll()
    let datasPlat = await Plat.findByPk()
  res.render("panier", {Panier: datas, Plat: datasPlat});
};;


exports.postAdminPage = async (req, res, next) => {
  let namePlat = req.body.titre;
  let prix = req.body.prix;
  let description = req.body.texte;
  let optionVG = req.body.option;
  let data = req.files.pic;

  Plat.create({
    TitrePlat: namePlat,
    PrixPlat: prix,
    DescriptionPlat: description,
    OptionPlat: optionVG,
    ImagePlat: data,
  });

  res.render("admin", { message: "bien sauvgarder merci" });
};


exports.postPanierPage = async (req, res, next) => {    
        let idPlat = req.body.itemId;
        let prix = req.body.itemPrix;

    Panier.create({
            IdPlat: idPlat,
            PrixPlat: prix,
            
        });
        res.render("panier", {});
    
 };





// exports.postPanierPage = async (req, res, next) => {
//    Plat.findByPk(req.body.itemId, plat =>{
//        Panier.create(req.body.itemId, plat.PrixPlat, () => {
//            res.redirect('/panier')
//        })
//    });
// };










// exports.postPanierPage = async (req, res, next) => {
//   Plat.findByPk(req.body.itemId, (plat) => {

//     Panier.add(req.body.itemId, PrixPlat, () => {
//       res.render("/panier",{});
//     });
//   });
// };

// exports.postPanierPage = async (req, res, next) => {
//   let idPlat = req.body.itemId;

//   Panier.create({
//     IdPlat: idPlat,

//   });
//   res.render("panier", {});
// };

// let panier = { items: [], totalPrix: 0 };
// let item = {id: id, qty: 0};

// panier.items.push(item);
// panier.totalPrix = panier.totalPrix + PrixPlat;

// res.render("panier", {});

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
