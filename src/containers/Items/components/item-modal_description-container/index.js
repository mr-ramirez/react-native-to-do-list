// @flow
import React, { useState } from 'react';

import {
  TextInput, View,
} from 'react-native';

import Styles from './styles';

type ItemModalDescriptionContainerPropsType = {
  description: string,
  onChangeDescription: (string) => void
};

export default function ItemModalDescriptionContainer(props: ItemModalDescriptionContainerPropsType): Object {
  const {
    description,
    onChangeDescription,
  } = props;
  
  return (
    <View style={Styles.DescriptionInputContainer}>
      <TextInput
        onChangeText={(text) => onChangeDescription(text)}
        value={description}
        editable
        multiline
        placeholder="Description"
      />
    </View>
  );
}
