import * as React from 'react';
import {UserDataFormProps} from './UserDataFormProps';
import {User} from '../../classes/User';
import {UserDataFormState} from './UserDataFormState';
import './UserDataForm.css';
export class UserDataForm extends React.Component<UserDataFormProps, UserDataFormState> {

    constructor(props: UserDataFormProps) {
        super(props);
        this.state = {
            user: new User('', '', ''),
            isDisabled: true,
        };
    }

    handleChange = (e: any) => {

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

                if (!e.target.validity.valid) {
                    let errorMessage;
                    if (e.target.value === '')
                        errorMessage = '';
                    else errorMessage = 'Wrong email adress format';
                    this.setState({
                        email_errorMessage: errorMessage,
                    })
                } else {
                    this.setState({
                        email_errorMessage: undefined,
                    })
                }
                break;
            case 'IPAdress':
                this.setState({
                    user: {
                        ...this.state.user,
                        IPAdress: e.target.value,
                    }
                });

                if (!e.target.validity.valid) {
                    let errorMessage;
                    if (e.target.value === '')
                        errorMessage = '';
                    else errorMessage = 'Wrong IP adress format';
                    this.setState({
                        IPAdress_errorMessage: errorMessage,
                    })
                } else {
                    this.setState({
                        IPAdress_errorMessage: undefined,
                    })
                }
                break;
        }
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (this.state.user) {
            this.props.handler(this.state.user);
        }
        console.log(e);
    };

    handleInvalid = (e: any) => {

        e.preventDefault();
    };

    handleFormState = (e: any) => {
        this.setState({
            isDisabled:  !e.currentTarget.reportValidity(),
        })
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit} onInput={this.handleFormState}>
                <div>
                    <label>nickname</label>
                    <input onInvalid={this.handleInvalid} name='nickname' onChange={this.handleChange} required/>

                </div>
                <div>
                    <label>email</label>
                    <input  onInvalid={this.handleInvalid} name='email' onChange={this.handleChange} required type='email'/>
                    <div>{this.state.email_errorMessage}</div>
                </div>
                <div>
                    <label>IPAdress</label>
                    <input onInvalid={this.handleInvalid} name='IPAdress' onChange={this.handleChange}
                          required pattern='^[0-255].[0-255].[0-255].[0-255]$'/>
                    <div>{this.state.IPAdress_errorMessage}</div>
                </div>
                <input disabled={this.state.isDisabled} type='submit' value='Submit'/>
            </form>
        </div>
    }
};