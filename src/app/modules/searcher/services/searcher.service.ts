import { Injectable } from '@angular/core';
import { UnSplashRepository } from 'src/app/common/repositories/un-splash-repository.service';
import { SimpleReactiveStore } from 'src/app/common/store/reactive-store';
import { SearcherState, SearchStateProps } from './searcher.state';

@Injectable({
  providedIn: 'root'
})
export class SearcherService extends SimpleReactiveStore<SearcherState> {
  private initState: SearcherState;

  constructor(private unSplashRepository: UnSplashRepository) {
    super();
    this.initState = {
      results: []
    };
    this.initializeStore(this.initState);
  }

  async searhPhotos(text: string) {
    const response = await this.unSplashRepository.findPicturesByText(text).toPromise();
    this.set(SearchStateProps.RESULTS, response.results);
  }
}
