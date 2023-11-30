import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigations/AppNavigator';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
