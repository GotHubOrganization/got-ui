import { State as RootState } from 'app/redux';
import * as path from 'path-browser';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Button, Grid } from 'semantic-ui-react';
import { ObjectData } from '../interfaces/objectData.interface';
import { fetchObject, saveObject } from '../redux/actions';
import GotObject from './GotObject';

/**
 * This interface groups together redux related properties
 */
interface ReduxProps {
    /**
     * Action trigger to save a certain got object.
     */
    saveObject: (object: ObjectData) => Promise<string>;

    /**
     * Action trigger to fetch a certain got object.
     */
    fetchObject: (id: string) => Promise<object>;
}

/**
 * Dummy interface which makes route params available to the component. E.g. a given route
 * `/:aParam/:bParam` would result in this object:
 * ```typescript
 * this.props.match.params = { aParam: aValue, bParam: bValue }
 * ```
 * `Map<string>` is the type of the param object which means an object with string keys and
 * string values.
 */
interface Props extends RouteComponentProps<{ typeName: string; objectId: string }> {
}

interface State {

    /**
     * The current unsaved object in the state. When the save button is clicked, the view state
     * will be synced to the store and the API.
     */
    object: ObjectData | any;
}

/**
 * Main view for creating and editing objects based on a given type. The type is injected
 * via a route param (e.g. /object/:typeName). This component also attaches a GotTypeService
 * to the GotObject (GotObjectTyped) component to enable API access on object level.
 */
class GotObjectView extends Component<Props & ReduxProps, State> {
    constructor(props: Props & ReduxProps) {
        super(props);
        this.state = {
            object: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.navigateToObjectId = this.navigateToObjectId.bind(this);
    }

    public componentWillMount() {
        const self = this;
        const objectId = this.props.match.params.objectId;
        if (objectId) {
            this.props.fetchObject(objectId).then((object: ObjectData) => {
                self.setState({object});
            });
        }
    }

    public render() {
        const typeName = this.props.match.params.typeName;
        return (
            <React.Fragment>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <GotObject typeName={typeName} object={this.state.object} onChange={this.onChange} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column />
                        <Grid.Column />
                        <Grid.Column>
                            <Button
                                onClick={this.onSave}
                                primary
                                fluid
                                size="big"
                            >Save</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }

    /**
     * Change listener for the got object in the state. Listens to all changes of the object and
     * nested objects and writes the to the component state.
     */
    private onChange(value: any) {
        this.setState({
            object: value
        });
    }

    /**
     * Event listener for the save event. Writes the component state to the redux store
     */
    private onSave() {
        const self = this;
        this.props.saveObject({
            type: this.props.match.params.typeName,
            ...this.state.object
        }).then((id) => {
            self.navigateToObjectId(id);
            self.setState({
                ...self.state,
                object: {
                    id,
                    ...self.state.object
                }
            });
        });
    }

    /**
     * Navigates the router to the object id to indicate when a new object (without id)
     * has been saved.
     */
    private navigateToObjectId(id: string) {
        const oldId = this.props.match.params.objectId;
        if (oldId !== id) {
            this.props.history.push(path.join(this.props.match.url, id));
        }
    }
}

function mapStateToProps(state: RootState, props: Props): any {
    return {};
}

export default connect(mapStateToProps, { fetchObject, saveObject })(GotObjectView);
