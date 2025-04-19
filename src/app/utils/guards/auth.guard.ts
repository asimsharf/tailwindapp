import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenUtil } from '../token.util';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (TokenUtil.getToken()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
