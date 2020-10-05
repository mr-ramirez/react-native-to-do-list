
// @flow
import React, { useState } from 'react';

import { Text, View } from 'react-native';

import Styles from './styles';
import IconButton from '../../../../components/icon-button/';

type ItemModalHeaderPropsType = {
  onClose: () => void,
  title: string
};

export default function ItemModalHeader(props: ItemModalHeaderPropsType): Object {
  const { onClose, title } = props;
  
  return (
    <View style={Styles.FormHeaderContainer}>
      <Text style={Styles.Title}>{title}</Text>
      <IconButton iconName="close" color="black" onPress={onClose} />
    </View>
  );
}