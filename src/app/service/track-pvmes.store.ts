import { inject } from "@angular/core";
import { PvmesService } from "./pvmes.service";
import { Observable, tap } from "rxjs";
import { PostPV } from "../component/pvmes/model/post-pv.model";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { tapResponse } from '@ngrx/operators';

interface PvmeState {
    pvmes: PostPV[];
    count: number;
    isLoading: boolean;
};

const initialState: PvmeState = {
    isLoading: false,
    count: 0,
    pvmes: []
};

export const PVMEStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, pvmesService = inject(PvmesService)) => ({
        incrementCount(increment: number): void {
            patchState(store, (state) => ({ count: state.count + increment }));
        },
        loadAll(): Observable<PostPV[]> {
            return pvmesService.getAllPV().pipe(
                tap(() => patchState(store, { isLoading: true})),
                tapResponse({
                    next: pvmes => {
                        patchState(store, { pvmes });
                    },
                    error: (error) => {
                        patchState(store, { count: 0 });
                        console.log(error);
                    },
                    finalize: () => patchState(store, { isLoading: false })
                })
            )
        }
    }))
);