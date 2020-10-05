// @flow

import type { ActionType, ItemsStateContainerType } from './types';
import { ADD_ITEM } from './constants';
import { sortItems } from './helpers';

const initialState: ItemsStateContainerType = {
  items: [{
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
  }],
  lastId: 3,
};

const ItemsReducer = (
  state: ItemsStateContainerType = initialState,
  action: ActionType,
): ItemsStateContainerType => {
  const { payload, type } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: sortItems([...state.items, { ...payload.item }])
      };
  
    default:
      return state;
  }
};

export default ItemsReducer;
