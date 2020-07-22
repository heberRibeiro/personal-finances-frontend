import { combineReducers } from 'redux';

import periodReducer from './modules/Date/reducer';
import btnLeftReducer from './modules/BtnLeft/reducer';
import btnRightReducer from './modules/BtnRight/reducer';
import releasesReducer from './modules/Releases/reducer';

export default combineReducers({
  periodReducer,
  btnLeftReducer,
  btnRightReducer,
  releasesReducer,
});
