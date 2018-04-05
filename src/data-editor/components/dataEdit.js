import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button, Form, Label } from 'semantic-ui-react';

class DataEditorComponent extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const { entity } = this.props.dataEditor;

        if (entity) {
            return (
                <Form>
                    {this.mapFormFields(entity)}
                    {this.renderBackButton()}
                </Form>
                
            );
        }
        return (
            this.renderBackButton()
        );
    }

    mapFormFields = (entities) => {
        return entities.properties.map(entity => {
            if (typeof entity.type === 'object') {
                return (
                    <React.Fragment>
                        <Label color="blue">{entity.name}</Label>

                        {
                            entity.type.properties.map(subProp => {
                                return (
                                    <Form.Field>
                                        <Label> {subProp.name} </Label>
                                        <Input placeholder={subProp.name} />
                                    </Form.Field>
                                );
                            })
                        }

                    </React.Fragment>

                );
            }
            return (
                <Form.Field>
                    <Label> {entity.name} </Label>
                    <Input placeholder={entity.name} />
                </Form.Field>
            );
        });
    }
    renderBackButton() {
        return (
            <Button as={Link} to="/dataeditor" primary>
                Back
            </Button>
        );
    }

}

function mapStateToProps(props) {
    return {
        dataEditor: props.dataEditor
    };
}

export default connect(mapStateToProps)(DataEditorComponent);
