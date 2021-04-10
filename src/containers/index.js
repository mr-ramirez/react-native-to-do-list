// @flow
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import RootReducer from './rootReducer';
import ItemsContainer from './Items/';
import ResultsContainer from './Results/';
import ScannerContainer from './Scanner/';

const store = createStore(RootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={ItemsContainer} />
        <Route path="/results" component={ResultsContainer} />
        <Route path="/scanner" component={ScannerContainer} />
      </NativeRouter>
    </Provider>
  );
}
