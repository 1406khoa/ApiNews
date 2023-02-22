import { News } from './../model/News.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as NewsActions from '../action/new.action'






@Injectable()
export class NewsEffect {
  constructor(private action$: Actions, private httpClient: HttpClient) {}
  getNews = createEffect(() => this.action$.pipe(
    ofType(NewsActions.GetPaginate),
    switchMap((action) =>{
      console.log("Khoa khung")
      return this.httpClient.get(`https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.per_page}`)
    }),
    map((response)=>{
      return NewsActions.getNewsSuccess({news: <Array<News>>response})
    }),
    catchError((error) => of(NewsActions.getNewsFailure({error: error})))
  ))
  // @Effect
}
