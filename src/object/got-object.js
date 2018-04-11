import React, { Component } from 'react';
import { Text } from '../view-components/text';

export class GotObject extends Component {
    constructor(props) {
        super(props);
    }

    renderProperties(type) {
        if (type && type.properties) {
            let result = [];
            for (const property of type.properties) {
                result.push(<Text key={type.name + '_' + property.name} label={property.name} />);
            }
            return result;
        }
    }

    render() {
        const type = this.props.type;
        return (
            <form>
                {this.renderProperties(type)}
            </form>
        );
    }
}
