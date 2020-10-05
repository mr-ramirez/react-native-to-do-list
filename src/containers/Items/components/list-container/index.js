// @flow

import React from 'react';
import { FlatList, Text, View } from 'react-native';

import type { ItemType } from '../../types';

import Item from '../item';
import EmptyListMessage from '../empty-list-message';

type ListContainerPropsType = {
  items: Array<ItemType>,
  onDisable: (ItemType) => void,
  onEnable: (ItemType) => void,
  onRemove: (string) => void,
  openEditModal: (ItemType) => void
};

export default function ListContainer(props: ListContainerPropsType): Object {
  const {
    items, onDisable, onEnable, onRemove, openEditModal,
  } = props;

  const renderItem: Object = ({ item }): Object => (
    <Item
      item={item}
      onEdit={() => openEditModal(item)}
      onDisable={() => onDisable(item)}
      onEnable={() => onEnable(item)}
      onRemove={() => onRemove(item.id)}
    />
  );

  if (items.length === 0) {
    return (
      <EmptyListMessage />
    );
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
