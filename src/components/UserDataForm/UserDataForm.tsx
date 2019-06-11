import * as React from 'react';
import {UserDataFormProps} from './UserDataFormProps';
import {User} from '../../classes/User';
import {UserDataFormState} from './UserDataFormState';
import {
    FormWrapper,
    FormRow,
    RowLabel,
    Input,
    Form,
    RowWrapper,
    InputWrapper,
    SubmitButton, ErrorMessage, ErrorMessageWrapper
} from './UserDataFormStyles';

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
                    this.setState({
                        email_errorMessage: e.target.value === '' ? '' : 'Wrong email adress format',
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
                    this.setState({
                        IPAdress_errorMessage: e.target.value === '' ? '' : 'Wrong IP adress format',
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
        this.setState({onSubmitErrorMessage: this.props.handler(this.state.user)}, () => {
            if (this.state.onSubmitErrorMessage === '')
                this.setState({
                    user: new User('', '', ''),
                    isDisabled: true,
                })
        });
    };

    handleInvalid = (e: any) => {
        e.preventDefault();
    };

    handleFormState = (e: any) => {
        this.setState({
            isDisabled: !e.currentTarget.reportValidity(),
        })
    };

    render() {
        return <FormWrapper>
            <Form onSubmit={this.handleSubmit} onInput={this.handleFormState}>
                <RowWrapper>
                    <FormRow>
                        <RowLabel>Nickname</RowLabel>
                        <Input value={this.state.user.nickName} onInvalid={this.handleInvalid} name='nickname'
                               onChange={this.handleChange} required/>
                    </FormRow>
                    <FormRow>
                        <RowLabel>Email</RowLabel>
                        <InputWrapper>
                            <Input value={this.state.user.email} onInvalid={this.handleInvalid} name='email'
                                   onChange={this.handleChange} required
                                   type='email'/>
                            <ErrorMessageWrapper>{this.state.email_errorMessage !== '' && this.state.email_errorMessage != undefined ? <ErrorMessage>{this.state.email_errorMessage}</ErrorMessage> : ''}</ErrorMessageWrapper>
                        </InputWrapper>
                    </FormRow>
                    <FormRow>
                        <RowLabel>IP adress</RowLabel>
                        <InputWrapper>
                            <Input value={this.state.user.IPAdress} onInvalid={this.handleInvalid} name='IPAdress'
                                   onChange={this.handleChange}
                                   required
                                   pattern='^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'/>
                            <div>{this.state.IPAdress_errorMessage}</div>
                        </InputWrapper>
                    </FormRow>
                </RowWrapper>
                <SubmitButton disabled={this.state.isDisabled} type='submit' value='Add user'/>
            </Form>
            <div>{this.state.onSubmitErrorMessage}</div>
        </FormWrapper>
    }
};