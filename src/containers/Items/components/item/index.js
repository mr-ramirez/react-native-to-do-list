// @flow

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import type { ItemType } from '../../types';

import Styles from './styles';
import DescriptionContainer from '../item_description-container/';
import OptionsContainer from '../item_options-container/';

type ItemPropsType = {
  item: ItemType,
  onEdit: () => void,
  onEnable: () => void,
  onDisable: () => void,
  onRemove: () => void,
};

export default function Item(props: ItemPropsType): Object {
  const {
    item: {
      dueDate, description, id, isEnabled,
    },
    onDisable,
    onEdit,
    onEnable,
    onRemove,
  } = props;

  return (
    <View key={`item-list-${id}`} style={Styles.ItemContainer}>
      <DescriptionContainer
        description={description}
        date={dueDate}
        isEnabled={isEnabled}
      />

      <OptionsContainer
        isEnabled={isEnabled}
        onDisable={onDisable}
        onEdit={onEdit}
        onEnable={onEnable}
        onRemove={onRemove}
      />
    </View>
  );
}
