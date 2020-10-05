// @flow
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import moment from 'moment';

import type { ItemType } from '../../types';

import Styles from './styles';

type ItemModalActionsContainerPropsType = {
  addItem: (string, string) => void,
  description: string,
  dueDate: Object,
  dueTime: Object
};

export default function ItemModalActionsContainer(props: ItemModalActionsContainerPropsType): Object {
  const {
    addItem, description, date, time,
  } = props;

  const mergeDateAndTime = (): string => {
    const newDate: string = date.toISOString().split('T')[0];
    const newTime: string = time.toISOString().split('T')[1];

    const datetimeAsMoment = moment(
      `${newDate} ${newTime}`,
      'YYYY-MM-DD HH:mm:ss.sssZ',
    );

    return datetimeAsMoment.format('YYYY/MM/DD HH:mm:ss');
  };

  return (
    <View style={Styles.ActionContainer}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={Styles.SaveButton}
        onPress={() => {
          const mergedDateAndTime = mergeDateAndTime();
          addItem(description, mergedDateAndTime);
        }}
      >
        <Text style={Styles.SaveButtonText}>Save</Text>
      </TouchableHighlight>
    </View>
  );
}
