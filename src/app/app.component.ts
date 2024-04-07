import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TrackPvmesService } from './service/track-pvmes.service';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    RouterOutlet,
    MatToolbarModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule
  ]
})
export class AppComponent {
  title = 'front-coding-test';

  private trackPVMesService = inject(TrackPvmesService);

  public get pvmeQuantity() {
    return this.trackPVMesService.pvmeQuantity();
  }
}
