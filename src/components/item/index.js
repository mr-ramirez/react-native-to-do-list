// @flow

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import type { ItemType } from '../types';

import Styles from './styles';
import IconButton from '../icon-button';
import DescriptionContainer from './description-container';
import OptionsContainer from './options-container';

export default function Item(props: ItemType): Object {
  const { dueDate, description, id } = props;

  return (
    <View key={`item-list-${id}`} style={Styles.ItemContainer}>
      <DescriptionContainer description={description} date={dueDate} />
      <OptionsContainer itemId={id} />
    </View>
  );
}
