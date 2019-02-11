import {combineReducers} from 'redux';
import tasks from '../modules/tasks/tasksReducer';

const rootReducer = combineReducers({
  tasks,
});

export default rootReducer;
