import React, { Component } from 'react';
import { GotTypeService } from '../services/got-type-service';

/**
 * Takes some component and injects the result of a got type service data select into the type prop.
 * @param {Component} WrappedComponent The component that should be filled with type data from the service.
 */
export const gotTypeServiceHoc = (WrappedComponent) => {
    return class extends Component {

        gotTypeService = GotTypeService.getInstance();

        constructor(props) {
            super(props);
            this.state = { type: null, error: null };
        }

        componentDidMount() {
            this.gotTypeService.get(this.props.typeName).then((type) => {
                this.setState({ type, error: null });
            }).catch((error) => {
                this.setState({ type: null, error });
            });
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };
};
