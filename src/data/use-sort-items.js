// @flow

import React from 'react';
import moment from 'moment';

import type { ItemType } from '../types';

type UseSortItemsReturnType = {
  sortItems: (Array<ItemType>) => Array<ItemType>
};

export default function useSortItems(): UseSortItemsReturnType {
  return {
    sortItems: (itemsToSort: Array<ItemType>) => {
      itemsToSort.sort((firstItem: ItemType, secondItem: ItemType): number => {
        const firstDueDate: Object = moment(firstItem.dueDate, 'YYYY/MM/DD HH:mm:ss');
        const secondDueDate: Object = moment(secondItem.dueDate, 'YYYY/MM/DD HH:mm:ss');

        return firstDueDate.isAfter(secondDueDate) ? 1 : -1;
      });
    },
  };
}