import {User} from '../../classes/User';

export interface UsersListProps {
    usersList: User[],
    userRemovalHandler: (userToRemove: User) => void,
    sortByNicknameHandler: () => void,
    sortByEmailHandler: () => void,
}