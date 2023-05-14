import React from 'react';
import { Provider } from 'react-redux';
import store from 'app/store/store';
import Router from 'app/routes/router';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App;
