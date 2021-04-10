// @flow

import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { isPassedDueDate } from '../../helpers';
import Styles from './styles';

type DescriptionContainerPropsType = {
  date: string,
  description: string,
  isEnabled: boolean
};

export default function DescriptionContainer(props: DescriptionContainerPropsType): Object {
  const { date, description, isEnabled } = props;

  return (
    <View style={Styles.TextContainer}>
      <Text
        style={isEnabled || !isPassedDueDate(date) ? Styles.Description : Styles.PassedDescription}
      >
        {description}
      </Text>

      <Text
        style={isEnabled || !isPassedDueDate(date) ? Styles.Date : Styles.PassedDate}
      >
        {date}
      </Text>
    </View>
  );
}
