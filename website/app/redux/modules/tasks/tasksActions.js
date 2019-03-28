import axios from 'axios';
import TASKS_ACTION_CONSTANTS from './tasksActionConstants';

export const getTasks = (query = {}) => dispatch => {
  const params = {...query};

  axios
    .get('http://localhost:3001/api/task/', {params})
    .then(res => {
      console.log(res);
      dispatch({
        type: TASKS_ACTION_CONSTANTS.GET_TASKS,
        payload: res.data,
      });

      dispatch({
        type: TASKS_ACTION_CONSTANTS.GET_TASKS_COUNT,
        payload: res.data.length,
      });
    });
};

export const createTask = (task = {}) => dispatch => {
  axios
    .post('http://localhost:3001/api/task/create', {task})
    .then(res => {
      dispatch({
        type: TASKS_ACTION_CONSTANTS.CREATE_TASK,
        payload: res.data,
      });

      dispatch({
        type: TASKS_ACTION_CONSTANTS.GET_TASKS_COUNT,
        payload: res.data.length,
      });
    });
};

export const updateTask = (task = {}) => dispatch => {
  axios
    .post('http://localhost:3001/api/task/update', {task})
    .then(res => {

    });
};
