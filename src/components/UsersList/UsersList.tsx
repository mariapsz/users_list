import * as React from 'react';
import {UsersListProps} from './UsersListProps';
import {DeleteButton} from '../DeleteButton/DeleteButton';
import confirm from '../ConfirmationDialog/confirm';
import {
    IPAdressListCell, IPAdressWrapper,
    ListCell,
    ListHeader,
    ListHeaderCell,
    ListRow,
    ListWrapper,
    RemoveEntireListButton
} from './UsersListStyles';


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
                <IPAdressListCell>
                    <IPAdressWrapper>
                    {user.IPAdress}
                    </IPAdressWrapper>
                    <DeleteButton
                        user={user}
                        userRemovalHandler={props.userRemovalHandler}
                    />
                </IPAdressListCell>
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
                <ListHeaderCell onClick={props.sortByNicknameHandler}>
                    Nickname
                </ListHeaderCell>
                <ListHeaderCell onClick={props.sortByEmailHandler}>
                    Email
                </ListHeaderCell>
                <ListCell>
                    IP adress
                </ListCell>
            </ListHeader>
            {getUsersList()}
        </ListWrapper>
        <div>
            {props.usersList.length > 0 ? <RemoveEntireListButton onClick={removeEntireList}>Remove entire list</RemoveEntireListButton> : null}
        </div>
    </div>
};