import axios from 'axios';
import TASKS_ACTION_CONSTANTS from './usersActionConstants';

/**
 * @param {Object} [options]
 * @param {Number} [options.limit]
 * @param {Number} [options.skip]
 */
export const getTasks = (options = {}) => dispatch => {
  const params = {...options};
  params.limit = options.limit || 10;

  axios
    .get(`${apiHelper.getApiBaseUrl()}/api/skills/`, {params})
    .then(res => {
      dispatch({
        type: TASKS_ACTION_CONSTANTS.GET_TASKS,
        payload: res.data.data,
      });

      dispatch({
        type: TASKS_ACTION_CONSTANTS.GET_TASKS_COUNT,
        payload: res.data.total,
      });
    });
};
