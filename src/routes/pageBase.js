let express = require('express');
let router = express.Router();
let pageBase = require('../controller/pageBase.js');

router.get('/', pageBase.getHomepage);
router.get('/index', pageBase.getLoginPage);

module.exports = router;