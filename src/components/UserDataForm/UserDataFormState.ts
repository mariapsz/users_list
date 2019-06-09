import {User} from '../../classes/User';

export interface UserDataFormState {
    user: User;
    email_errorMessage?: string;
    IPAdress_errorMessage?: string;
    isDisabled: boolean;
}