// @flow

import React from 'react';
import { FlatList, Text, View } from 'react-native';

import type { ItemType } from '../../types';

// import useContext from '../../../../data/context';
import useItemsList from '../../../../data/use-items-list';
import Item from '../item';

export default function ListContainer(): Object {
  // const { Consumer } = useContext();
  const { items } = useItemsList();
  console.log('ITEMS', items);

  const renderItem: Object = ({ item }): Object => (
    <Item {...item} />
  );

  // return (
  //   <Consumer>
  //     {
  //       ({ items }) => {
  //         console.log('RECEIVED ITEMS', items);
          return (<FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />);
  //       }
  //     }
  //   </Consumer>
  // );
}
