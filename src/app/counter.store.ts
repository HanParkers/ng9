import {createAction, createReducer, on} from '@ngrx/store';

/* Counter store */
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const initialState = 0;

const counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, () => 0)
);

export function CounterReducer(state, action) {
  return counterReducer(state, action);
}
