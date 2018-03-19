import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import entityDataService from './services/entityDataService';
import { getEntityAndLoadData } from './redux/actions';
import EntityHeaderBar from './components/entityHeader';
import EntityDataList from './components/dataList';
import DataEditComponent from './components/dataEdit';

class DataEditor extends Component {
    constructor(props) {
        super(props);
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.state = {
            showDataEdit: false
        };
    }

    onHeaderClick(key) {
        this.props.getEntityAndLoadData('1');
    }

    render() {
        const { entity, data } = this.props.dataEditor;
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
                            <Link to='/dataeditor/new'>
                                <button type="button" className="btn btn-primary">+</button>
                            </Link>
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
    }
}

export default connect(mapStateToProps, { getEntityAndLoadData })(DataEditor);