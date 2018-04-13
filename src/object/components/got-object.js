import React, { Component } from 'react';
import { GotObjectProperty } from './got-object-property';

export class GotObject extends Component {
    constructor(props) {
        super(props);
    }

    renderProperties(type) {
        if (type && type.properties) {
            let result = [];
            for (const property of type.properties) {
                result.push(<GotObjectProperty key={type.name + '_' + property.name} property={property} />);
            }
            return result;
        }
    }

    render() {
        const type = this.props.type;
        return (
            <div>
                {this.renderProperties(type)}
            </div>
        );
    }
}
