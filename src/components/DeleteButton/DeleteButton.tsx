import {IDeleteButtonProps} from './IDeleteButtonProps';
import * as React from 'react';



export const DeleteButton = (props: IDeleteButtonProps) => {

    const removeUser = () => {
        let idx = props.usersList.findIndex( user => user === props.user);
        props.usersList.splice(idx, 1);
        console.log('deleted!', props.usersList)
    };

    return (
        <div>
            <button onClick={removeUser}/>
        </div>
    )
};