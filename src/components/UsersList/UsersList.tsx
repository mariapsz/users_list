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
                        userRemovalHandler={props.userRemovalHandler}
                    />
                </div>
            </div>
        ))
    );

    return <div>
        {getUsersList()}
        <div>
            <button onClick={props.sortByNicknameHandler}>
                Sort by nickname
            </button>
            <button onClick={props.sortByEmailHandler}>
                Sort by email
            </button>
        </div>
    </div>
};