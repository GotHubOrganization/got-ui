import { State as RootState } from 'app/redux/state';
import { fetchType, GotTypeDto, GotTypePropertyDto } from 'app/type';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Header, Message } from 'semantic-ui-react';
import { GotObjectProperty } from './GotObjectProperty';

interface ReduxProps {
    /**
     * Action for fetching type descriptions from the redux store.
     */
    fetchType: typeof fetchType;
}

/**
 * Partial interface allowing all properties to be undefinded for easier
 * merging.
 */
interface PartialProps {
    /**
     * Type name unique in the whole got environment to specify the objects type
     * rendered by this component.
     */
    typeName?: string;

    /**
     * Type declaration which can be empty before the component gets rendered. It will be filled
     * based on the typeName prop.
     */
    type?: GotTypeDto;

    /**
     * Represents the level in the component tree for rendering purposes.
     */
    level?: number;

    /**
     * Represents an error object in case the component threw an error that should be shown
     * to the user or generally influence the rendering of the component.
     */
    error?: Error;
}

interface Props extends PartialProps {
    typeName: string;
}

/**
 * Represents a create and edit form for an instance of a got type. It will render the
 * view automatically based on the properties of its type declaration.
 */
class GotObject extends Component<Props & ReduxProps> {

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

function mapStateToProps(state: RootState, props: Props): PartialProps {
    return {
        type: state.type.types[props.typeName]
    };
}

export default connect(mapStateToProps, { fetchType })(GotObject);
