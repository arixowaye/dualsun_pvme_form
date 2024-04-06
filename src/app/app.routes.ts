import { Routes } from '@angular/router';
import { PvmesComponent } from './component/pvmes/pvmes.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { allPvmesResolver } from './resolver/all-pvmes.resolver';
import { AllPvmesComponent } from './component/all-pvmes/all-pvmes.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PvmesComponent,
        data: {
            title: 'commissioning report'
        }
    },
    {
        path: 'preview',
        component: AllPvmesComponent,
        data: {
            title: 'All my PVMEs'
        },
        resolve: {
            pvmes: allPvmesResolver
        }
    },
    {
        path: '**', component: NotFoundComponent
    }
];
