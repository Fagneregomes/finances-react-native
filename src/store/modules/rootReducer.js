import { combineReducers } from 'redux';

import user from './user/reducer';
import categories from './categories/reducer';
import registers from './registers/reducer';

export default combineReducers({
  user,
  categories,
  registers
});