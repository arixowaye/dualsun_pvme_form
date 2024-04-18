import { Component, OnInit, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { PostPV } from '../pvmes/model/post-pv.model';
import { PVMEStore } from 'src/app/service/track-pvmes.store';

@Component({
  selector: 'app-all-pvmes',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './all-pvmes.component.html',
  styleUrl: './all-pvmes.component.scss'
})
export class AllPvmesComponent implements OnInit {
  
  ngOnInit(): void {
    this.pvmesStore.loadAll().subscribe();
  }
  readonly pvmesStore = inject(PVMEStore);

  public get pvmes(): Array<PostPV> {
    return this.pvmesStore.pvmes();
  }
}
