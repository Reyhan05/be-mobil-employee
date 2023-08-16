var express = require('express');
var router = express.Router();

const exampleController = require('../controllers/exampleController');
const mobilController = require('../controllers/mobilController');
const mobillController = require('../controllers/mobillController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/employee', exampleController.employee);
router.get('/employee/:id', exampleController.getbyid);
router.post('/employee', exampleController.store);
router.put('/employee/:id', exampleController.update);
router.delete('/employee/:id', exampleController.delete);

router.get('/car', mobilController.car);
router.get('/car/:id', mobilController.getbyid);
router.post('/car', mobilController.store);
router.put('/car/:id', mobilController.update);
router.delete('/car/:id', mobilController.delete);

router.get('/cars', mobillController.findAllMobil)
router.post('/cars', mobillController.post)
router.get('/cars/:id', mobillController.getById)
router.put('/cars/:id', mobillController.update)
router.delete('/cars/:id', mobillController.delete)

module.exports = router;