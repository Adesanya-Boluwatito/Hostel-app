import React from 'react'
import '../Style/register.css'
import '../Style/Login.css'
import Image from './Images'
import isEmail from 'validator/lib/isEmail'
import axios from 'axios'
import { Link } from 'react-router-dom'



class Login extends React.Component {
    state = {
        fieldErrors: {},
        fieldErrors2: { isValid: false, failedRules: [] },
        emailValid: false,
        passwordValid: '',
        openPass: false,
        emailClasses: "",
        passwordClasses: "",
        inputType: "password",
        newEmail: "",
        newPassword: "",
        newUserCredentials: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const { password, confirmPassword } = this.state.newUserCredentials;
        const person = this.state.newUserCredentials;
        const fieldErrors = this.validate(person);
        const fieldErrors2 = this.validatePassword(password, confirmPassword);
        this.setState({ fieldErrors2 });
        this.setState({ fieldErrors });
        this.setState({ nameClasses: 'name' in fieldErrors ? "error" : "none" });
        this.setState({ emailClasses: 'email' in fieldErrors ? "error" : "noerror" });
        this.setState({ passwordClasses: fieldErrors2.isValid ? "noerror" : "error" });
        if (!Object.keys(fieldErrors).length === 0 && !fieldErrors2.isValid) {
            console.log("it is not valid");
            return
        }
        // this.handleSubmit(this.state.newUserCredentials);
    }

    validate = person => {
        const errors = {};
        if (!person.email) errors.email = 'Email Required';
        if (!person.password) errors.password = 'password Required';
        if (!person.name) errors.name = 'Name Required';
        if (!person.confirmPassword) errors.confirmPassword = 'this password field is Required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        return errors;
    };
    handleSubmit = async (newUser) => {
        const { email, name, password } = newUser
        console.log(email, name, password);
        try {
            const response = await axios.post('http://localhost:5000/register', { "email": email, "name": name, "password": password });
            console.log('Response:', response.data);
            console.log('the response error', response.data);
            // Handle successful response
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }
    onNameChange = (evt) => {
        this.setState({ newName: evt.target.value })
        const fields = this.state.newUserCredentials
        fields[evt.target.name] = evt.target.value
        this.setState({ newUserCredentials: fields })
    }
    onEmailChange = (evt) => {
        this.setState({ newEmail: evt.target.value })
        const fields = this.state.newUserCredentials
        fields[evt.target.name] = evt.target.value
        this.setState({ newUserCredentials: fields })
    }
    onPasswordChange = (evt) => {
        this.setState({ newPassword: evt.target.value })
        const fields = this.state.newUserCredentials
        fields[evt.target.name] = evt.target.value
        // console.log(fields);
        this.setState({ newUserCredentials: fields })
    }
    onPassword2Change = (evt) => {
        this.setState({ newPassword2: evt.target.value })
        const fields = this.state.newUserCredentials
        fields[evt.target.name] = evt.target.value
        // console.log(fields);
        this.setState({ newUserCredentials: fields })

    }
    openPassword = () => {
        this.setState({ openPass: true, inputType: 'text' });
    }
    closePassword = () => {
        this.setState({ openPass: false, inputType: 'password' })
    }
    openPassword2 = () => {
        this.setState({ openPass2: true, inputType2: 'text' });
    }
    closePassword2 = () => {
        this.setState({ openPass2: false, inputType2: 'password' })
    }

    validatePassword = (password, confirmPassword) => {
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


    // console.log(this.state.newUserCredentials);
    render() {
        return (
            <div className="container">
                <div className="register-page">
                    <div className='theErrors'>
                        {this.state.fieldErrors2.failedRules.length > 0 && (
                            <div className='theErrors'>
                                <img src={Image.errorIcon} alt='cancel' />
                                <div>
                                    <ul>
                                        {this.state.fieldErrors.email && (
                                            <li>{this.state.fieldErrors.email}</li>
                                        )}
                                        {this.state.fieldErrors.password && (
                                            <li>{this.state.fieldErrors.password}</li>
                                        )}
                                        {this.state.fieldErrors2.failedRules.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                                <img src={Image.cancelIcon} alt='cancel' />
                            </div>
                        )}
                    </div>

                    <div className="grad">
                        <form onSubmit={this.onFormSubmit} className="register-form login-form" action="">
                            <p>Login</p>
                            <input
                                className={this.state.emailClasses}
                                placeholder="Email Address"
                                type="text" name="email" id=""
                                value={this.state.newEmail}
                                onChange={this.onEmailChange}
                            />
                            <div className={"inputTag " + this.state.passwordClasses}>
                                <input placeholder='Password'
                                    className={this.state.border}
                                    value={this.state.newPassword}
                                    onChange={this.onPasswordChange}
                                    type={this.state.inputType}
                                    name="password"
                                />
                                {this.state.openPass ?
                                    (<img src={Image.theeyeopen} alt='open password' onClick={this.closePassword} />) :
                                    (<img src={Image.theeyeclose} alt='close password' onClick={this.openPassword} />)
                                }
                            </div>
                            <button type="submit">Register</button>
                            <Link className="myLink" to="/Register">Don't have an account</Link>
                        </form>
                        <div className="media">
                            <p>Or Log in with</p>
                            <img className="withgoogle1" src={Image.googleIconImg} alt="" />
                        </div>
                    </div>
                <Link to="/" className="iconimg main-icon">icon</Link>
                </div>
            </div>
        )
    }
}

export default Login;
