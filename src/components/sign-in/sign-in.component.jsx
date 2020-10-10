import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomBUtton from './../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:'' })
    }


    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I laready have an Account </h2>
                <span> Sign with your email and passwortd </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='Email' type='email' label='email' handleChange={this.handleChange} value={this.state.email}  required/>
                    <FormInput name='Password' type='password' label='password' handleChange={this.handleChange} value={this.state.password}  required/>
                    <CustomBUtton type='submit'> Sign In </CustomBUtton>
                </form>
            </div>
        )
    }
}

export default SignIn;