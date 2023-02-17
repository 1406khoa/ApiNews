import { HttpService } from './../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './../../model/News.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';

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
    new$ = new Observable<News[]>()
    constructor(private http: HttpService){}
    ngOnInit(): void{
      this.new$ = this.http.get()
    }

}
