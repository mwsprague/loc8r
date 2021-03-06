var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations page. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationsInfo);
router.get('/review/new', ctrlLocations.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about)

module.exports = router;
