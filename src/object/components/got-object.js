import React, { Component } from 'react';
import { GotObjectProperty } from './got-object-property';
import { Header, Container, Form, Message } from 'semantic-ui-react';
import { gotTypeServiceHoc } from '../../type';

/**
 * Represents a create and edit form for an instance of a got type. It will render the
 * view automatically based on the properties of its type declaration.
 */
export class GotObject extends Component {
    /**
     * The hierachy level of the object within the loaded object tree. Mainly used for
     * layout purposes.
     */
    level = this.props.level || 1;

    /**
     * Renders all properties of the given type declaration.
     * @param {Object} type GotTypeDto which containes all properties to be rendered.
     */
    renderProperties(type) {
        let result = [];
        for (const property of type.properties) {
            result.push(
                <GotObjectProperty
                    key={type.name + '_' + property.name}
                    property={property}
                    level={this.level} />
            );
        }
        return result;
    }

    render() {
        const typeName = this.props.typeName;
        const type = this.props.type || {};
        const loading = type.properties ? false : true;
        type.properties = type.properties || [];

        if (this.props.error) {
            const error = this.props.error;
            return (
                <Message
                    error
                    header={error.message}
                    content={error.stack}/>
            );
        } else {
            return (
                <Form as='div' loading={loading} style={{ minHeight: '10em' }}>
                    <Container>
                        <Header as={'h' + (this.level)} content={typeName} textAlign='left' />
                        {this.renderProperties(type)}
                    </Container>
                </Form>
            );
        }
    }
}

export const GotObjectTyped = gotTypeServiceHoc(GotObject);
