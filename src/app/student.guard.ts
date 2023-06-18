import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  if(Number(route.paramMap.get('id'))>=0){
    return true;
  }
  const router = inject(Router);
  router.navigate(['/students']);
  return false;
};
