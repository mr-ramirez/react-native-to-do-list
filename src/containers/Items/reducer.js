// @flow

import type { ActionType, ItemType, ItemsStateContainerType } from './types';

import {
  ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, UPDATE_LAST_ID,
} from './constants';

import { sortItems } from './helpers';

const initialState: ItemsStateContainerType = {
  items: [{
    id: '1',
    description: 'Going to the groceries store to get some flour for the cupcakes',
    dueDate: '2020/10/04 11:00:00',
    isEnabled: true,
  }, {
    id: '2',
    description: 'Start baking the cupcakes',
    dueDate: '2020/10/04 13:00:00',
    isEnabled: true,
  }, {
    id: '3',
    description: 'Drop off some cupcakes at Mr. Lopez\'s house. Do not ring the bell because he won\'t hear you. Just give him a call and he will step out of the house',
    dueDate: '2020/10/04 16:00:00',
    isEnabled: true,
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

    case EDIT_ITEM:
      const index: number = state.items
        .findIndex((item: ItemType): boolean => item.id === payload.item.id);

      state.items[index] = { ...payload.item }

      return {
        ...state,
        items: sortItems(state.items),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items
          .filter((item: ItemType): boolean => item.id !== payload.id),
      };

    case UPDATE_LAST_ID:
      return {
        ...state,
        lastId: state.lastId + 1,
      };
  
    default:
      return state;
  }
};

export default ItemsReducer;
