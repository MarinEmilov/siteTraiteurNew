let express = require('express');
let router = express.Router();
let pageBase = require('../controller/pageBase.js');

router.get('/', pageBase.getHomepage);
router.get('/index', pageBase.getHomepage);
router.get('/vg', pageBase.getVgPage);
router.get('/sansgluten', pageBase.getSansGlutenPage);
router.get('/familiale', pageBase.getFamilialePage);
router.get('/dejeuner', pageBase.getDejeunerPage);
router.get('/admin', pageBase.getAdminPage);
router.get('/emploi', pageBase.getEmploiPage);
router.get('/histoire', pageBase.getHistoirePage);
router.get('/location', pageBase.getLocationPage);
router.post('/upload', pageBase.getAdminPage);

module.exports = router;