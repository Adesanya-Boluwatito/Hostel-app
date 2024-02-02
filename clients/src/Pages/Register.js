import React, { Component } from 'react'
import '../Style/register.css'
import Image from './Images'
import isEmail from 'validator/lib/isEmail'
// import { Validator } from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

class Register extends React.Component {
    state = {
        emailExit: false,
        fieldErrors: {},
        fieldErrors2: { isValid: false, failedRules: [] },
        emailValid: false,
        passwordValid: '',
        openPass: false,
        nameClasses: "",
        emailClasses: "",
        passwordClasses: "",
        inputType: "password",
        inputType2: "password",
        newName: "",
        newEmail: "",
        newPassword: "",
        newPassword2: "",
        newUserCredentials: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        userCredentials: [
            {
                email: 'user1@example.com',
                password: 'password1'
            },
            {
                email: 'user2@example.com',
                password: 'confirmPassword'
            },
        ],
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
        if (Object.keys(fieldErrors).length !== 0 && !fieldErrors2.isValid) return
        this.handleSubmit(this.state.newUserCredentials);
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
        const navigate = useNavigate();
        const { email, name, password } = newUser
        console.log(email, name, password);
        try {
            const response = await axios.post('http://localhost:5000/register', { "email": email, "name": name, "password": password });
            console.log('Response:', response.data);
            console.log('the response error', response.data);
            // Handle successful response
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                this.setState({ emailExit: true })
            } else {
                console.log('Error:', error);
            }
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
        this.setState({ newUserCredentials: fields })
    }
    onPassword2Change = (evt) => {
        this.setState({ newPassword2: evt.target.value })
        const fields = this.state.newUserCredentials
        fields[evt.target.name] = evt.target.value
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
                        <form onSubmit={this.onFormSubmit} className="register-form" action="">
                            <p>Register</p>
                            <div className='theInput'>
                                <input
                                    className={this.state.nameClasses}
                                    placeholder="Name"
                                    type="text" name="name" id=""
                                    value={this.state.newName}
                                    onChange={this.onNameChange}
                                />
                                <span className='pop'> {this.state.fieldErrors.name && (<div>
                                    {this.state.fieldErrors.name}</div>
                                )}</span>
                            </div>
                            <div className='theInput'>
                                <input
                                    className={this.state.emailClasses}
                                    placeholder="Email Address"
                                    type="text" name="email" id=""
                                    value={this.state.newEmail}
                                    onChange={this.onEmailChange}
                                />
                                <span className='pop'>{this.state.emailExit && <div>email address already exist</div>}{this.state.fieldErrors.email && (<div>
                                    {this.state.fieldErrors.email}</div>
                                )}</span>
                            </div>
                            <div className='theInput'>
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
                                <div>
                                    {this.state.fieldErrors.password && (
                                        <div className='pop'>{this.state.fieldErrors.password}</div>
                                    )}
                                </div>
                            </div>
                            <div className='theInput'>
                                <div className={"inputTag " + this.state.passwordClasses}>
                                    <input
                                        placeholder="Re-type Password" name="confirmPassword" id=""
                                        value={this.state.onPassword2Change}
                                        onChange={this.onPassword2Change}
                                        type={this.state.inputType2}
                                    />
                                    {this.state.openPass2 ?
                                        (<img src={Image.theeyeopen} alt='open password' onClick={this.closePassword2} />) :
                                        (<img src={Image.theeyeclose} alt='close password' onClick={this.openPassword2} />)
                                    }
                                </div>
                            </div>

                            <button type="submit">Register</button>
                            <Link className="myLink" to="/login">Don't have an account</Link>
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
}

class SuccessPage extends Component {
    render() {
        return (
            <div>Switch</div>
        )
    }
}

export { Register, SuccessPage };
