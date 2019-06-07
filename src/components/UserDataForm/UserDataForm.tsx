import * as React from 'react';
import {UserDataFormProps} from './UserDataFormProps';
import {User} from '../../Types/User';
import {UserDataFormState} from './UserDataFormState';


export class UserDataForm extends React.Component<UserDataFormProps, UserDataFormState> {

    constructor(props: UserDataFormProps) {
        super(props);
        this.state = {};
    }

    handleChange = (e: any) => {
        let user: User = {
            nickName: '234',
            email: 'sd',
            IPAddress: 'asds',
        };

        this.setState({
            user,
        })
    };

    handleSubmit = (e: any) => {
        console.log(e);

        if (this.state.user) {
            this.props.handler(this.state.user);
        }
    };

    getFormRows = (): JSX.Element[] => {
        return this.props.userDataInfoParameters.map((param, i) => {
            return <div key={i}>
                <label>{param.parameterName}</label>
                <input onChange={this.handleChange}/>
            </div>;
        });
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                {this.getFormRows()}
                <input type='submit' value='Submit'/>
            </form>
        </div>
    }
};