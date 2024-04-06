import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPvmesComponent } from './all-pvmes.component';
import { InstallationType } from '../pvmes/model/pvmes.enum';
import { MatListModule } from '@angular/material/list';
import { HarnessLoader } from "@angular/cdk/testing";
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatListHarness} from '@angular/material/list/testing';

describe('AllPvmesComponent', () => {
  let component: AllPvmesComponent;
  let fixture: ComponentFixture<AllPvmesComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPvmesComponent, MatListModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPvmesComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    component.pvmes = [
      {
        company: {
          name: "dsdsds",
          siren: "123456789"
        },
        customer: {
          name: "dsdsdsd",
          email: "a@f.fr",
          telephone: "0987654433"
        },
        installation: {
          address: "cdcdcd",
          date: "2024-04-09T22:00:00.000Z",
          numberOfpanels: 1,
          panels: [
            {
              type: InstallationType.HYBRID,
              ID: "123456"
            }
          ]
        }
      },
      {
        company: {
          name: "Arix OWAYE",
          siren: "123456789"
        },
        customer: {
          name: "smith jack",
          email: "smith@j.mail",
          telephone: "0900909989"
        },
        installation: {
          address: "1 Rue du lac Le Muy",
          date: "2024-04-15T22:00:00.000Z",
          numberOfpanels: 1,
          panels: [
            {
              type: InstallationType.HYBRID,
              ID: "123456"
            }
          ]
        }
      }
    ]
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
});
