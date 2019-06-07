import * as React from 'react';
import {UsersListProps} from './UsersListProps';
import {UsersListState} from './UsersListState';


export class UsersList extends React.Component<UsersListProps, UsersListState> {

    constructor(props: UsersListProps) {
        super(props);
        this.setState({
            usersList: [],
        });
    }

    render() {
        return <div>{this.props.currentUserList}</div>
    }
}