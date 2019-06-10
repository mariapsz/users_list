import {IDeleteButtonProps} from './IDeleteButtonProps';
import * as React from 'react';


export const DeleteButton = (props: IDeleteButtonProps) => {


    return (
        <div>
            <button onClick={() => props.userRemovalHandler(props.user)}>
                Remove user
            </button>
        </div>
    )
};