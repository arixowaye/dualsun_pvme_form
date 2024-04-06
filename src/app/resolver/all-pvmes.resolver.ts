import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PvmesService } from '../service/pvmes.service';

export const allPvmesResolver: ResolveFn<boolean> = () => {
  return inject(PvmesService).getAllPV();
};
