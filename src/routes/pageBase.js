let express = require("express");
let router = express.Router();
let pageBase = require("../controller/pageBase.js");




router.get("/", pageBase.getHomepage);
router.get("/login", pageBase.getLoginpage);
router.post("/login", pageBase.postLoginpage);
router.get("/register", pageBase.getRegisterpage);
router.post("/register", pageBase.postRegisterpage);
router.get("/index", pageBase.getHomepage);
router.get("/menudejour", pageBase.getMenuDeJourPage);
router.get("/admin", pageBase.getAdminPage);
router.get("/emploi", pageBase.getEmploiPage);
router.get("/histoire", pageBase.getHistoirePage);
router.get("/location", pageBase.getLocationPage);
router.post("/admin/ajouter-un-plat", pageBase.postAdminPage);
router.get("/panier", pageBase.getPanierPage);
router.post("/ajouter-dans-panier", pageBase.postPanierPage);

module.exports = router;
