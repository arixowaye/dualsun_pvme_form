import { Injectable, WritableSignal, computed, effect, inject, signal } from "@angular/core";
import { PvmesService } from "./pvmes.service";
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, EMPTY, map, startWith, switchMap } from "rxjs";
import { PostPV } from "../component/pvmes/model/post-pv.model";

@Injectable({
    providedIn: 'root'
  })
  export class TrackPvmesService {
    public readonly refreshAllPVMes: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public readonly incrementPvmeBadgeSignal = signal(false);

    private readonly pvmesService = inject(PvmesService);
    
    /**
     * We do not want the api to be called everytime the signal is being called
     * so we add this subject to controll when we want to data to be refreshed
     */
    private readonly  allPvmesSignal = toSignal(
        this.refreshAllPVMes.pipe(switchMap(r => {
            if (r) {
                return this.pvmesService.getAllPV();
            }
            return EMPTY;
        }))
    );

    private readonly pvmeBadgeSignal = computed(() => {
        const incrementPvmeBadge = this.incrementPvmeBadgeSignal();
        const pvmeQuantity = this.allPvmesSignal() ?? [];
        if (incrementPvmeBadge) {
            return pvmeQuantity.length + 1;
        }
        return pvmeQuantity.length;
    });

    constructor() {
        effect(() => {
            this.incrementPvmeBadgeSignal(); // track increment to trigger computed signal update
        });
    }

    public pvmeQuantity(): number {
        return this.pvmeBadgeSignal();
    }
    public allPVMes(): PostPV[] {
        return this.allPvmesSignal() ?? [];
    }
  }