// @flow

import React from 'react';
import { Text, View } from 'react-native';

import type { ItemType } from '../types';

import Styles from './styles';
import IconButton from '../icon-button';

export default function Item(props: ItemType): Object {
  const { description, id } = props;

  return (
    <View key={`item-list-${id}`} style={Styles.ItemContainer}>
      <View style={Styles.Description}>
        <Text>{description}</Text>
      </View>

      <View style={Styles.ButtonsContainer}>
        <View style={Styles.Button}>
          <IconButton iconName="edit" color="black" onPress={() => true} />
        </View>

        <View style={Styles.Button}>
          <IconButton iconName="remove" color="black" onPress={() => true} />
        </View>
      </View>

    </View>
  );
}
