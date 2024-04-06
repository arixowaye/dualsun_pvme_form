import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvmesComponent } from './pvmes.component';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PvmesService } from 'src/app/service/pvmes.service';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';

describe('PvmesComponent', () => {
  let component: PvmesComponent;
  let fixture: ComponentFixture<PvmesComponent>;
  let loader: HarnessLoader;

  const pvmesService = jasmine.createSpyObj<PvmesService>('PvmesService', ['getAllPV']);
  pvmesService.getAllPV.and.returnValue(of([]));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: PvmesService,
          useValue: pvmesService
        }
      ],
      imports: [
        PvmesComponent,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        ReactiveFormsModule,
        CommonModule,
        MatDividerModule,
        MatSnackBarModule,
        MatStepperModule,
        MatDatepickerModule,
        MatListModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvmesComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should fill out company details', async () => {
    const nextBtnHarness = await loader.getHarness(MatButtonHarness.with({selector: '#company-next-btn'}));
    const nameHarness = await loader.getHarness(MatInputHarness.with({selector: '#company-name'}));
    const sirenHarness = await loader.getHarness(MatInputHarness.with({selector: '#company-siren'}));

    expect(await nextBtnHarness.isDisabled()).toEqual(true);
    await nameHarness.setValue('Arix');
    await sirenHarness.setValue('wrong value');
    expect(await nextBtnHarness.isDisabled()).toEqual(true);

    await sirenHarness.setValue('1234');
    expect(await nextBtnHarness.isDisabled()).toEqual(true);

    await sirenHarness.setValue('123456789');
    expect(await nextBtnHarness.isDisabled()).toEqual(false);

    await nextBtnHarness.click();
    // check that we are in the next step
    const backButtonCustomer = await loader.getHarness(MatButtonHarness.with({ selector: '#customer-back-btn'}));
    expect(await backButtonCustomer.isDisabled()).toEqual(false);
  });
});
