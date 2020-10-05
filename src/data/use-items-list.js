// @flow
import React, { useState } from 'react';

import type { ItemType } from '../types';

type useItemsListReturnType = {
  items: Array<ItemType>,
  lastId: number,
  setItems: (ItemType) => void,
  setNewLastId: (number) => void
};

export default function useItemsList(props): useItemsListReturnType {
  const [items, setItems] = useState([{
    id: '1',
    description: 'Going to the groceries store to get some flour for the cupcakes',
    dueDate: '2020/10/04 11:00:00',
  }, {
    id: '2',
    description: 'Drop off some cupcakes at Mr. Lopez\'s house. Do not ring the bell because he won\'t hear you. Just give him a call and he will step out of the house',
    dueDate: '2020/10/04 16:00:00',
  }, {
    id: '3',
    description: 'Start baking the cupcakes',
    dueDate: '2020/10/04 13:00:00',
  }]);

  console.log('ITEMS', props, items.length);

  const [lastId, setNewLastId] = useState(3);

  return {
    items,
    lastId,
    setItems,
    setNewLastId,
  };
}
