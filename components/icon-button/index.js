// @flow
import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from './icon';

type IconButtonPropsType = {
  color: string,
  iconName: string,
  onPress: () => void
};

export default function IconButton(props: IconButtonPropsType): Object {
  const {
    color, iconName, onPress,
  } = props;

  return (
    <TouchableHighlight onPress={onPress} underlayColor="#ECF0F1">
      <Icon color={color} iconName={iconName} />
    </TouchableHighlight>
  );
}
