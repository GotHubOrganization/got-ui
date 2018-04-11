import React, { Component } from 'react';

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
            <div className="form-group">
                <label>{this.props.label}:</label>
                <input type="text" className="form-control" value={this.props.value} />
            </div>
        );
    }
}
