import {User} from '../../classes/User';

export interface UserDataFormProps {
    usersList: User[];
    handler: (userToAdd: User) => string;
}
