import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import type { ItemType } from './components/types';

import useContext from './data/context';
import Header from './components/header/';
import ListContainer from './components/list-container/';

export default function App() {
  const { Provider } = useContext();

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <Header title="To Do List" />
        <ListContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
