import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponsePaginated } from '../models/unsplash/unsplash-api-responses';
import { UnSplashPhoto } from '../models/unsplash/unsplash-photo';
import { UnSplashApiRoutes } from './un-splash-api-routes';

@Injectable({
  providedIn: 'root'
})
export class UnSplashRepository {
  constructor(private httpClient: HttpClient) {
    console.log('aqui')
    this.findPicturesByText('office').subscribe((res) => {
      console.log(res);
    });
  }

  /*
    Gets pictures by text match search
    */
  findPicturesByText(
    text: string,
    order_by?: string,
    page?: number,
    per_page?: number
  ): Observable<ApiResponsePaginated<UnSplashPhoto>> {
    return this.httpClient.get<ApiResponsePaginated<UnSplashPhoto>>(
      `${UnSplashApiRoutes.MAIN}${UnSplashApiRoutes.SEARCH.PRE}/${UnSplashApiRoutes.SEARCH.PHOTOS}?&query=${text}&page=${page}&per_page=${per_page}&order_by=${order_by}`
    );
  }
}
