import {RootState} from './rootReducer';

export const selectCurrentUser = (state: RootState) => state.app.currentUser;

export const selectSearchHistory = (state: RootState) => {
  const currentUser = selectCurrentUser(state);
  const user = currentUser ? state.app.users[currentUser] : null;
  return user ? user.searchHistory : [];
};
