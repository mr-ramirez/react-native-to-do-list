
// @flow
import React, { useState } from 'react';

import { Text, View } from 'react-native';

import Styles from './styles';
import IconButton from '../../../../components/icon-button/';

type ItemModalErrorMessagePropsType = {
  errorMessage: string
};

export default function ItemModalErrorMessage(props: ItemModalErrorMessagePropsType): Object {
  const { errorMessage } = props;
  
  return (
    <View style={Styles.FormErrorMessageContainer}>
      <Text style={Styles.ErrorMessage}>{errorMessage}</Text>
    </View>
  );
}