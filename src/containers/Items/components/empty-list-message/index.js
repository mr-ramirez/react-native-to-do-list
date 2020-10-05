// @flow

import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

export default function EmptyListMessage(): Object {
  return (
    <View style={Styles.EmptyListContainer}>
      <Text>No item has been added yet</Text>
    </View>
  );
}
