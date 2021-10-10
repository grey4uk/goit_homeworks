import { createAction } from '@reduxjs/toolkit';

import { ADD, DELETE, FETCH } from './type';

export const addItem = createAction(ADD);
export const deleteItem = createAction(DELETE);
export const fetchItems = createAction(FETCH);
