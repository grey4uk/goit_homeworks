import { combineReducers } from 'redux';
import { ADD, DELETE, FETCH } from './type';

const initialState = { counter: 0 };

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case DELETE:
      return {
        ...state,
        counter:
          state.counter > 0
            ? state.counter - 1
            : state.counter,
      };

    default:
      return state;
  }
};

export const fetch = (state = { field: [] }, action) => {
  switch (action.type) {
    case FETCH:
      return { field: [...state.field, ...action.payload] };
    default:
      return state;
  }
};

export default combineReducers({ counter, fetch });
