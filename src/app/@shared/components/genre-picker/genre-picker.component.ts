import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PodcastService } from '@core/services/podcast.service';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { setPodcastGenre } from 'src/app/store/podcast.actions';
import { PodcastState } from 'src/app/store/podcast.reducer';
import { getPodcastState } from 'src/app/store/podcast.selectors';

@Component({
  selector: 'genre-picker',
  templateUrl: './genre-picker.component.html',
  styleUrls: ['./genre-picker.component.scss']
})
export class GenrePickerComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;

  @Input() genres!: { id: number; name: string; }[];

  genre_form = new FormGroup({
    selected_genre_id: new FormControl(null),
  });

  constructor(
    private store: Store<PodcastState>,
  ) {
  }

  ngOnInit() {
    this.subscription.add(
      this.store
        .pipe(select(getPodcastState))
        .subscribe((podcastListState) => {

          const { selected_genre_id } = this.genre_form.value;

          if (selected_genre_id == podcastListState.genre_id)
            return;

          this.genre_form.patchValue({
            selected_genre_id: podcastListState.genre_id
          })
        })
    )

    this.subscription.add(
      this.genre_form
        .valueChanges
        .pipe(map(({ selected_genre_id }) => this.genres.filter(genre => genre.id == selected_genre_id)[0]))
        .subscribe((genre) => {
          this.store.dispatch(setPodcastGenre({
            genre_id: genre.id,
            genre_name: genre.name,
          }))
        })
    )

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}