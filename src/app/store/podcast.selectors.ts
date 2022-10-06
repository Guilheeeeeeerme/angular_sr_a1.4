import { createSelector } from '@ngrx/store';
import { PodcastState } from './podcast.reducer';

export const getPodcastPageGenreName = createSelector(
    (state: any) => state.podcast,
    (podcast: PodcastState) => podcast.genre_name,
);

export const getPodcastState = createSelector(
    (state: any) => state.podcast,
    (podcast: PodcastState) => podcast,
);