import * as React from 'react';
import {UserPageProps} from './UsersPageProps';
import {UsersPageState} from './UsersPageState';
import {UserDataForm} from '../UserDataForm/UserDataForm';
import {UsersList} from '../UsersList/UsersList';
import {User} from '../../Types/User';

export class UsersPage extends React.Component<UserPageProps, UsersPageState> {

    constructor(props: UserPageProps) {
        super(props);
        this.state = {usersList: []};
    }

    handleUserSubmit(user: User) {
        const currentUsers = this.state.usersList;
        // warunek na istnienie
        currentUsers.push(user);
        // this.setState({
        //     usersList: currentUsers,
        // })
    }

    render() {
        return (
            <div>
                <UserDataForm
                    handler={this.handleUserSubmit}
                    userDataInfoParameters={this.props.userDataInfoParameters}
                    usersList={this.state.usersList}
                />
                <UsersList currentUserList={this.state.usersList}/>
            </div>)
    }
}

