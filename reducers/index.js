import { combineReducers } from 'redux'
import toggles from './toggler';
import {
  selectGundam,
  gundamRequests
} from './requests';

export default combineReducers({
  toggles,
  selectGundam,
  gundamRequests
});
