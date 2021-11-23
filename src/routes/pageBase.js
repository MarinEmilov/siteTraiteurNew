let express = require('express');
let router = express.Router();
let pageBase = require('../controller/pageBase.js');

router.get('/', pageBase.getHomepage);
router.get('/index', pageBase.getLoginPage);
router.get('/vg', pageBase.getVgPage);
router.get('/sansgluten', pageBase.getSansGlutenPage);
router.get('/familiale', pageBase.getFamilialePage);
router.get('/dejeuner', pageBase.getDejeunerPage);
router.get('/individuelle', pageBase.getIndividuellePage);
router.get('/emploi', pageBase.getEmploiPage);
router.get('/histoire', pageBase.getHistoirePage);
router.get('/location', pageBase.getLocationPage);

module.exports = router;