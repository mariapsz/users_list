import {User} from '../../classes/User';

export interface UserDataFormProps {
    usersList: User[];
    handler: (user: User) => void;
}
