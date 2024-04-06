import { inject } from '@angular/core';
import { PvmesService } from '../service/pvmes.service';

export const allPvmesResolver = () => {
  return inject(PvmesService).getAllPV();
};
