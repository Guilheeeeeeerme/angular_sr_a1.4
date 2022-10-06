import { createReducer, on } from '@ngrx/store';
import { decrementPodcastGenrePage, incrementPodcastGenrePage, setPodcastGenre } from './podcast.actions';

export interface PodcastState {
    genre_id: number;
    genre_name: string;
    page_number: number;
    page_size: number;
}

export const initialState: PodcastState = {
    genre_id: 140,
    genre_name: 'Web Design',
    page_number: 0,
    page_size: 5,
};

export const podcastReducer = createReducer(
    initialState,
    on(incrementPodcastGenrePage, (state) => ({ ...state, page_number: state.page_number + 1 })),
    on(decrementPodcastGenrePage, (state) => ({ ...state, page_number: state.page_number > 0 ? state.page_number - 1 : 0 })),
    on(setPodcastGenre, (state, { genre_id, genre_name }) => ({
        ...state,
        genre_id: genre_id,
        genre_name: genre_name,
        page_number: 0,
    })),
);