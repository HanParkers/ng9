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

/*
* ========================================================================
* Score store
* ========================================================================
* */

/*

export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
export const setScores = createAction('[Scoreboard Page] Set Scores', props<{ game: any }>());

export interface State {
  home: number;
  away: number;
}

export const $initialState: State = {
  home: 0,
  away: 0,
};

const scoreboardReducer = createReducer(
  $initialState,
  on(homeScore, (state: any) => ({...state, home: state.home + 1})),
  on(awayScore, (state: any) => ({...state, away: state.away + 1})),
  on(resetScore, () => ({home: 0, away: 0})),
  on(setScores, (state, {game}) => ({home: game.home, away: game.away}))
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
*/
