// @flow
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import moment from 'moment';

import type { ItemType } from '../../types';

import Styles from './styles';

type ItemModalActionsContainerPropsType = {
  onSave: () => void
};

export default function ItemModalActionsContainer(props: ItemModalActionsContainerPropsType): Object {
  const { onSave } = props;

  return (
    <View style={Styles.ActionContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={Styles.SaveButton}
        onPress={onSave}
      >
        <Text style={Styles.SaveButtonText}>Save</Text>
      </TouchableHighlight>
    </View>
  );
}
