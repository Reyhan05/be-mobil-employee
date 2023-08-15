var express = require('express');
var router = express.Router();

const exampleController = require('../controllers/exampleController');
const mobilController = require('../controllers/mobilController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/employee', exampleController.employee);
router.post('/employee', exampleController.store);
router.get('/employee/:id', exampleController.getbyid);
router.put('/employee/:id', exampleController.update);
router.delete('/employee/:id', exampleController.delete);

router.get('/car', mobilController.car);
router.post('/car', mobilController.store);
router.get('/car/:id', mobilController.getbyid);
router.put('/car/:id', mobilController.update);
router.delete('/car/:id', mobilController.delete);

module.exports = router;