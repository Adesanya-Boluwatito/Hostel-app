import React, { useState } from 'react';
import '../Style/register.css';
import '../Style/Login.css';
import Image from './Images';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Location.css';

const Login = () => {
    const [newEmail, setNewEmail] = useState();
    // const [loginFeedback, setLoginFeedback] = useState();
    const [newPassword, setNewPassword] = useState();
    const [fieldErrors, setFieldErrors] = useState({
        name: ""
    });
    const [fieldErrors2, setFieldErrors2] = useState({ isValid: false, failedRules: [] });
    const [emailClasses, setEmailClasses] = useState();
    const [passwordClasses, setPasswordClasses] = useState();
    // const [emailDoesNotExist, setDoesNotEmailExist] = useState();
    const [openThePassword, setOpenPassword] = useState({ openPass: false, inputType: 'password' })
    const [newUserCredentials, setNewUserCredentials] = useState({
        email: '',
        password: '',
        //add password & password2
    })
    const navigate = useNavigate();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword } = newUserCredentials;
        const person = newUserCredentials;
        const theFieldErrors = validate(person);
        const theFieldErrors2 = validatePassword(password, confirmPassword);
        setFieldErrors2(theFieldErrors2);
        setFieldErrors(theFieldErrors);
        setEmailClasses('email' in theFieldErrors ? "error" : "noerror");
        setPasswordClasses(theFieldErrors2.isValid ? "noerror" : "error");
        console.log(theFieldErrors);
        console.log(theFieldErrors2);
        if (Object.keys(fieldErrors).length !== 0 && !fieldErrors2.isValid) return
        handleSubmit(newUserCredentials);
    }
    const validate = person => {
        const errors = {};
        if (!person.email) errors.email = 'Email Required';
        if (!person.password) errors.password = 'password Required';
        if (!person.name) errors.name = 'Name Required';
        if (!person.confirmPassword) errors.confirmPassword = 'this password field is Required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        return errors;
    };

    const validatePassword = (password, confirmPassword) => {
        const validation = {
            hasMinimumLength: password.length >= 8,
            hasLowercase: /[a-z]/.test(password),
            hasUppercase: /[A-Z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSymbol: /[^\w\s]/.test(password),
            passwordsMatch: password === confirmPassword
        };

        const failedRules = [];

        if (!validation.hasMinimumLength) {
            failedRules.push('Password should have a minimum length of 8 characters.');
        }
        if (!validation.hasLowercase) {
            failedRules.push('Password should contain at least one lowercase letter.');
        }
        if (!validation.hasUppercase) {
            failedRules.push('Password should contain at least one uppercase letter.');
        }
        if (!validation.hasNumber) {
            failedRules.push('Password should contain at least one number.');
        }
        if (!validation.hasSymbol) {
            failedRules.push('Password should contain at least one special character.');
        }
        if (!validation.passwordsMatch) {
            failedRules.push('Passwords do not match.');
        }

        return {
            isValid: failedRules.length === 0,
            failedRules: failedRules
        };
    };
    const handleSubmit = async (newUser) => {
        // const navigate = useNavigate();
        const { email, name, password } = newUser
        console.log(email, name, password);
        try {
            const response = await axios.post('http://localhost:5000/login', { "email": email, "password": password });
            if (response.ok) {
                const user = await response.json();
                console.log('Logged in user:', user);

                // Redirect to another page
                navigate('/dashboard');
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const onEmailChange = (evt) => {
        setNewEmail(evt.target.value);
        const fields = newUserCredentials;
        fields[evt.target.name] = evt.target.value;
        setNewUserCredentials(fields);
    }
    const onPasswordChange = (evt) => {
        setNewPassword(evt.target.value);
        const fields = newUserCredentials;
        fields[evt.target.name] = evt.target.value;
        setNewUserCredentials(fields);

    }


    const openPassword = () => {
        setOpenPassword({ openPass: true, inputType: 'text' });
    }
    const closePassword = () => {
        setOpenPassword({ openPass: false, inputType: 'password' })
    }


    return (
        <div className="container">
            <div className="register-page">
                {/* <div className='theErrors'>
                    {fieldErrors2.failedRules.length > 0 && (
                        <div className='theErrors'>
                            <img src={Image.errorIcon} alt='cancel' />
                            <div>
                                <ul>
                                    {fieldErrors2.failedRules.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                            <img src={Image.cancelIcon} alt='cancel' />
                        </div>
                    )}
                </div> */}

                <div className="grad">
                    <form onSubmit={onFormSubmit} className="register-form login-form" action="">
                        <p>Login</p>
                        <div className='theInput'>
                            <input
                                className={emailClasses}
                                placeholder="Email Address"
                                type="text" name="email" id=""
                                value={newEmail}
                                onChange={onEmailChange}
                            />
                            {/* <span className='pop'>{emailDoesNotExist && <div>email address already exist</div>}{fieldErrors.email && (<div>
                                {fieldErrors.email}</div>
                            )}</span> */}
                            <span className='pop'></span>
                        </div>
                        <div className='theInput'>
                            <div className={"inputTag " + passwordClasses}>
                                <input placeholder='Password'
                                    // className={this.state.border}
                                    value={newPassword}
                                    onChange={onPasswordChange}
                                    type={openThePassword.inputType}
                                    name="password"
                                />
                                {openThePassword.openPass ?
                                    (<img src={Image.theeyeopen} alt='open password' onClick={closePassword} />) :
                                    (<img src={Image.theeyeclose} alt='close password' onClick={openPassword} />)
                                }
                            </div>
                            <div>
                                {fieldErrors.password && (
                                    <div className='pop'>{fieldErrors.password}</div>
                                )}
                            </div>
                        </div>
                        <button type="submit">Register</button>
                        <Link className="myLink" to="/register">Already have an account</Link>
                    </form>
                    <div className="media">
                        <p>Or sign up with</p>
                        <img className="withgoogle1" src={Image.googleIconImg} alt="" />
                    </div>
                </div>
                <Link to="/" className="iconimg main-icon">icon</Link>
            </div>
        </div>
    )
}

export default Login