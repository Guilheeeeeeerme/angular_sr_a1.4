import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Podcast } from "@core/models/podcast";
import { PodcastService } from "@core/services/podcast.service";
import { combineLatest, Subscription } from "rxjs";

import { PodcastGenre } from "@core/models/podcast-genre";
import { select, Store } from "@ngrx/store";
import { decrementPodcastGenrePage, incrementPodcastGenrePage } from "src/app/store/podcast.actions";
import { PodcastState } from "src/app/store/podcast.reducer";
import { getPodcastState } from "src/app/store/podcast.selectors";

@Component({
  selector: 'podcasts-list',
  templateUrl: './podcast-list-view.component.html',
  styleUrls: ['./podcast-list-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastListViewComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;

  public podcasts: Podcast[] = [];
  public genres: PodcastGenre[] = [];

  public offset = 0;
  public total_pages = 0;
  public page_number = 0;

  constructor(
    private podcastService: PodcastService,
    private store: Store<PodcastState>,
  ) {
    console.log('got here');
  }

  ngOnInit() {

    /**
     * The list will be reloaded when the state change
     */
    this.subscription.add(combineLatest([
      this.store.pipe(select(getPodcastState)),
      this.podcastService.getPodcastGenres(),
    ]).subscribe(([podcastListState, genres]) => {

      this.genres = genres;

      let podcasts: Podcast[] = [];
      let total_pages = 0;
      let offset = 0;

      const { genre_id, page_number, page_size } = podcastListState;

      if (genres.length > 0) {

        var genrePodcasts = genres.filter(g => g.id == genre_id);

        if (genrePodcasts.length > 0) {

          offset = page_number * page_size;
          const offset_limit = offset + page_size;

          podcasts = genrePodcasts[0].podcasts;
          if (podcasts?.length > 0) {
            total_pages = Math.ceil(podcasts?.length / page_size)
            podcasts = podcasts.slice(offset, offset_limit)
          }
        }
      }

      this.page_number = page_number;
      this.total_pages = total_pages;
      this.offset = offset;
      this.podcasts = podcasts;

    }))

  }

  getRankingForIndex(index: number) {
    return (index + this.offset + 1)
  }

  goPrev() {
    this.store.dispatch(decrementPodcastGenrePage());
  }

  goNext() {
    this.store.dispatch(incrementPodcastGenrePage());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}