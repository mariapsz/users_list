import {IDeleteButtonProps} from './IDeleteButtonProps';
import * as React from 'react';
import confirm from '../ConfirmationDialog/confirm';
import {DeleteBtn} from './DeleteButtonStyles';

export const DeleteButton = (props: IDeleteButtonProps) => {

    const removeUser = () => {
        confirm(`Are you sure? User ${props.user.nickName} will be removed.`).then(
            () => {
                props.userRemovalHandler(props.user);
            },
            () => {}
        )
    };

    return (<DeleteBtn onClick={removeUser}>
                &#10006;
    </DeleteBtn>
    )
};