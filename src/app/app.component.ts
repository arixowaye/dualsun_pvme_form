import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PVMEStore } from './service/track-pvmes.store';
import {MatBadgeModule} from '@angular/material/badge';
import { getState } from '@ngrx/signals';

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
  ],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.pvmesStore.loadAll().subscribe({
      next: all => this.pvmesStore.incrementCount(all.length)
    });
  }

  title = 'front-coding-test';

  readonly pvmesStore = inject(PVMEStore);
}
