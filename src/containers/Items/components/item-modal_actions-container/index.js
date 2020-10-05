// @flow
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import moment from 'moment';

import type { ItemType } from '../../types';

import Styles from './styles';
// import useContext from '../../../../data/context';
import useAddItem from '../../../../data/use-add-item';

type ItemModalActionsContainerPropsType = {
  description: string,
  dueDate: Object,
  dueTime: Object
};

export default function ItemModalActionsContainer(props: ItemModalActionsContainerPropsType): Object {
  // const { Consumer } = useContext();
  const { addItem } = useAddItem();

  const transformPropsIntoItemObject = (): ItemType => {
    const { description, date, time } = props;

    const newDate: string = date.toISOString().split('T')[0];
    const newTime: string = time.toISOString().split('T')[1];

    const datetimeAsMoment = moment(
      `${newDate} ${newTime}`,
      'YYYY-MM-DD HH:mm:ss.sssZ',
    );

    return { description, dueDate: datetimeAsMoment.format('YYYY/MM/DD HH:mm:ss') };
  };

  return (
    // <Consumer>
    //   {
    //     ({ addItem }) => (
          <View style={Styles.ActionContainer}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              style={Styles.SaveButton}
              onPress={() => {
                const newItem = transformPropsIntoItemObject();
                addItem(newItem);
              }}
            >
              <Text style={Styles.SaveButtonText}>Save</Text>
            </TouchableHighlight>
          </View>
    //     )
    //   }
    // </Consumer>
  );
}
