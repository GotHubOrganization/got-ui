import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Map } from '../../type';
import GotObject from './got-object';

namespace GotObjectView {
    export interface Props extends RouteComponentProps<Map<string>> {
    }
}

/**
 * Main view for creating and editing objects based on a given type. The type is injected
 * via a route param (e.g. /object/:typeName). This component also attaches a GotTypeService
 * to the GotObject (GotObjectTyped) component to enable API access on object level.
 */
export class GotObjectView extends Component<GotObjectView.Props> {
    public render() {
        const typeName = this.props.match.params.typeName;
        return (<GotObject typeName={typeName} />);
    }
}
