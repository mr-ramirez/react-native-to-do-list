// @flow

import React from 'react';

import type { ItemType } from '../types';

import useItemsList from './use-items-list';
import useSortItems from './use-sort-items';

type UseAddItemReturnType = {
  addItem: (ItemType) => void
};

export default function useAddItem(): UseAddItemReturnType {
  const { items, setItems } = useItemsList();
  const { sortItems } = useSortItems();

  return {
    addItem: (item: ItemType) => {
      const newItems: Array<ItemType> = [
        ...items,
        { ...item },
      ];

      sortItems(newItems);
      setItems(newItems);
    };
  };
}
