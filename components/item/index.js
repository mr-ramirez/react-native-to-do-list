// @flow

import React from 'react';
import { Text, View } from 'react-native';

import type { ItemType } from '../types';

export default function Item(props: ItemType): Object {
  const { description, id } = props;

  return (
    <View key={`item-list-${id}`}>
      <Text>{description}</Text>
    </View>
  );
}
