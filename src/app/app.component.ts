import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {decrement, increment, reset} from './counter.store';
import {homeScore, ScoreboardStore} from './scoreboard.store';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="increment()" type="button">Increment</button>
      <button (click)="decrement()" type="button">Decrement</button>
      <button (click)="reset()" type="button">Reset</button>

      <hr>

      <div>Current count {{ count$ | async }}</div>

      <hr>

      <button (click)="homeScore()" type="button">Home</button>
  `
})
export class AppComponent {

  count$: Observable<number>;
  score$: Observable<ScoreboardStore>;

  constructor(private store: Store<{ count: number; score: ScoreboardStore }>) {
    this.count$ = store.pipe(select('count'));
    this.score$ = store.pipe(select('score'));
  }

  homeScore() {
    this.store.dispatch(homeScore());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
