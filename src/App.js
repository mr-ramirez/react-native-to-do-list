import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import type { ItemType } from './components/types';

import Header from './components/header/';
import ListContainer from './components/list-container/';

export default function App() {
  const items: Array<ItemType> = [{
    id: '10001',
    description: 'Description 1',
    dueDate: 'null',
  }, {
    id: '10002',
    description: 'Description 2',
    dueDate: 'null',
  }, {
    id: '10003',
    description: 'Description 3',
    dueDate: 'null',
  }];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="To Do List" />
      <ListContainer items={items} />
    </SafeAreaView>
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
