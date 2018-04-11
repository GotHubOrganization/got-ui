import React, { Component } from 'react';
import { GotTypeService } from './services/got-type-service';
import { GotObject } from './got-object';

export class GotObjectView extends Component {

    constructor(props) {
        super(props);
        this.state = { type: {} };
    }

    componentWillMount() {
        const self = this;
        const typeName = this.props.match.params.type;
        const gotTypeService = new GotTypeService();
        gotTypeService.get(typeName).then((type) => {
            self.setState({ type });
        });
    }

    render() {
        return (
            <GotObject type={this.state.type} />
        );
    }
}
