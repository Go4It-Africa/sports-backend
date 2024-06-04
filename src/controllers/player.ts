import { NextFunction, Request, Response } from 'express';
import { Player } from '../interfaces/player';
import { postPlayer } from '../services/player-service';

const createPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const player: Player = req.body;

    const addPlayer = await postPlayer(player);

    return res.status(201).json({
      message: 'Player created successfully!',
      data: addPlayer,
    });
  } catch (error) {}
};

// const errorHandler = require('../util/error-handler').setErrorHandler;

// const causeService = require('../services/cause-service');
// const { postCause, getCause, getAllCauses, updateCause, deleteCause } =
//   causeService;

// const setError = (error) => {
//   const err = error;
//   err.status = error.status || 500;
//   return err;
// };

// const createCause = async (req, res, next) => {
//   try {
//     const { title, type, description, amount, start_date, end_date, location } =
//       req.body;
//     const { userId } = req;

//     const data = {
//       title: title,
//       description: description,
//       target_amount: amount,
//       start_date: start_date,
//       end_date: end_date,
//       user_id: userId,
//       type: type,
//       location: location,
//     };

//     const cause = await postCause(data);

//     if (cause instanceof Error || !cause) {
//       let err = new Error('Cause could not be created!');
//       err.status = 500;
//       throw err;
//     }
//     return res.status(201).json({
//       message: 'Cause created successfully!',
//       data: cause,
//     });
//   } catch (error) {
//     const err = setError(error);
//     return next(errorHandler(err));
//   }
// };

// const fetchAllCauses = async (req, res, next) => {
//   try {
//     const current_page = parseInt(req.query.page) || 1;
//     const per_page = parseInt(req.query.limit) || 10;

//     const causes = await getAllCauses(current_page, per_page);

//     if (causes instanceof Error) {
//       let err = new Error('No causes found!');
//       err.status = 204;
//       throw err;
//     }

//     const { total, prevPage, nextPage, perPage, currentPage, lastPage } =
//       causes.pagination;

//     return res.status(200).json({
//       message: 'Causes fetched successfully!',
//       results: causes.data.length ? causes.data : [],
//       pagination: {
//         count: total,
//         limit: perPage,
//         current_page: currentPage,
//         total_pages: lastPage,
//         next: nextPage,
//         previous: prevPage,
//       },
//     });
//   } catch (error) {
//     const err = setError(error);
//     return next(errorHandler(err));
//   }
// };

// const fetchCause = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const cause = await getCause(id);

//     if (!cause) {
//       let err = new Error('No cause found!');
//       err.status = 204;
//       throw err;
//     }

//     return res.status(200).json({
//       message: 'Cause fetched successfully!',
//       data: cause,
//     });
//   } catch (error) {
//     const err = setError(error);
//     return next(errorHandler(err));
//   }
// };
// const updateCauseDetails = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const cause = await updateCause(id, req.body);

//     if (!cause) {
//       let err = new Error('Cause could not be updated!');
//       err.status = 422;
//       throw err;
//     }

//     return res.status(201).json({
//       message: 'Cause updated successfully!',
//       data: cause,
//     });
//   } catch (error) {
//     const err = setError(error);
//     return next(errorHandler(err));
//   }
// };

// const removeCause = (req, res, next) => {
//   res.status(200).json({ message: 'POST /causes' });
// };

// module.exports = {
//   fetchAllCauses,
//   fetchCause,
//   createCause,
//   updateCauseDetails,
//   removeCause,
// };
