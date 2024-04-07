import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TrackPvmesService } from 'src/app/service/track-pvmes.service';

@Component({
  selector: 'app-all-pvmes',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './all-pvmes.component.html',
  styleUrl: './all-pvmes.component.scss'
})
export class AllPvmesComponent {
  private readonly trackPvmesService = inject(TrackPvmesService);

  public get pvmes() {
    return this.trackPvmesService.allPVMes();
  }
}
