import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EditGuard } from '../services/edit-guard';

export const editPlayerGuard: CanActivateFn = () => {
  const editGuard = inject(EditGuard);
  const router = inject(Router);

  if (editGuard.guardEnabled()) {
    return router.parseUrl('/soccer-players');
  }

  return true;
};

