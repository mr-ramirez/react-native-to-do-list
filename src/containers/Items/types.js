// @flow

export type ItemType = {
  dueDate: string,
  description: string,
  id: string,
};

export type ItemsStateContainerType = {
  items: Array<ItemType>,
  lastId: number
};

export type ActionType = {
  payload: Object,
  type: string
};
