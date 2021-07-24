import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/forminput.component';
import CustomButton from '../Custom-Button/CustomButton.component';
import {signInWithGoogle} from '../../Firebase/firebase.util';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = event => {
        const {value , name } = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                    handleChange={this.handleChange}
                     name="email" label="Email" value={this.state.email} required />
                    

                    <FormInput type="password" label="Password" handleChange={this.handleChange} name="password" value={this.state.password} required />
                    
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;