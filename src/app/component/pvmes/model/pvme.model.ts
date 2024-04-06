import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { InstallationType } from "./pvmes.enum";

export interface PanelGroup {
    type: FormControl<InstallationType>,
    ID: FormControl<string>
};

export interface CompanyDetailsFg {
    name: FormControl<string>;
    siren: FormControl<string>;
}
export interface CustomerDetailsFg {
    name: FormControl<string>;
    email: FormControl<string>;
    telephone: FormControl<string>;
}
export interface InstallationDetailsFg {
    address: FormControl<string>;
    date: FormControl<string>;
    numberOfpanels: FormControl<number>;
    panels: FormArray<FormGroup<PanelGroup>>;
}