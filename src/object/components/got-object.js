import React, { Component } from 'react';
import { GotObjectProperty } from './got-object-property';
import { Header, Container, Form, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchType } from '../../type';

/**
 * Represents a create and edit form for an instance of a got type. It will render the
 * view automatically based on the properties of its type declaration.
 */
class GotObject extends Component {

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
        return type.properties.map(property => {
            return <GotObjectProperty
                key={type.name + '_' + property.name}
                property={property}
                level={this.level} />;
        });
    }

    componentWillMount() {
        this.props.fetchType(this.props.typeName);
    }

    render() {
        const { typeName } = this.props;
        const type = this.props.type || {};
        const loading = type.name ? false : true;
        type.properties = type.properties || [];

        if (this.props.error) {
            const error = this.props.error;
            return (
                <Message
                    error
                    header={error.message}
                    content={error.stack} />
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

function mapStateToProps(state, props) {
    return {
        type: state.type.types[props.typeName]
    };
}

export default connect(mapStateToProps, { fetchType })(GotObject);
