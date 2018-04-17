import { GotPropertyAccess } from './enums/got-property-access.enum';

export class GotPropertyDto {

    public readonly name: string;

    public type: string;

    public readonly view?: string;

    public readonly access: GotPropertyAccess;

    public readonly validators: any[];

    public readonly required: boolean;

}

