import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

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
