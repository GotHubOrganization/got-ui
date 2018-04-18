import { GotPropertyAccess } from './enums/gotPropertyAccess.enum';

export class GotTypePropertyDto {
    public readonly name: string;
    public type: string;
    public readonly view?: string;
    public readonly access: GotPropertyAccess;
    public readonly validators: any[];
    public readonly required: boolean;
}

