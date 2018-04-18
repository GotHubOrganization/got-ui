import * as React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';

interface Props {
    label: string;
    onChange?: (value: string) => void;
}

/**
 * Simple text input component acting as a default view for string properties.
 * It renders an input labeled with the property name.
 */
export class Text extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public onChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }

    public render() {
        return (
            <Form.Field>
                <label>{this.props.label}</label>
                <input onChange={this.onChange} />
            </Form.Field>
        );
    }
}
