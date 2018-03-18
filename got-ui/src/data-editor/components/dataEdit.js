import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataEditorComponent extends Component {

    render() {
        const { data } = this.props.dataEditor;

        if (data.name) {
            return (
                <form>
                    {this.mapFormFields(data)}
                </form>
            );
        }
       /* <form>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        </form> */
    }

    
    mapFormFields = (entities) => {
        return entities.properties.map(entity => {
            if (typeof entity.type === 'object') {
                return (
                    entity.type.properties.map(subProp => {
                        return <div label={subProp.name}>
                            <label > {subProp.type.name} </label>
                            <input placeholder='A' />
                        </div>
                    })
                );
            }
            return (
                <div label={entity.name}>
                    <label > {entity.type.name} </label>
                    <input placeholder='B' />
                </div>
            )
        });
    }

}