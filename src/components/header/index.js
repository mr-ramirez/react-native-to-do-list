// @flow
import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';
import IconButton from '../icon-button';

type HeaderPropsType = {
  title: string
};

export default function Header(props: HeaderPropsType): Object {
  const { title } = props;

  return (
    <View style={Styles.HeaderContainer}>
      <View style={Styles.LeftSide} />

      <View style={Styles.CenterSide}>
        <Text style={Styles.Title}>{title}</Text>
      </View>

      <View style={Styles.RightSide}>
        <IconButton iconName="add" color="black" onPress={() => true} />
      </View>

    </View>
  );
}
