// @flow

import React from 'react';
import { FlatList, Text, View } from 'react-native';

import type { ItemType } from '../../types';

import Item from '../item';

type ListContainerPropsType = {
  items: Array<ItemType>,
  openEditModal: (ItemType) => void
};

export default function ListContainer(props: ListContainerPropsType): Object {
  const { items, openEditModal } = props;

  const renderItem: Object = ({ item }): Object => (
    <Item {...item} onEdit={() => openEditModal(item)} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
