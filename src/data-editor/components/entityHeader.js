import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'

export default class EntityHeaderComponent extends Component {
    static propTypes = {
        entities: PropTypes.array,
        onEntitiySelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = { activeItem: undefined }
    }

    render() {
        const { activeItem } = this.state
        let { entities } = this.props;
        if (entities) {
            //TODO: read from entities and show in header , add link to id from entity and reroute to entitylist
        }
        else {
            return (
                <Menu>
                    <Menu.Item name='Person'
                        active={activeItem === 'Person'}
                        onClick={this.onItemClick}
                        key="1">
                        Person
                    </Menu.Item>
                </Menu>)
        }
    }

    onItemClick(item) {
        this.setState({ activeItem: item.name })
        this.props.onEntitiySelect(item.key);
    }
}