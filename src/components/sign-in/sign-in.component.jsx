import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomBUtton from './../custom-button/custom-button.component';
import {auth, signInWithGoogle} from  './../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:'' })
        } catch (error) {
            console.log(error);
        }

    };


    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };

    render() {
        return (
            <div className='sign-in'>
                <h2> I laready have an Account </h2>
                <span> Sign with your email and passwortd </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email}  required/>
                    <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={this.state.password}  required/>
                    <div className='buttons'>
                        <CustomBUtton type='submit'> Sign In </CustomBUtton>
                        <CustomBUtton type='button' onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomBUtton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;