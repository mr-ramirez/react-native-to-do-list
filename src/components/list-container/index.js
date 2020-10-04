// @flow

import React from 'react';
import { FlatList, Text, View } from 'react-native';

import type { ItemType } from '../types';

import useContext from '../../data/context';
import Item from '../item';

export default function ListContainer(): Object {
  const { Consumer } = useContext();

  const renderItem: Object = ({ item }): Object => (
    <Item {...item} />
  );

  return (
    <Consumer>
      {
        ({ items }) => (
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )
      }
    </Consumer>
  );
}
