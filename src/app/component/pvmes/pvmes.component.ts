import { CommonModule } from '@angular/common';
import { Component, Inject, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { CompanyDetailsFg, CustomerDetailsFg, InstallationDetailsFg, PanelGroup } from './model/pvme.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Regex } from './model/regex.model';
import { InstallationType } from './model/pvmes.enum';
import {MatListModule} from '@angular/material/list';
import { PvmesService } from 'src/app/service/pvmes.service';

@Component({
  selector: 'app-pvmes',
  standalone: true,
  providers: [
    provideNativeDateAdapter()
  ],
  imports: [
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
    MatListModule
  ],
  templateUrl: './pvmes.component.html',
  styleUrl: './pvmes.component.scss'
})
export class PvmesComponent {
  @ViewChild('snackErrorTpl') snackErrorTpl!: TemplateRef<HTMLElement>;
  
  protected readonly fb = inject(FormBuilder);
  protected pvmesService = inject(PvmesService);
  protected matSnackBar = Inject(MatSnackBar);

  companyDetailsFg = this.fb.nonNullable.group<CompanyDetailsFg>({
    name: this.fb.nonNullable.control('', [Validators.required]),
    siren: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(Regex.siren), Validators.minLength(9), Validators.maxLength(9)]),
  });
  customerDetailsFg = this.fb.nonNullable.group<CustomerDetailsFg>({
    name: this.fb.nonNullable.control('', [Validators.required]),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    telephone: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(Regex.french_phone_number)]),
  });
  installationDetailsFg = this.fb.nonNullable.group<InstallationDetailsFg>({
    address: this.fb.nonNullable.control('', [Validators.required]),
    date: this.fb.nonNullable.control('', [Validators.required]),
    numberOfpanels: this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(1000000)]),
    panels: this.fb.nonNullable.array<FormGroup<PanelGroup>>(
      [],
      [Validators.required]
    )
  });

  addInstalltionFg = this.fb.nonNullable.group({
    type: this.fb.nonNullable.control(InstallationType.HYBRID, [Validators.required]),
    ID: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(Regex.installationID)])
  })

  public get companySirenErrorMsg() {
    return this.companyDetailsFg.controls.siren.hasError('required') ? 'This field is required' : 'Invalid format';
  }
  public get customerEmailErrorMsg() {
    return this.customerDetailsFg.controls.email.hasError('required') ? 'This field is required' : 'Invalid format';
  }
  public get customerPhoneErrorMsg() {
    return this.customerDetailsFg.controls.email.hasError('required') ? 'This field is required' : 'Invalid format';
  }
  public get installationIDErrorMsg() {
    return this.addInstalltionFg.controls.ID.hasError('required') ? 'This field is required' : 'Invalid format';
  }
  public get panels() {
    return this.installationDetailsFg.controls.panels.value;
  }

  public get panelTypeOptions() {
    return Object.values(InstallationType);
  }

  public panelForm(index: number) {
    return this.installationDetailsFg.controls.panels.at(index);
  }

  public addInstallation(): void {
    this.installationDetailsFg.controls.panels.push(this.fb.nonNullable.group({
      type: this.fb.nonNullable.control(this.addInstalltionFg.controls.type.value),
      ID: this.fb.nonNullable.control(this.addInstalltionFg.controls.ID.value)
    }));
    this.addInstalltionFg.reset({
      type: InstallationType.HYBRID,
      ID: ''
    });
  }

  public removePanel(index: number): void {
    this.installationDetailsFg.controls.panels.removeAt(index);
  }

  public sendPV(): void {
    const pv = {
      company: {
        ...this.companyDetailsFg.value
      },
      customer: {
        ...this.customerDetailsFg.value
      },
      installation: {
        ...this.installationDetailsFg.value
      }
    }
    this.pvmesService.postPV(pv).subscribe({
      error: () => {
        this.matSnackBar.openFromTemplate(this.snackErrorTpl, {
          duration: 5 * 1000,
        });
      }
    })
  }
}
