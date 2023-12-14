import {combineReducers} from 'redux';

import appReducer from './slices/appSlice';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
