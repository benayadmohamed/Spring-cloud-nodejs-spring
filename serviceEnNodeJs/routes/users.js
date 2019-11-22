var express = require('express');
var router = express.Router();
var UserServices = require('../services/user-service');

/* GET users listing. */

router.get('/', UserServices.all);
router.post('/', UserServices.add);
router.delete('/all', UserServices.deleteAll);
router.get('/:id', UserServices.getOne);

module.exports = router;
