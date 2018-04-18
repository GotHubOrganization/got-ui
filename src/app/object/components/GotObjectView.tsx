import { Map } from 'app/type';
import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import GotObject from './GotObject';

/**
 * Dummy interface which makes route params available to the component. E.g. a given route
 * `/:aParam/:bParam` would result in this object:
 * ```typescript
 * this.props.match.params = { aParam: aValue, bParam: bValue }
 * ```
 * `Map<string>` is the type of the param object which means an object with string keys and
 * string values.
 */
export interface Props extends RouteComponentProps<Map<string>> {
}

/**
 * Main view for creating and editing objects based on a given type. The type is injected
 * via a route param (e.g. /object/:typeName). This component also attaches a GotTypeService
 * to the GotObject (GotObjectTyped) component to enable API access on object level.
 */
export class GotObjectView extends Component<Props> {
    public render() {
        const typeName = this.props.match.params.typeName;
        return (<GotObject typeName={typeName} />);
    }
}
