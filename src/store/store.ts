import {createStore} from 'redux';
import {persistStore, persistReducer, Persistor} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export interface Store {
  store: ReturnType<typeof createStore>;
  persistor: Persistor;
}

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
