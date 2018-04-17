import * as React from 'react';
import { Component } from 'react';
import { Text } from '../../leafs';
import { GotPropertyDto, isPrimitive } from '../../type';
import GotObject from './got-object';

namespace GotObjectProperty {
    export interface Props {
        property: GotPropertyDto;
        level: number;
    }
}

/**
 * This component renders a single property based on the GotPropertyDto. Primitive properties
 * are currently just rendered with a Text component while complex typed propterties will 
 * again render a new GotObject component which is attached to a GotTypeService by itself
 * (GotObjectTyped).
 */
export class GotObjectProperty extends Component<GotObjectProperty.Props> {
    public render() {
        const property = this.props.property;
        const type = property.type;
        const level = this.props.level || 1;
        if (isPrimitive(type)) {
            return <Text label={property.name} />;
        } else {
            return <GotObject typeName={type} level={level + 1} />;
        }
    }
}