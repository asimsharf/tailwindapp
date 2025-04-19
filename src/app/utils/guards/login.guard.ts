import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenUtil } from '../token.util';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (TokenUtil.getToken()) {
    router.navigate(['/home']);
    return false;
  }
  return true;
};
