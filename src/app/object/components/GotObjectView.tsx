import { State as RootState } from 'app/redux';
import { Map } from 'app/type';
import * as path from 'path-browser';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Button, Grid } from 'semantic-ui-react';
import { ObjectData } from '../interfaces/objectData.interface';
import { saveObject } from '../redux/actions';
import GotObject from './GotObject';

interface ReduxProps {
    /**
     * TODO:
     */
    saveObject: (object: ObjectData) => Promise<string>;
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
interface Props extends RouteComponentProps<Map<string>> {
}

interface State {

    /**
     * TODO:
     */
    typeName: string;
    /**
     * TODO:
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
            typeName: this.props.match.params.typeName,
            object: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    public render() {
        const typeName = this.state.typeName;
        return (
            <React.Fragment>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <GotObject typeName={typeName} onChange={this.onChange} />
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

    private onChange(value: any) {
        this.setState({
            object: value
        });
    }

    private onSave() {
        const self = this;
        this.props.saveObject(
            {
                type: this.state.typeName,
                ...this.state.object
            }
        ).then((id) => {
            self.props.history.push(path.join(self.props.match.url, id));
            self.setState({
                ...self.state,
                object: {
                    id,
                    ...self.state.object
                }
            });
        });
    }
}

function mapStateToProps(state: RootState, props: Props): any {
    return {};
}

export default connect(mapStateToProps, { saveObject })(GotObjectView);
