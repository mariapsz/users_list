import * as React from 'react';
import {UserPageProps} from './UsersPageProps';
import {UsersPageState} from './UsersPageState';
import {UserDataForm} from '../UserDataForm/UserDataForm';
import {UsersList} from '../UsersList/UsersList';

export class UsersPage extends React.Component<UserPageProps, UsersPageState> {

    constructor(props: UserPageProps) {
        super(props);
        this.state = {usersList: []};
    }

    render() {
        return (
            <div>
                <UserDataForm userDataInfoParameters={this.props.userDataInfoParameters} />
                <UsersList usersList={this.state.usersList}/>
            </div>)
    }
}

