import { Router, Response, Request } from 'express';
import { Player } from '../interfaces/player';

const router = Router();
let players: Player[] = [];

// const validateInput = require('../middleware/validation');

// const authController = require('../controllers/auth');

// const isAuth = require('../middleware/is-auth');
// const { signUp, loginIn, activateAccount, forgetPassword, resetPassword } =
//   authController;

// router.post(
//   '/signup',
//   validateInput(['first_name', 'last_name', 'email', 'password']),
//   signUp
// );
// router.post('/login', validateInput(['email', 'password']), loginIn);
// router.get('/activate/:id', activateAccount);
// router.post('/forget-password', validateInput(['email']), forgetPassword);
// router.patch('/reset-password', validateInput(['password']), resetPassword);
// router.patch(
//   '/change-password',
//   validateInput(['password']),
//   isAuth,
//   resetPassword
// );
// router.get('/token-refresh', isAuth, authController.refreshUserToken);

// module.exports = router;

export default router;
