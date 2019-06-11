import * as React from 'react';
import {UsersListProps} from './UsersListProps';
import {DeleteButton} from '../DeleteButton/DeleteButton';
import confirm from '../ConfirmationDialog/confirm';


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

    const removeEntireList = (): void => {
        confirm(`Are you sure? Entire list will be removed.`).then(
            () => {
                props.entireListRemovalHandler();
            },
            () => {}
        )
    };


    return <div>
        {getUsersList()}
        <div>
            <button onClick={props.sortByNicknameHandler}>
                Sort by nickname
            </button>
            <button onClick={props.sortByEmailHandler}>
                Sort by email
            </button>
            {props.usersList.length > 0 ? <button onClick={removeEntireList}>Remove entire list</button> : null}
        </div>
    </div>
};