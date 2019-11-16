import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {decrement, increment, reset} from './counter.store';

@Component({
  selector: 'app-root',
  template: `
      <button id="increment" (click)="increment()" type="button">Increment</button>

      <div>Current count {{ count$ | async }}</div>

      <button id="decrement" (click)="decrement()" type="button">Decrement</button>
      <button id="reset" (click)="reset()" type="button">Reset</button>
  `
})
export class AppComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
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
