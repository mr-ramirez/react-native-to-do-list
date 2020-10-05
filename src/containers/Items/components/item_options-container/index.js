// @flow

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import Styles from './styles';
import IconButton from '../../../../components/icon-button';

type OptionsContainerPropsType = {
  isEnabled: boolean,
  onDisable: () => void,
  onEdit: () => void,
  onEnable: () => void,
  onRemove: () => void
};

export default function OptionsContainer(props: OptionsContainerPropsType): Object {
  const {
    onEdit, isEnabled, onEnable, onRemove, onDisable,
  } = props;

  return (
    <View style={Styles.OptionsContainer}>
      <View style={Styles.Button}>
        <IconButton iconName="edit" color="black" onPress={onEdit} />
      </View>

      <View style={Styles.Button}>
        <IconButton iconName="remove" color="black" onPress={onRemove} />
      </View>

      <View style={Styles.Switch}>
        <Switch
          trackColor={{ false: 'white', true: '#ECF0F1' }}
          thumbColor={isEnabled ? 'black' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => isEnabled ? onDisable() : onEnable()}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
