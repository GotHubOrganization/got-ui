import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EntityHeaderComponent extends Component {
    static propTypes = {
        entities: PropTypes.array,
        onEntitiySelect: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    render() {
        let { entities } = this.props;
        if (entities) {
                //TODO: read from entities and show in header , add link to id from entity and reroute to entitylist
        }
        else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" onClick={ this.onItemClick }>Person <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }

    onItemClick(item) {
        this.props.onEntitiySelect(item.key);
    }
}