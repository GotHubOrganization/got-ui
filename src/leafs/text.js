import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

/**
 * Simple text input component acting as a default view for string properties.
 * It renders an input labeled with the property name.
 */
export class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            value: props.value
        };
    }

    render() {
        return (
            <Form.Field>
                <label>{this.props.label}</label>
                <input />
            </Form.Field>
        );
    }
}
