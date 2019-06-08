import * as React from 'react';
import {UserDataFormProps} from './UserDataFormProps';
import {User} from '../../classes/User';
import {UserDataFormState} from './UserDataFormState';


export class UserDataForm extends React.Component<UserDataFormProps, UserDataFormState> {

    constructor(props: UserDataFormProps) {
        super(props);
        this.state = {user: new User('', '', '')};
    }

    handleChange = (e: any) => {
        console.log('e.target.value: ', e.target.value);
        switch (e.target.name) {
            case 'nickname':
                this.setState({
                    user: {
                        ...this.state.user,
                        nickName: e.target.value,
                    }
                });
                break;
            case 'email':
                this.setState({
                    user: {
                        ...this.state.user,
                        email: e.target.value,
                    }
                });
                break;
            case 'IPAddress':
                this.setState({
                    user: {
                        ...this.state.user,
                        IPAddress: e.target.value,
                    }
                });
                break;
        }
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (this.state.user) {
            this.props.handler(this.state.user);
        }
    };


    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>nickname</label>
                    <input name='nickname' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>email</label>
                    <input name='email' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>IPAddress</label>
                    <input name='IPAddress' onChange={this.handleChange}/>
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    }
};