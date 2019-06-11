import * as React from 'react';
import {UsersListProps} from './UsersListProps';
import {DeleteButton} from '../DeleteButton/DeleteButton';
import confirm from '../ConfirmationDialog/confirm';
import {ListCell, ListHeader, ListRow, ListWrapper} from './UsersListStyles';


export const UsersList = (props: UsersListProps) => {

    const getUsersList = (): JSX.Element[] => (
        props.usersList.map((user, i) => (
            <ListRow key={i}>
                <ListCell>
                    {user.nickName}
                </ListCell>
                <ListCell>
                    {user.email}
                </ListCell>
                <ListCell>
                    {user.IPAdress}
                    <DeleteButton
                        user={user}
                        userRemovalHandler={props.userRemovalHandler}
                    />
                </ListCell>
            </ListRow>
        ))
    );

    const removeEntireList = (): void => {
        confirm(`Are you sure? Entire list will be removed.`).then(
            () => {
                props.entireListRemovalHandler();
            },
            () => {
            }
        )
    };


    return <div>
        <ListWrapper>
            <ListHeader>
                <ListCell>
                    Nickname
                </ListCell>
                <ListCell>
                    Email
                </ListCell>
                <ListCell>
                    IP adress
                </ListCell>
            </ListHeader>
            {getUsersList()}
        </ListWrapper>
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