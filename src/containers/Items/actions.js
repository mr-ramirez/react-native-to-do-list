// @flow

import type { ItemType } from './types';
import { ADD_ITEM } from './constants';

export const addItem = (item: ItemType) => ({
  type: ADD_ITEM,
  payload: { item },
});
