import {UserDataInfoParameter} from '../../Types/UserDataInfoParameter';
import {User} from '../../Types/User';

export interface UserDataFormProps {
    userDataInfoParameters: UserDataInfoParameter[];
    usersList: User[];
    handler: (user: User) => void;
}
