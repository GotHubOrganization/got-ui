import React, { Component } from 'react';
import { GotObject } from './got-object';
import { connect } from 'react-redux';
import { fetchObject } from '../redux/actions';

/**
 * Main view for creating and editing objects based on a given type. The type is injected
 * via a route param (e.g. /object/:type). This component also attaches a GotTypeService
 * to the GotObject (GotObjectTyped) component to enable API access on object level.
 */
class GotObjectView extends Component {
    componentWillMount() {
        const typeName = this.props.match.params.type;
        this.props.fetchObject(typeName);
    }

    render() {
        const typeName = this.props.match.params.type;
        if (this.props.gotObject.dataType) {
            return (
                <GotObject typeName={typeName} typeObject={this.props.gotObject.dataType} />
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(props) {
    return {
        gotObject: props.gotObject
    };
}

export default connect(mapStateToProps, { fetchObject })(GotObjectView);
