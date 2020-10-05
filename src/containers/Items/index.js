import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Header from '../../components/header/';
import ListContainer from './components/list-container/';
import ItemModal from './components/item-modal/';
import Styles from './styles';

export default function ItemsContainer() {
  const [isAddItemModalOpen, setIfAddItemModalShouldBeOpen] = useState(false);

  return (
    <SafeAreaView style={Styles.container}>
      <Header
        onRightButtonPress={() => setIfAddItemModalShouldBeOpen(!isAddItemModalOpen)}
        title="To Do List"
      />

      <ItemModal isOpen={isAddItemModalOpen} closeModal={() => setIfAddItemModalShouldBeOpen(false)} />

      <ListContainer />
    </SafeAreaView>
  );
}
