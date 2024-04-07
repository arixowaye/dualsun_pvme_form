import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SpyObj } from './shared/types';
import { TrackPvmesService } from './service/track-pvmes.service';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBadgeHarness} from '@angular/material/badge/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const activatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', ['toString']);
const trackPvmesService = jasmine.createSpyObj<SpyObj<TrackPvmesService>>('TrackPvmesService', ['pvmeQuantity']);
trackPvmesService.pvmeQuantity.and.returnValue(0);
let loader: HarnessLoader;
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterOutlet,
        MatToolbarModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule
      ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: activatedRoute
      },
      {
        provide: TrackPvmesService,
        useValue: trackPvmesService
      }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it(`should have as title 'front-coding-test'`, () => {
    expect(component.title).toEqual('front-coding-test');
  });

  it('badge should display with number of PVMEs', async () => {
    const badges = await loader.getAllHarnesses(MatBadgeHarness);
    let text = await badges[0].getText();
    expect(text).toEqual('0');

    trackPvmesService.pvmeQuantity.and.returnValue(2);

    fixture.detectChanges();
    text = await badges[0].getText();
    expect(text).toEqual('2');
  });
});
