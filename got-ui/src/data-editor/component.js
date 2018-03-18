import React, { Component } from 'react';
import { connect } from 'react-redux';
import entityDataService from './services/entityDataService';
import { getEntity } from './redux/actions';
import EntityHeaderBar from './components/entityHeader';
import EntityDataList from './components/dataList';

class DataEditor extends Component {
    constructor(props) {
        super(props);
        this.onHeaderClick = this.onHeaderClick.bind(this);
    }

    onHeaderClick(key) {
        this.props.getEntity('1');
    }

    render() {
        return (
            <React.Fragment>
                <div className="column" >
                    <EntityHeaderBar onEntitiySelect={this.onHeaderClick} />
                </div>
                <div className="row">
                    {this.props.dataEditor.data && (
                        <React.Fragment>
                            <EntityDataList data={this.props.dataEditor.data} />
                            <button type="button" className="btn btn-primary">+</button>
                        </React.Fragment>
                    )
                    }
                </div>
                <div className="row">
                
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

export default connect(mapStateToProps, { getEntity })(DataEditor);