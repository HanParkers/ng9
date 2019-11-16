import {Action, createAction, createReducer, on, props} from '@ngrx/store';

export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
export const setScores = createAction('[Scoreboard Page] Set Scores', props<{ game: any }>());

export interface ScoreboardStore {
  home: number;
  away: number;
}

export const initialState: ScoreboardStore = {
  home: 0,
  away: 0,
};

const scoreboardReducer = createReducer(
  initialState,
  on(homeScore, (state: any) => ({...state, home: state.home + 1})),
  on(awayScore, (state: any) => ({...state, away: state.away + 1})),
  on(resetScore, () => ({home: 0, away: 0})),
  on(setScores, (state, {game}) => ({home: game.home, away: game.away}))
);

export function ScoreboardReducer(state: ScoreboardStore | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
