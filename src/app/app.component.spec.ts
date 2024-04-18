import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SpyObj } from './shared/types';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBadgeHarness} from '@angular/material/badge/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PVMEStore } from './service/track-pvmes.store';
import { PvmesService } from './service/pvmes.service';
import { of } from 'rxjs';
import { allPVMEs } from 'src/UTMocks/pvmes.mock';

const activatedRoute = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', ['toString']);
let loader: HarnessLoader;
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

const pvmesService = jasmine.createSpyObj<SpyObj<PvmesService>>('PvmesService', ['getAllPV']);
pvmesService.getAllPV.and.returnValue(of([]));

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
      PVMEStore,
      {
        provide: PvmesService,
        useValue: pvmesService
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
    const store = TestBed.inject(PVMEStore);
    store.loadAll().subscribe();

    const badges = await loader.getAllHarnesses(MatBadgeHarness);
    let text = await badges[0].getText();
    expect(text).toEqual('0');

    pvmesService.getAllPV.and.returnValue(of(allPVMEs));
    store.loadAll().subscribe();

    fixture.detectChanges();
    component.ngOnInit();
    text = await badges[0].getText();
    expect(text).toEqual('2');
  });
});
