import * as React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';

namespace Text {
    export interface Props {
        label: string;
    }
    export interface State {
        value: string;
    }
}

/**
 * Simple text input component acting as a default view for string properties.
 * It renders an input labeled with the property name.
 */
export class Text extends Component<Text.Props, Text.State> {
    constructor(props: Text.Props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    public render() {
        return (
            <Form.Field>
                <label>{this.props.label}</label>
                <input value={this.state.value}/>
            </Form.Field>
        );
    }
}
