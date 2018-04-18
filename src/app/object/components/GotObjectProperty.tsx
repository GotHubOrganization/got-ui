import { Text } from 'app/leafs';
import { GotTypePropertyDto, isPrimitive, Map } from 'app/type';
import * as React from 'react';
import { Component } from 'react';
import GotObject from './GotObject';

interface Props {
    /**
     * Represents the description of a type property in the got environment.
     */
    property: GotTypePropertyDto;

    /**
     * Represents the level in the component tree for rendering purposes.
     */
    level: number;

    onChange?: (propVal: Map<any>) => void;
}

/**
 * This component renders a single property based on the GotTypePropertyDto. Primitive properties
 * are currently just rendered with a Text component while complex typed propterties will 
 * again render a new GotObject component which is attached to a GotTypeService by itself
 * (GotObjectTyped).
 */
export class GotObjectProperty extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public onChange(value: any) {
        if (this.props.onChange) {
            const propVal: Map<any> = {
                [this.props.property.name]: value
            }
            this.props.onChange(propVal);
        }
    }

    public render() {
        const property = this.props.property;
        const type = property.type;
        const level = this.props.level || 1;
        if (isPrimitive(type)) {
            return <Text label={property.name} onChange={this.onChange} />;
        } else {
            return <GotObject typeName={type} level={level + 1} onChange={this.onChange} />;
        }
    }
}
