// @flow

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import type { ItemType } from '../../types';

import Styles from './styles';
import DescriptionContainer from '../item_description-container/';
import OptionsContainer from '../item_options-container/';

export default function Item(props: Object): Object {
  const { dueDate, description, id, onEdit } = props;

  return (
    <View key={`item-list-${id}`} style={Styles.ItemContainer}>
      <DescriptionContainer description={description} date={dueDate} />
      <OptionsContainer onEdit={onEdit} />
    </View>
  );
}
