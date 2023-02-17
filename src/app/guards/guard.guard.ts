import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(  private authService: AuthService, private router:Router){
    // this.news.subscribe((value) => {
    //   this.newList = value;
    }
    user: any
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) =>{
        if(this.authService.user) {
          resolve(true);
        } else {
          resolve(false);
          this.router.navigate([''])
        }
    });
  }

}
