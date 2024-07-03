import React, { useState } from 'react';
import '../Style/register.css';
import '../Style/Login.css';
import Image from './Images';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Location.css';

const Login = () => {
    const [newEmail, setNewEmail] = useState();
    // const [loginFeedback, setLoginFeedback] = useState();
    const [newPassword, setNewPassword] = useState();
    // const [emailClasses, setEmailClasses] = useState();
    // const [passwordClasses, setPasswordClasses] = useState();
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
        console.log(newEmail, newPassword);
        handleSubmit({ newEmail, newPassword });
    }


    const handleSubmit = async (theUser) => {
        const user = theUser;
        console.log(theUser);
        console.log(user.newEmail, user.newPassword);
        try {
            const response = await axios.post('http://localhost:5000/login', { "email": user.newEmail, "password": newPassword });

            const data = response.data;
            console.log('Logged in user:', user);
            if (data.success) {
                console.log('Login sucessful');
                // Redirect to another page
                navigate('/');
            } else {
                console.error('Login failed:', data.message);
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
                                // className={emailClasses}
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
                            <div
                            // className={"inputTag " + passwordClasses}
                            className={"inputTag"}
                            >
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
                            {/* <div>
                                {fieldErrors.password && (
                                    <div className='pop'>{fieldErrors.password}</div>
                                )}
                            </div> */}
                        </div>
                        <button type="submit">Login</button>
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