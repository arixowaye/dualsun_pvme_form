import { Component, Input } from '@angular/core';
import { PostPV } from '../pvmes/model/post-pv.model';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-all-pvmes',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './all-pvmes.component.html',
  styleUrl: './all-pvmes.component.scss'
})
export class AllPvmesComponent {
  @Input({required: true}) pvmes!: PostPV[];
}
