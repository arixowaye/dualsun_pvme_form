import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    RouterOutlet,
    MatToolbarModule,
    CommonModule,
  ]
})
export class AppComponent {
  title = 'front-coding-test';
}
