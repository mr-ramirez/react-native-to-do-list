// @flow

import React from 'react';
import { Button, Text, View } from 'react-native';

import type { ItemType } from '../types';
import Styles from './styles';

export default function Item(props: ItemType): Object {
  const { description, id } = props;

  return (
    <View key={`item-list-${id}`} style={Styles.ItemContainer}>
      <View style={Styles.Description}>
        <Text>{description}</Text>
      </View>

      <View style={Styles.Button}>
        <Button title="Done" />
      </View>
    </View>
  );
}
