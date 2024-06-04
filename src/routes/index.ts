import { Router, Response, Request } from 'express';

const router = Router();

// const ENV =
//   typeof process.env.NODE_ENV !== 'undefined'
//     ? `.env.${process.env.NODE_ENV}`
//     : `.env`;
// require('dotenv').config({ path: ENV });

//ROUTES
const playerRouter = require('./players');

router.use('/players', playerRouter);

module.exports = router;
