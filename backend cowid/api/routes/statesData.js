const express = require('express');
const router = express.Router();
const { getStateData } = require('../controller/getStateData');
const { getCountryData } = require('../controller/getCountryData');
// const { getIndiaData } = require('../controller/getIndiaData');

router.get('/:loc', getStateData);
router.get('/', getCountryData);

module.exports = router;