import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

const activatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', ['toString']);

describe('AppComponent', () => {
  beforeEach(
    () => TestBed.configureTestingModule({
      imports: [
        RouterOutlet,
        MatToolbarModule,
        CommonModule,
        AppComponent,
      ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: activatedRoute
      }]
    }).compileComponents()
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front-coding-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front-coding-test');
  });
});
