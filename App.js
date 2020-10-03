import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import type { ItemType } from './components/types';

import ListContainer from './components/list-container/';

export default function App() {
  const items: Array<ItemType> = [{
    id: '10001',
    description: 'Description 1',
    dateAdded: 'null',
  }, {
    id: '10002',
    description: 'Description 2',
    dateAdded: 'null',
  }, {
    id: '10003',
    description: 'Description 3',
    dateAdded: 'null',
  }];

  return (
    <SafeAreaView style={styles.container}>
      <ListContainer items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
