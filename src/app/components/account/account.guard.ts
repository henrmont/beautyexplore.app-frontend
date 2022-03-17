import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {

  constructor (
    private router: Router
  ) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
    ): boolean {
      const token = window.localStorage.getItem('token')
      if (token) {
        return true
      } else {
        this.router.navigate([''])
        return false
      }
  }
  
}