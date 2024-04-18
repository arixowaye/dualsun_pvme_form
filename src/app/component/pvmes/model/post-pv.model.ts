import { InstallationType } from "./pvmes.enum";

export interface PostPV {
    company: {
        name?: string | undefined;
        siren?: string | undefined;
    };
    customer: {
        name?: string | undefined;
        email?: string | undefined;
        telephone?: string | undefined;
    };
    installation: {
        address?: string | undefined;
        date?: string | undefined;
        numberOfpanels?: number | undefined;
        panels?: Partial<{
            type: InstallationType;
            ID: string;
        }>[] | undefined;
    };
}