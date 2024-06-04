import { Player } from '../interfaces/player';

const postPlayer = async (data: Player) => {
  try {
    //const [id] = await db('causes'); .returning(['id', 'title', 'location']).insert(data);
    // return id;
  } catch (error) {
    //return setDbError(error);
  }
};
export { postPlayer };

// const errorHandler = require('../util/error-handler').setErrorHandler;
// const db = require('../model/index');

// const setDbError = (error) => {
//   const err = error;
//   err.status = 500;
//   err.message = error.message;
//   return errorHandler(err);
// };

// const postCause = async (data) => {
//   try {
//     const [id] = await db('causes')
//       .returning(['id', 'title', 'location'])
//       .insert(data);

//     return id;
//   } catch (error) {
//     return setDbError(error);
//   }
// };

// const getCause = async (id) => {
//   try {
//     const cause = await db('causes').where({ id }).first();
//     return cause;
//   } catch (error) {
//     return setDbError(error);
//   }
// };

// const getAllCauses = async (page, limit) => {
//   try {
//     const causes = await db('causes').paginate({
//       perPage: limit,
//       currentPage: page,
//     });

//     if (!causes.data.length) {
//       throw new Error('No causes available');
//     }

//     return causes;
//   } catch (error) {
//     return setDbError(error);
//   }
// };

// const updateCause = async (id, data) => {
//   try {
//     const cause = await db('causes').where({ id }).returning('*').update(data);
//     return cause;
//   } catch (error) {
//     return setDbError(error);
//   }
// };

// const deleteCause = async () => {};

// module.exports = {
//   postCause,
//   getCause,
//   getAllCauses,
//   updateCause,
//   deleteCause,
// };
