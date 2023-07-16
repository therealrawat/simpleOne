import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private services:AuthService, private router:Router, private _snackBar:MatSnackBar){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.services.IsLoggedIn()){
        if(route.url.length>0)
        {
          let menu = route.url[0].path;
          if(menu == 'users'){
            if(this.services.GetUserRole() == 'Admin')
            {
              return true;
            }else{
              this._snackBar.open('You Dont Have Access', "", { duration: 2500, horizontalPosition: 'right', verticalPosition: 'top' });
     
              this.router.navigate([''])
              return false;
            }
          }else{
            return true;
          }
        }else{
          return true;
        }
        true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    return true;
  }
  
}
