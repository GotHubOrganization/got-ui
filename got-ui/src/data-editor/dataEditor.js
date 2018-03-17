import React, { Component } from 'react';
import { connect } from 'react-redux';
import dataService from './entityDataService';
import entityDataService from './entityDataService';
import { Label, Form } from 'semantic-ui-react';
import { getEntity } from './actions';

class DataEditor extends Component {
    componentWillMount() {
        this.props.getEntity('1');
    }

    render() {
        const { data } = this.props.dataEditor;
        if (data.name) {
            return (
                <Form>
                    <Label content={data.name} />
                    <Form.Group widths='equal'>
                        {this.mapFormFields(data)}
                    </Form.Group>
                </Form>
            );
        }
        else {
            return null;
        }
    }

    mapFormFields = (entities) => {
        return entities.properties.map(entity => {
            if (typeof entity.type === 'object') {
                return (
                    <Form.Group widths='equal'>
                        <Label content= {entity.type.name}/>
                        {this.mapFormFields(entity.type)}
                    </Form.Group>
                );
            }
            return <Form.Input fluid label={entity.name} />
        });
    }
}

function mapStateToProps(props) {
    return {
        dataEditor: props.dataEditor
    }
}

export default connect(mapStateToProps, { getEntity })(DataEditor);