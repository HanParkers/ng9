import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import {CounterReducer} from './counter.store';
import {ScoreboardReducer} from './scoreboard.store';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: CounterReducer,
      score: ScoreboardReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
