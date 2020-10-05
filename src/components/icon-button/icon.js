// @flow
import React from 'react';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

type IconPropsType = {
  color: string,
  iconName: string
};

export default function Icon(props: IconPropsType): Object {
  const { color, iconName } = props;

  switch(iconName) {
    case 'close':
      return (<AntDesign name="close" size={24} color={color} />);
    case 'edit':
      return (<AntDesign name="edit" size={24} color={color} />);
    case 'remove':
      return (<FontAwesome name="trash-o" size={24} color={color} />);
    case 'add':
      return (<Entypo name="add-to-list" size={24} color={color} />);
    default:
      return null;
  }
}
