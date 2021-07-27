import React from 'react';
import './Sign-In-Sign-Up.styles.scss';
import SignIn from '../../Sign-In/signIn.component';
import SignUp from '../../Sign-Up/signup.component';

const SignInSignUp = () =>
(
    <div className="sign-in-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignUp;