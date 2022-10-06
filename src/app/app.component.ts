import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PodcastState } from './store/podcast.reducer';
import { getPodcastPageGenreName } from './store/podcast.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpen: boolean = false;
  genreName$: Observable<string>;

  constructor(private store: Store<PodcastState>) {
    this.genreName$ = this.store.pipe(select(getPodcastPageGenreName));
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
