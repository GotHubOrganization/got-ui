import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataEditorComponent extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const { data } = this.props;

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
                        return 
                        <div className="form-group" label={subProp.name}>
                            <label > {subProp.type.name} </label>
                            <input placeholder={subProp.name} />
                        </div>
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