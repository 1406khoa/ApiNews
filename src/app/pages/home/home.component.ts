import { HttpService } from './../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './../../model/News.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';
import { newState } from 'src/app/state/new.state';
import { Store } from '@ngrx/store';
import * as NewsActions from '../../action/new.action'
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // newList: any;
  // new : News[] = []
  // constructor(private auth: AuthService){
  //   this.new.subscribe((value) => {
  //   this.newList = value;
  //   });

    // new$ = new Observable<News[]>();
    new$ = new Observable<newState>()
    constructor( private store: Store<{news: newState}>){
    this.new$ = this.store.select('news')

    }
    ngOnInit(): void {
      this.getNews()
    }

    getNews(){
       this.store.dispatch(NewsActions.GetPaginate({page: 1, per_page: 10}))
    }

    length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
