import TASKS_ACTION_CONSTANTS from './tasksActionConstants';

const defaultState = {
  tasks: [],
  tasksCount: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TASKS_ACTION_CONSTANTS.GET_TASKS:
      return handleGetTasks(state, action.payload);

    case TASKS_ACTION_CONSTANTS.GET_TASKS_COUNT:
      return handleGetTasksCount(state, action.payload);

    default:
      return state;
  }
};

function handleGetTasks(state, tasks) {
  return {...state, tasks};
}

function handleGetTasksCount(state, tasksCount) {
  return {...state, tasksCount};
}
