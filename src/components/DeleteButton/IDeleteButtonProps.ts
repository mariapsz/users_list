import {User} from '../../classes/User';

export interface IDeleteButtonProps {
    user: User,
    userRemovalHandler: (userToRemove: User) => void,
}