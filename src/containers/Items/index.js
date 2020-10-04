import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import type { ItemType } from './components/types';

import useContext from '../../data/context';
import Header from '../../components/header/';
import ListContainer from './components/list-container/';
import Styles from './styles';

export default function ItemsContainer() {
  const { Provider } = useContext();

  return (
    <Provider>
      <SafeAreaView style={Styles.container}>
        <Header title="To Do List" />
        <ListContainer />
      </SafeAreaView>
    </Provider>
  );
}
