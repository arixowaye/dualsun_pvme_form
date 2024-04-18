import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { InstallationDetailsFg } from "../model/pvme.model";

export function uniqueInstallationIdValidator(fg: FormGroup<InstallationDetailsFg>): ValidatorFn {
    return (control: AbstractControl<string>) : ValidationErrors | null => {
        return fg.controls.panels.value.some(p => p.ID === control.value) ? { unique : true } : null;
    }
}