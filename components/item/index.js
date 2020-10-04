// @flow

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import type { ItemType } from '../types';

import Styles from './styles';
import IconButton from '../icon-button';

export default function Item(props: ItemType): Object {
  const { description, id } = props;

  const [isEnabled, setEnabled] = useState(false);

  return (
    <View key={`item-list-${id}`} style={Styles.ItemContainer}>
      <View style={Styles.TextContainer}>
        <Text>{description}</Text>
      </View>

      <View style={Styles.OptionsContainer}>
        <View style={Styles.Button}>
          <IconButton iconName="edit" color="black" onPress={() => true} />
        </View>

        <View style={Styles.Button}>
          <IconButton iconName="remove" color="black" onPress={() => true} />
        </View>

        <View style={Styles.Switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
      </View>

    </View>
  );
}
