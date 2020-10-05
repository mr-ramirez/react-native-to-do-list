// @flow
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import RootReducer from './rootReducer';
import ItemsContainer from './Items/';

const store = createStore(RootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ItemsContainer />
    </Provider>
  );
}
