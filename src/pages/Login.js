import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {

    const [signInClick, setSignInClick] = useState(true);

    const signUpChangeBtnClickHandler = () => {
        setSignInClick(false);

    };

    const signInChangeBtnClickHandler = () => {
        setSignInClick(true);
    };

    const signInBtnClickHandler = (event) => {
        // event.preventDefault(); 
        
    };

    return (
        <div id='main-container'>
            <div className={signInClick ? 'container ' : 'container right-panel-active'} id="container">
                <div className="form-container sign-up-container">
                    <form action="http://localhost:3000/login">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="http://localhost:3000/login" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="http://localhost:3000/login" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="http://localhost:3000/login" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="http://localhost:3000/Home" onSubmit={signInBtnClickHandler}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="http://localhost:3000/login" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="http://localhost:3000/login" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="http://localhost:3000/login" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <a href="http://localhost:3000/login">Forgot your password?</a>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={signInChangeBtnClickHandler}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={signUpChangeBtnClickHandler}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
