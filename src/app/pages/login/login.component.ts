import { AuthService } from './../../services/Auth.service';
import { Component } from '@angular/core';
// import { getAuth, onAuthStateChanged, User } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: AuthService){}
  // user!: User | null
  //   ngOnInit(): void {
  //     const auth = getAuth();
  //     onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       this.authService.user = user
  //       this.user = user
  //       } else {
  //         this.authService.user = null
  //         this.user = null
  //       }
  //     });
    }
    // login(){
    //   this.auth.loginWithGoogle()
    // }

    // logOutt(): void
    // {
    //   this.auth.logOut()
    // }

