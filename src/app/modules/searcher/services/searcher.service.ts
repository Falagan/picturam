import { Injectable } from '@angular/core';
import { UnSplashRepository } from 'src/app/common/repositories/un-splash-repository.service';
import { SimpleReactiveStore } from 'src/app/common/store/reactive-store';
import { UnSplashSearchDefaultConfig } from 'src/app/config/unsplash.config';
import { SearcherState, SearchStateProps } from './searcher.state';

@Injectable({
  providedIn: 'root'
})
export class SearcherService extends SimpleReactiveStore {
  private initState: SearcherState;

  constructor(private unSplashRepository: UnSplashRepository) {
    super();
    this.initState = {
      results: []
    };
    this.initializeStore(this.initState);
  }

  async searhPhotos(text: string) {
    const defaultConfig = { ...UnSplashSearchDefaultConfig, text };
    const response = await this.unSplashRepository.findPicturesByText(defaultConfig).toPromise();
    this.set(SearchStateProps.RESULTS, response.results);
  }
}
