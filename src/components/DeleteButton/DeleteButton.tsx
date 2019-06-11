import {IDeleteButtonProps} from './IDeleteButtonProps';
import * as React from 'react';
import confirm from '../ConfirmationDialog/confirm';

export const DeleteButton = (props: IDeleteButtonProps) => {

    const removeUser = () => {
        confirm(`Are you sure? User ${props.user.nickName} will be removed.`).then(
            () => {
                props.userRemovalHandler(props.user);
            },
            () => {}
        )
    };

    return (
        <div>
            <button onClick={removeUser}>
                Remove user
            </button>
        </div>
    )
};