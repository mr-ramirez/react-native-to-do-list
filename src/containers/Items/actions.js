// @flow

import type { ItemType } from './types';

import {
  ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, UPDATE_LAST_ID,
} from './constants';

export const addItem = (item: ItemType) => ({
  type: ADD_ITEM,
  payload: { item },
});

export const editItem = (item: ItemType) => ({
  type: EDIT_ITEM,
  payload: { item },
});

export const removeItem = (id: string) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const updateLastId = () => ({
  type: UPDATE_LAST_ID,
});
