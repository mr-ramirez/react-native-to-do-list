import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useHistory } from "react-router-dom";

import type { ItemType } from './types';

import * as Actions from './actions';
import Header from '../../components/header/';
import ListContainer from './components/list-container/';
import AddItemModal from './components/add-item-modal/';
import EditItemModal from './components/edit-item-modal/';
import Styles from './styles';

export default function ItemsContainer() {
  const [isAddItemModalOpen, setIfAddItemModalShouldBeOpen] = useState(false);
  const [isEditItemModalOpen, setIfEditItemModalShouldBeOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  const { push } = useHistory();

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
      isEnabled: true,
    };

    dispatch(Actions.addItem(newItem));
    dispatch(Actions.updateLastId());
  };

  const editItem = (item: ItemType): void => {
    dispatch(Actions.editItem(item));
  };

  const removeItem = (id: string): void => {
    dispatch(Actions.removeItem(id));
  };

  const openEditModal = (item: ItemType) => {
    setItemToEdit(item);
    setIfEditItemModalShouldBeOpen(true);
  };

  const onEnable = (item: ItemType) => {
    editItem({ ...item, isEnabled: true });
  };

  const onDisable = (item: ItemType) => {
    editItem({ ...item, isEnabled: false });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header
        // onRightButtonPress={() => setIfAddItemModalShouldBeOpen(!isAddItemModalOpen)}
        onRightButtonPress={() => push('/scanner')}
        title="To Do List"
      />

      <AddItemModal
        isOpen={isAddItemModalOpen}
        closeModal={() => setIfAddItemModalShouldBeOpen(false)}
        addItem={addItem}
      />

      <EditItemModal
        isOpen={isEditItemModalOpen}
        closeModal={() => setIfEditItemModalShouldBeOpen(false)}
        editItem={editItem}
        itemToEdit={itemToEdit}
      />

      <ListContainer
        items={items}
        openEditModal={openEditModal}
        onEnable={onEnable}
        onDisable={onDisable}
        onRemove={removeItem}
      />
    </SafeAreaView>
  );
}
