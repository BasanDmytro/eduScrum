import axios from 'axios';
import USERS_ACTION_CONSTANTS from './usersActionConstants';

/**
 * @param {Object} [options]
 * @param {Number} [options.limit]
 * @param {Number} [options.skip]
 */
export const getUser = (options = {}) => dispatch => {
  const params = {...options};

  axios
    .get('/api/skills/')
    .then(res => {
      dispatch({
        type: USERS_ACTION_CONSTANTS.GET_TASKS,
        payload: res.data.data,
      });

      dispatch({
        type: USERS_ACTION_CONSTANTS.GET_TASKS_COUNT,
        payload: res.data.total,
      });
    });
};
