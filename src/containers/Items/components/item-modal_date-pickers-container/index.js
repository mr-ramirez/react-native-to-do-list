// @flow
import React from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Styles from './styles';

type ItemModalDatePickersContainerPropsType = {
  date: Object,
  setDate: (date) => void,
  setTime: (date) => void,
  time: Object,
};

export default function ItemModalDatePickersContainer(props: ItemModalDatePickersContainerPropsType): Object {
  const {
    date, setDate, setTime, time,
  } = props;

  return (
    <View style={Styles.DateTimeContainer}>
      <DateTimePicker
        testID="datePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        textColor="black"
        onChange={(_, selectedDate) => setDate(selectedDate)}
      />

      <DateTimePicker
        testID="timePicker"
        value={time}
        mode="time"
        is24Hour={true}
        display="default"
        onChange={(_, selectedTime) => setTime(selectedTime)}
      />
    </View>
  );
}
