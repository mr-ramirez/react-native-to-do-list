// @flow

import React from 'react';
import { FlatList, Text, View } from 'react-native';

import type { ItemType } from '../../types';

import Item from '../item';

type ListContainerPropsType = {
  items: Array<ItemType>,
  onDisable: (ItemType) => void,
  onEnable: (ItemType) => void,
  openEditModal: (ItemType) => void
};

export default function ListContainer(props: ListContainerPropsType): Object {
  const {
    items, onDisable, onEnable, openEditModal,
  } = props;

  const renderItem: Object = ({ item }): Object => (
    <Item
      item={item}
      onEdit={() => openEditModal(item)}
      onDisable={() => onDisable(item)}
      onEnable={() => onEnable(item)}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
