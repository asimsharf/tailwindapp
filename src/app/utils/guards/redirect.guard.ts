import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenUtil } from '../token.util';

export const redirectGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = TokenUtil.isLoggedIn();

  router.navigate([isLoggedIn ? '/home' : '/login']);
  return false;
};
