import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AppState, WeatherForecast} from '~/types';

const initialState: AppState = {
  users: {},
  currentUser: null,
  locationName: '',
  searchResults: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      const userName = action.payload;
      if (!state.users[userName]) {
        state.users[userName] = {userName, isLoggedIn: true, searchHistory: []};
      } else {
        state.users[userName].isLoggedIn = true;
      }
      state.currentUser = userName;
    },

    logoutUser: state => {
      if (state.currentUser) {
        state.users[state.currentUser].isLoggedIn = false;
        state.currentUser = null;
      }
    },

    setLocationName: (state, action: PayloadAction<string>) => {
      state.locationName = action.payload;
    },

    setSearchResults: (state, action: PayloadAction<WeatherForecast[]>) => {
      state.searchResults = action.payload;
    },

    updateSearchHistory: (
      state,
      action: PayloadAction<{location: string; temp: string}>,
    ) => {
      const {location, temp} = action.payload;
      if (state.currentUser) {
        const userHistory = state.users[state.currentUser].searchHistory;
        const newEntry = {location, temp};
        const existingEntryIndex = userHistory.findIndex(
          entry => entry.location === location,
        );
        if (existingEntryIndex >= 0) {
          userHistory[existingEntryIndex] = newEntry;
        } else {
          userHistory.unshift(newEntry);
        }
      }
    },

    removeSearchEntry: (
      state,
      action: PayloadAction<{userName: string; location: string}>,
    ) => {
      const {userName, location} = action.payload;
      if (state.users[userName]) {
        state.users[userName].searchHistory = state.users[
          userName
        ].searchHistory.filter(entry => entry.location !== location);
      }
    },
  },
});

export const {
  loginUser,
  logoutUser,
  setLocationName,
  setSearchResults,
  removeSearchEntry,
  updateSearchHistory,
} = appSlice.actions;

export default appSlice.reducer;
