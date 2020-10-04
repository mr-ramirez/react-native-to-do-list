// @flow
import React, { useState } from 'react';

import type { ItemType } from '../types';

type useItemsListReturnType = {
  items: Array<ItemType>,
  setItems: (item: ItemType) => void
};

export default function useItemsList(): useItemsListReturnType {
  const [items, setItems] = useState([]);

  return {
    items,
    setItems,
  };
}
