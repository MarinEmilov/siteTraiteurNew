const db = require("../model/db.js");
const Panier = require("../model/Panier.js");
const Plat = require("../model/Plat.js");
const multer = require("multer");
const path = require("path");
const { createBrotliCompress } = require("zlib");
// const myCompteur = require("../middleware/compteur.js");
const { count } = require("console");

// function myCounteur() {

//   let datas = db.Sequelize.Panier.findAll();
//   let count = 0;
//   Panier.datas
//   for (let i = 0; i < datas.length; i++) {
//     if (datas[i]) count++;

//   }

//   return console.log(datas);
// }

exports.getHomepage = async (req, res, next) => {
  
  res.render("index", { message: res.Paniercount });
};

exports.getMenuDeJourPage = async (req, res, next) => {
  //  let datas = await Plat.findAll();
  // let data = await Panier.findAll();
  // let count = 0;
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i]) count++;
  // }
  // console.log(res.Panier)
  // console.log(res.Paniercount)

  if (res.Plat == 0) {
    res.render("index", {
      erreur: "IL FAUT QUE ADMIN RENTRE LE PLAT POUR AUJOURD'HUI :)",
    });
  }
  res.render("menudejour", { Plat: res.Plat, message: res.Paniercount});
};

exports.getAdminPage = (req, res, next) => {
  res.render("admin", {});
};

exports.getEmploiPage = async (req, res, next) => {
  let datas = await Panier.findAll();
  let count = 0;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i]) count++;
  }

  res.render("emploi", { message: count });
};

exports.getHistoirePage = async (req, res, next) => {
  let datas = await Panier.findAll();
  let count = 0;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i]) count++;
  }
  res.render("histoire", { message: count });
};

exports.getLocationPage = async (req, res, next) => {
  let datas = await Panier.findAll();
  let count = 0;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i]) count++;
  }
  res.render("location", { message: count });
};

exports.getPanierPage = async (req, res, next) => {
 res.Panier
 res.Plat
  res.render("panier", { Panier: res.Panier, message: res.Paniercount});
};

exports.postAdminPage = async (req, res, next) => {
  let namePlat = req.body.titre;
  let prix = req.body.prix;
  let description = req.body.texte;
  let optionVG = req.body.option;
  let data = req.files.pic;
  let active = req.body.active ? req.body.active : false;

  Plat.create({
    TitrePlat: namePlat,
    PrixPlat: prix,
    DescriptionPlat: description,
    OptionPlat: optionVG,
    ImagePlat: data,
    PlatVisible: active,
  });

  res.render("admin", { message: "bien sauvgarder merci" });
};

exports.postPanierPage = async (req, res, next) => {
  let datas = await Panier.findAll();
  let count = 0;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i]) count++;
    // console.log(count);
  }

  let idPlat = req.body.itemId;
  let prix = req.body.itemPrix;

  Panier.create({
    IdPlat: idPlat,
    PrixPlat: prix,
  });
  res.render("panier", {
    Panier: datas,
    panier: "bien sauvgarder merci",
    message: count,
  });
};

// const storage = multer.diskStorage({
//   destination: (req, file, next) => {
//     next(null, "../upload")
//   },
//   filename: (req, file, next) => {
//     next(null, Date.now() + path.extname(file.originalname))
//   }
// })

// const upload = multer({
//   storage: storage,
//   limits: {fileSize: "1000000" },
//   fileFilter: (req, file, next) => {
//     const fileTypes = /image*/
//     const mimeType = fileTypes.test(file.mimetype)
//     const extname = fileTypes.test(path.extname(file.originalname))

//     if(mimeType && extname) {
//       return next(null, true)
//     }

//     next("Give propert files formate to upload")

//   }
// }).single("image")

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
