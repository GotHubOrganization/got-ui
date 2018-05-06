import * as React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';

interface Props {
    /**
     * Displayed label of the property input control.
     */
    label: string;

    /**
     * Filled in value of the property input control.
     */
    value?: string;

    /**
     * Change trigger where the parent component can subscribe to.
     */
    onChange?: (value: string) => void;
}

interface State {
    /**
     * Controlled value by the input control.
     */
    value?: string;
}

/**
 * Simple text input component acting as a default view for string properties.
 * It renders an input labeled with the property name.
 */
export class Text extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: this.props.value || '' };
        this.onChange = this.onChange.bind(this);
    }

    /**
     * Change listener of the input controls change event. It signals the value to the
     * parent component.
     */
    public onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        this.setState({value});
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    public render() {
        return (
            <Form.Field>
                <label>{this.props.label}</label>
                <input value={this.state.value} onChange={this.onChange} />
            </Form.Field>
        );
    }
}
