import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponsePaginated } from '../models/unsplash/unsplash-api-responses';
import { UnSplashPhoto } from '../models/unsplash/unsplash-photo';
import { UnSplashApiRoutes } from './un-splash-api-routes';

@Injectable({
  providedIn: 'root'
})
export class UnSplashRepository {
  private unSplashApiKey = environment.unsplashApiKey;
  constructor(private httpClient: HttpClient) {}

  /*
    Gets pictures by text match search
    */
  findPicturesByText(params: {
    text: string;
    order_by?: string;
    page?: number;
    per_page?: number;
  }): Observable<ApiResponsePaginated<UnSplashPhoto>> {
    const { text, order_by, page, per_page } = params;
    return this.httpClient.get<ApiResponsePaginated<UnSplashPhoto>>(
      UnSplashApiRoutes.MAIN +
        UnSplashApiRoutes.SEARCH.PRE +
        '/' +
        UnSplashApiRoutes.SEARCH.PHOTOS +
        '?client_id=' +
        this.unSplashApiKey +
        '&query=' +
        text +
        '$order_by=' +
        order_by +
        '&per_page= ' +
        per_page
    );
  }
}
