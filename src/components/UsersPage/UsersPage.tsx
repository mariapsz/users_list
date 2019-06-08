import * as React from 'react';
import {UsersPageState} from './UsersPageState';
import {UserDataForm} from '../UserDataForm/UserDataForm';
import {UsersList} from '../UsersList/UsersList';
import {User} from '../../classes/User';

export class UsersPage extends React.Component<{}, UsersPageState> {

    constructor(props: any) {
        super(props);
        this.state = {usersList: []};
    }

    handleUserSubmit = (user: User) => {
        if (this.state.usersList)
            this.setState({
                usersList: [...this.state.usersList, user],
            });
        else
            this.setState({
                usersList: [user],
            });
    };

    render() {
        return (
            <div>
                <UserDataForm
                    handler={this.handleUserSubmit}
                    usersList={this.state.usersList}
                />
                <UsersList usersList={this.state.usersList}/>
            </div>)
    }
}

