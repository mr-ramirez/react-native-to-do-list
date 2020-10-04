// @flow

import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

type DescriptionContainerPropsType = {
  date: string,
  description: string
};

export default function DescriptionContainer(props: DescriptionContainerPropsType): Object {
  const { date, description } = props;

  return (
    <View style={Styles.TextContainer}>
      <Text style={Styles.Description}>{description}</Text>
      <Text style={Styles.Date}>{date}</Text>
    </View>
  );
}
