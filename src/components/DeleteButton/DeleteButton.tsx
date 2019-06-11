import {IDeleteButtonProps} from './IDeleteButtonProps';
import * as React from 'react';
import confirm from '../ConfirmationDialog/confirm';

export const DeleteButton = (props: IDeleteButtonProps) => {



    const removeUser = () => {
        confirm('Are you sure?').then(
            (result) => {
                // `proceed` callback
                props.userRemovalHandler(props.user);
                console.log('proceed called');
                console.log(result);
            },
            (result) => {
                // `cancel` callback
                console.log('cancel called');
                console.log(result)
            }
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