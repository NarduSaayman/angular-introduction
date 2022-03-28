import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedVarService } from '../services/shared-var.service';

@Injectable({
  providedIn: 'root'
})
export class CanAccessGuard implements CanActivate {

  constructor(private sharedVarService: SharedVarService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('===========================', this.sharedVarService.user);
    return this.checkLogin();
  }

  checkLogin(): true|UrlTree {
    if (this.sharedVarService.user.isAuthorised) { return true; }
    // Redirect to the login page
    return this.router.parseUrl('/');
  }
  
}
