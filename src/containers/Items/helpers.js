// @flow
import moment from 'moment';

import type { ItemType } from './types';

export function sortItems(itemsToSort: Array<ItemType>): void {
  return itemsToSort.sort((firstItem: ItemType, secondItem: ItemType): number => {
    const firstDueDate: Object = moment(firstItem.dueDate, 'YYYY/MM/DD HH:mm:ss');
    const secondDueDate: Object = moment(secondItem.dueDate, 'YYYY/MM/DD HH:mm:ss');

    return firstDueDate.isAfter(secondDueDate) ? 1 : -1;
  });
}

export function mergeDateAndTime(date: string, time: string): string {
  const newDate: string = date.toISOString().split('T')[0];
  const newTime: string = time.toISOString().split('T')[1];

  const datetimeAsMoment = moment(
    `${newDate} ${newTime}`,
    'YYYY-MM-DD HH:mm:ss.sssZ',
  );

  return datetimeAsMoment.format('YYYY/MM/DD HH:mm:ss');
};

export function convertDateStringIntoDateObject(date: string): Object {
  return moment(date, 'YYYY/MM/DD HH:mm:ss').toDate();
}

export function isPassedDueDate(date: string): boolean {
  const today = moment();
  return moment(date, 'YYYY/MM/DD HH:mm:ss').isAfter(today);
}
