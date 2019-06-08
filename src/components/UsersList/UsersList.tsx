import * as React from 'react';
import {UsersListProps} from './UsersListProps';
import {UsersListState} from './UsersListState';


export class UsersList extends React.Component<UsersListProps, UsersListState> {

    constructor(props: UsersListProps) {
        super(props);
        this.state = {
            usersList: [],
        };
    }

    getUsersList = (): JSX.Element[] => (
      this.props.usersList.map((user, i) => (
          <div key={i}>
              <div>
                  {user.nickName}
              </div>
              <div>
                  {user.email}
              </div>
              <div>
                  {user.IPAddress}
              </div>
          </div>
      ))
    );

    render() {
        return <div>
            {this.getUsersList()}
        </div>
    }
}