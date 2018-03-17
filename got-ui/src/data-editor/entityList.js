import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';


export default class EntityList extends Component {
    render() {
        return (
            <List bulleted>
                <List.Item as={ <Link to='/dataeditor/1' /> } ></List.Item>
            </List>
        );
    }
}