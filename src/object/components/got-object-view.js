import React, { Component } from 'react';
import { GotObject } from './got-object';
import { gotTypeServiceHoc } from '../../type/components/got-type-service.hoc';
import FixedMenuLayout from '../../layout/fixed-menu-layout';

export class GotObjectView extends Component {

    constructor(props) {
        super(props);
        this.state = { type: {} };
    }

    render() {
        const typeName = this.props.match.params.type;
        const GotObjectTyped = gotTypeServiceHoc(GotObject);

        return (
            <FixedMenuLayout>
                <GotObjectTyped typeName={typeName} />
            </FixedMenuLayout>
        );
    }
}
