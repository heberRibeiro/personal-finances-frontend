import { combineReducers } from 'redux';

import dateReducer from './modules/Date/reducer';
import btnLeftReducer from './modules/BtnLeft/reducer';
import btnRightReducer from './modules/BtnRight/reducer';

export default combineReducers({
  dateReducer,
  btnLeftReducer,
  btnRightReducer,
});
