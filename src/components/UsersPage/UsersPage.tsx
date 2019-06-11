import * as React from 'react';
import {UsersPageState} from './UsersPageState';
import {UserDataForm} from '../UserDataForm/UserDataForm';
import {UsersList} from '../UsersList/UsersList';
import {User} from '../../classes/User';
import {Header, PageWrapper} from './UsersPageStyles';

export class UsersPage extends React.Component<{}, UsersPageState> {

    constructor(props: any) {
        super(props);
        this.state = {usersList: []};
    }

    handleUserSubmit = (userToAdd: User): string => {
        let errorMessage = '';
        //check by name and email if already exists
        if (this.state.usersList.find(user => user.nickName === userToAdd.nickName))
            errorMessage = 'Cannot add user, user with above nickname already exists';
        if (this.state.usersList.find(user => user.email === userToAdd.email))
            errorMessage === '' ?
                errorMessage = 'Cannot add user, user with above email already exists'
                :
                errorMessage = 'Cannot add user, user with above email and nickname already exists';

        //if there is no user like userToAdd, add user to usersList
        if (errorMessage === '')
            if (this.state.usersList)
                this.setState({
                    usersList: [...this.state.usersList, userToAdd],
                });
            else
                this.setState({
                    usersList: [userToAdd],
                });
        return errorMessage;
    };

    handleUserRemoval = (userToRemove: User): void => {
        this.setState({
            usersList: this.state.usersList.filter((user) => {
                return user !== userToRemove
            })
        })
    };

    sortByNicknameHandler = () => {
        this.setState({
            usersList: this.state.usersList.sort((a, b) => (a.nickName > b.nickName) ? 1 : ((b.nickName > a.nickName) ? -1 : 0)),
        })

    };

    sortByEmailHandler = () => {
        this.setState({
            usersList: this.state.usersList.sort((a, b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0)),
        })
    };

    entireListRemovalHandler = () => {
        this.setState({
            usersList: [],
        })
    };

    render() {
        return (
            <PageWrapper>
                <Header>Crypto users</Header>
                <UserDataForm
                    handler={this.handleUserSubmit}
                    usersList={this.state.usersList}
                />
                <UsersList
                    usersList={this.state.usersList}
                    userRemovalHandler={this.handleUserRemoval}
                    sortByEmailHandler={this.sortByEmailHandler}
                    sortByNicknameHandler={this.sortByNicknameHandler}
                    entireListRemovalHandler={this.entireListRemovalHandler}
                />
            </PageWrapper>)
    }
}

