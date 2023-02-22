import { GetPaginate } from './action/new.action';
// import { GetNews } from './action/new.action';
import { newState } from './state/new.state';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ApiNews';
  new$ = new Observable<newState>()
  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.user$.subscribe(user => {
      this.user = user;
      //console.log(user);
    })

    //console.log(this.user)

  }
  user!: User |null
  user$ = new Observable< User| null>

  login(){
    this.authService.LoginWithGoogle().catch((error)=>{
      console.log(error)
    })
  }
  logout()
  {
    this.authService.logOut()
  }





}
