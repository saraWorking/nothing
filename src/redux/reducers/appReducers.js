
import { combineReducers } from 'redux';
import userReducer from './user.reducer'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  user: userReducer
});

export default appReducers