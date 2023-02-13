import { Router } from 'express'
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/rolView', function(req, res, next) {
  res.render('rolSelection');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

export default router
