var express = require('express')
var router = express.Router()
var baucis = require('baucis')

var Entry = require('../models/entry')
var EntryController = baucis.rest('Entry');

router.use('/api', baucis());

module.exports = router