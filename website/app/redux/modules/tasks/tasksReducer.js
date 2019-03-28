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

    case TASKS_ACTION_CONSTANTS.CREATE_TASK:
      return handleGetTasks(state, action.payload);

    case TASKS_ACTION_CONSTANTS.UPDATE:
      return handleUpdateTasks(state, action.payload);

    default:
      return state;
  }
};

function handleGetTasks(state, tasks) {
  return {...state, tasks};

}

function handleUpdateTasks(state, task) {
  state.tasks.push(task)
  return {...state};

}

function handleGetTasksCount(state, tasksCount) {
  return {...state, tasksCount};
}
