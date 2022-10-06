import { createAction, props } from '@ngrx/store';

export const setPodcastGenre = createAction('[UPDATE] setPodcastGenre', props<{ genre_name: string; genre_id: number }>());
export const incrementPodcastGenrePage = createAction('[UPDATE] incrementPodcastGenre');
export const decrementPodcastGenrePage = createAction('[UPDATE] decrementPodcastGenre');