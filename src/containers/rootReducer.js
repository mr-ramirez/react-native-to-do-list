import { combineReducers } from 'redux'

import ItemsReducer from './Items/reducer';

export default combineReducers({ items: ItemsReducer });
