let express = require("express");
let router = express.Router();
let pageBase = require("../controller/pageBase.js");

router.get("/", pageBase.getHomepage);
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
