import {combineReducers} from 'redux';
import tasks from '../modules/tasks/tasksReducer';
import users from '../modules/users/usersReducer';
import auth from '../modules/auth/authReducer';

const rootReducer = combineReducers({
  tasks,
  users,
  auth
});

export default rootReducer;
