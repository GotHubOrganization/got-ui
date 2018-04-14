import React, { Component } from 'react';
import GotObject from './got-object';

/**
 * Main view for creating and editing objects based on a given type. The type is injected
 * via a route param (e.g. /object/:type). This component also attaches a GotTypeService
 * to the GotObject (GotObjectTyped) component to enable API access on object level.
 */
export class GotObjectView extends Component {
    render() {
        const typeName = this.props.match.params.type;
        return (<GotObject typeName={typeName}/>);
    }
}
