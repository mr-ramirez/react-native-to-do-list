// @flow
import React, { createContext } from 'react';

import useAddItem from '../data/use-add-item';
import useItemsList from '../data/use-items-list';

export default function useContext() {
  const { addItem } = useAddItem();
  const { items } = useItemsList();

  console.log('ITEMS', items);

  const Context = createContext({
    addItem, items,
  });

  return {
    Provider: Context.Provider,
    Consumer: Context.Consumer,
  };
}
