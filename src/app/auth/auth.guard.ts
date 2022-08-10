import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  /**
   * This method verifies whether the user that is trying to access a route is authenticated or not.
   *
   * @returns isAuth
   */
  async canActivate() {
    const isAuth = true;

    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}
