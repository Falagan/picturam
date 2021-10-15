import { UnSplashPhoto } from 'src/app/common/models/unsplash/unsplash-photo';

export interface SearcherState {
  results: UnSplashPhoto[];
}

export enum SearchStateProps {
  RESULTS = 'results'
}
