import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import type { ItemType } from './types';

import * as Actions from './actions';
import Header from '../../components/header/';
import ListContainer from './components/list-container/';
import ItemModal from './components/item-modal/';
import Styles from './styles';

export default function ItemsContainer() {
  const [isAddItemModalOpen, setIfAddItemModalShouldBeOpen] = useState(false);

  const { items, lastId } = useSelector(state => ({
    items: state.items.items,
    lastId: state.items.lastId,
  }));

  const dispatch = useDispatch();

  const addItem = (description: string, dueDate: string): void => {
    const newItem: ItemType = {
      id: Number(lastId) + 1,
      description,
      dueDate,
    };

    dispatch(Actions.addItem(newItem));
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header
        onRightButtonPress={() => setIfAddItemModalShouldBeOpen(!isAddItemModalOpen)}
        title="To Do List"
      />

      <ItemModal
        isOpen={isAddItemModalOpen}
        closeModal={() => setIfAddItemModalShouldBeOpen(false)}
        addItem={addItem}
      />

      <ListContainer items={items} />
    </SafeAreaView>
  );
}
