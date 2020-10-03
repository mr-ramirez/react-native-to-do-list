// @flow

import React from 'react';
import { FlatList, Text, View } from 'react-native';

import type { ItemType } from '../types';

import Item from '../item';

type ListContainerPropsType = {
  items: Array<ItemType>
};

export default function ListContainer(props: ListContainerPropsType): Object {
  const { items = [] } = props;

  const renderItem: Object = ({ item }): Object => (
    <View key={`item-list-${item.id + 1}`}>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
