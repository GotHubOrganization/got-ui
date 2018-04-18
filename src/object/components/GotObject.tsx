import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Header, Message } from 'semantic-ui-react';
import { fetchType, GotTypeDto, GotTypePropertyDto } from 'type';
import { GotObjectProperty } from './GotObjectProperty';

interface ReduxProps {
    fetchType: typeof fetchType;
}

interface PartialProps {
    typeName?: string;
    type?: GotTypeDto;
    level?: number;
    error?: Error;
}

interface Props extends PartialProps {
    typeName: string;
}

interface State {
    value: string;
}

/**
 * Represents a create and edit form for an instance of a got type. It will render the
 * view automatically based on the properties of its type declaration.
 */
class GotObject extends Component<Props & ReduxProps, State> {

    /**
     * The hierachy level of the object within the loaded object tree. Mainly used for
     * layout purposes.
     */
    public level: number = this.props.level || 1;

    /**
     * Renders all properties of the given type declaration.
     * @param {Object} type GotTypeDto which containes all properties to be rendered.
     */
    public renderProperties(type: GotTypeDto): Array<React.ReactElement<GotObjectProperty>> {
        return type.properties.map((property: GotTypePropertyDto) => {
            return <GotObjectProperty
                key={type.name + '_' + property.name}
                property={property}
                level={this.level} />;
        });
    }

    public componentWillMount() {
        this.props.fetchType(this.props.typeName);
    }

    public render() {
        const { typeName } = this.props;
        const type: GotTypeDto =
            this.props.type ||
            {
                properties: new Array<GotTypePropertyDto>(0),
                name: ''
            };
        const loading: boolean = type.name ? false : true;

        if (this.props.error) {
            const error = this.props.error;
            return (
                <Message
                    error
                    header={error.message}
                    content={error.stack}
                />
            );
        } else {
            return (
                <Form as="div" loading={loading} style={{ minHeight: '10em' }}>
                    <Container>
                        <Header as={'h' + (this.level)} content={typeName} textAlign="left" />
                        {this.renderProperties(type)}
                    </Container>
                </Form>
            );
        }
    }
}

function mapStateToProps(state: any, props: Props): PartialProps {
    return {
        type: state.type.types[props.typeName]
    };
}

export default connect(mapStateToProps, { fetchType })(GotObject);
