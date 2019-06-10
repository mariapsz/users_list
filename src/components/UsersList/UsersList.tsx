import * as React from 'react';
import {UsersListProps} from './UsersListProps';
import {DeleteButton} from '../DeleteButton/DeleteButton';


export const UsersList = (props: UsersListProps) => {

    const getUsersList = (): JSX.Element[] => (
        props.usersList.map((user, i) => (
            <div key={i}>
                <div>
                    {user.nickName}
                </div>
                <div>
                    {user.email}
                </div>
                <div>
                    {user.IPAdress}
                </div>
                <div>
                    <DeleteButton
                        user={user}
                        usersList={props.usersList}
                    />
                </div>
            </div>
        ))
    );

    return <div>
        {getUsersList()}
    </div>
};