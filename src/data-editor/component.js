import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEntityAndLoadData } from './redux/actions';
import EntityHeaderBar from './components/entityHeader';
import EntityDataList from './components/dataList';
import { Button } from 'semantic-ui-react';

class DataEditor extends Component {
    constructor(props) {
        super(props);
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.state = {
            showDataEdit: false
        };
    }

    onHeaderClick() {
        this.props.getEntityAndLoadData('1');
    }

    render() {
        const { data } = this.props.dataEditor;
        return (
            <React.Fragment>
                <div className="column" >
                    <EntityHeaderBar onEntitiySelect={this.onHeaderClick} />
                </div>
                <br />
                <div className="row">
                    {data && (
                        <React.Fragment>
                            <EntityDataList data={data} />
                            <Button as={Link} to='/dataeditor/new'>
                                    +
                            </Button>
                        </React.Fragment>
                    )
                    }
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(props) {
    return {
        dataEditor: props.dataEditor
    };
}

export default connect(mapStateToProps, { getEntityAndLoadData })(DataEditor);
