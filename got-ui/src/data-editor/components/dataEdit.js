import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DataEditorComponent extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const { entity } = this.props.dataEditor;
        
        if (entity.name) {
            return (
                <form>
                    {this.mapFormFields(entity)}
                </form>
            );
        }
    }
    
    mapFormFields = (entities) => {
        return entities.properties.map(entity => {
            if (typeof entity.type === 'object') {
                return (
                    entity.type.properties.map(subProp => {
                        return (
                        <div className="form-group" label={subProp.name}>
                            <label > {subProp.name} </label>
                            <input placeholder={subProp.name} />
                        </div>);
                    })
                );
            }
            return (
                <div className="form-group" label={entity.name}>
                    <label > {entity.type.name} </label>
                    <input placeholder={entity.name } />
                </div>
            )
        });
    }
}

function mapStateToProps(props) {
    return {
        dataEditor: props.dataEditor
    }
}

export default connect(mapStateToProps)(DataEditorComponent);