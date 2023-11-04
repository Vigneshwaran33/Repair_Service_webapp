const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.get('/',userController.renderLogin);
router.post('/login',userController.login);
router.get('/signup',userController.renderSignup);
router.post('/signup',userController.signup);

router.get('/home',userController.renderHome);

module.exports=router;