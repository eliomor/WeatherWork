import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './store/store';
import AppNavigator from './navigation/AppNavigator';

const queryClient = new QueryClient();

export default function App() {
  const {store, persistor} = configureStore();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
