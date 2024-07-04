import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const canActivateTodosGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  if (!auth.isSignedIn()) {
    router.navigate(['/sign-in']);
    return false;
  }
  return true;
};
