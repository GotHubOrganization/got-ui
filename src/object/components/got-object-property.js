import React, { Component } from 'react';
import { Text } from '../../view-components/text';
import { isPrimitive } from '../../type/helpers/type-helper';
import { GotObject } from './got-object';
import { gotTypeServiceHoc } from '../../type/components/got-type-service.hoc';

export class GotObjectProperty extends Component {
    render() {
        const property = this.props.property;
        const type = property.type;
        if (isPrimitive(type)) {
            return <Text label={property.name} />;
        } else {
            const GotObjectTyped = gotTypeServiceHoc(GotObject);
            return <GotObjectTyped
                typeName={type} 
                level={this.props.level + 1} />;
        }
    }
}
