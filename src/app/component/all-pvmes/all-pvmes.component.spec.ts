import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPvmesComponent } from './all-pvmes.component';
import { InstallationType } from '../pvmes/model/pvmes.enum';
import { MatListModule } from '@angular/material/list';
import { HarnessLoader } from "@angular/cdk/testing";
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatListHarness} from '@angular/material/list/testing';
import { TrackPvmesService } from 'src/app/service/track-pvmes.service';
import { SpyObj } from 'src/app/shared/types';
import { allPVMEs } from 'src/UTMocks/pvmes.mock';

describe('AllPvmesComponent', () => {
  let component: AllPvmesComponent;
  let fixture: ComponentFixture<AllPvmesComponent>;
  let loader: HarnessLoader;
  const trackPvmesService = jasmine.createSpyObj<SpyObj<TrackPvmesService>>('TrackPvmesService', ['allPVMes']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPvmesComponent, MatListModule],
      providers: [
        {
          provide: TrackPvmesService,
          useValue: trackPvmesService
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPvmesComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    trackPvmesService.allPVMes.and.returnValue(allPVMEs);
    fixture.detectChanges();
  });

  it('should display the list of PVMEs', async () => {
    const list: MatListHarness = await loader.getHarness(MatListHarness);
    const items = await list.getItems();
    expect(items.length).toEqual(2);
    
    const pv1Company = await items[0].getTitle();
    const pv2Company = await items[1].getTitle();

    expect(pv1Company).toEqual(component.pvmes[0].company.name || '');
    expect(pv2Company).toEqual(component.pvmes[1].company.name || '');
  });

  it('pvmes should return value from service', () => {
    expect(component.pvmes.length).toEqual(2);
    expect(component.pvmes.length).toEqual(2);
    expect(component.pvmes[0].company.name).toEqual('dsdsds');
  });
});
