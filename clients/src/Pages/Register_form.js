import React, { useState } from 'react';
import '../Style/register.css';
import Image from './Images';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const RegisterForm = () => {
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPassword2, setNewPassword2] = useState();
  const [fieldErrors, setFieldErrors] = useState({
    name: ""
  });
  const [fieldErrors2, setFieldErrors2] = useState({ isValid: false, failedRules: [] });
  const [nameClasses, setNameClasses] = useState();
  const [emailClasses, setEmailClasses] = useState();
  const [passwordClasses, setPasswordClasses] = useState();
  const [emailDoesNotExist, setDoesNotEmailExist] = useState();
  const [openThePassword, setOpenPassword] = useState({ openPass: false, inputType: 'password' })
  const [openThePassword2, setOpenPassword2] = useState({ openPass2: false, inputType2: 'password' })
  const [newUserCredentials, setNewUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    setNameClasses('name' in theFieldErrors ? "error" : "none");
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
      const response = await axios.post('http://localhost:5000/register', { "email": email, "name": name, "password": password });
      console.log('Response:', response.data);
      console.log('the response error', response.data);
      // Handle successful response
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setDoesNotEmailExist(true)
      } else {
        console.log('Error:', error);
      }
    }
  }
  const onNameChange = (evt) => {
    setNewName(evt.target.value);
    const fields = { ...newUserCredentials };
    fields[evt.target.name] = evt.target.value;
    setNewUserCredentials(fields);
    console.log(fields);
  }
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
  const onPassword2Change = (evt) => {
    setNewPassword2(evt.target.value);
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
  const openPassword2 = () => {
    setOpenPassword2({ openPass2: true, inputType2: 'text' });
  }
  const closePassword2 = () => {
    setOpenPassword2({ openPass2: false, inputType2: 'password' })
  }

  return (
    <div className="container">
      <div className="register-page">
        <div className='theErrors'>
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
        </div>

        <div className="grad">
          <form onSubmit={onFormSubmit} className="register-form" action="">
            <p>Register</p>
            <div className='theInput'>
              <input
                className={nameClasses}
                placeholder="Name"
                type="text" name="name" id=""
                value={newName}
                onChange={onNameChange}
              />
              <span className='pop'> {fieldErrors.name && (<div>
                {fieldErrors.name}</div>
              )}</span>
            </div>
            <div className='theInput'>
              <input
                className={emailClasses}
                placeholder="Email Address"
                type="text" name="email" id=""
                value={newEmail}
                onChange={onEmailChange}
              />
              <span className='pop'>{emailDoesNotExist && <div>email address already exist</div>}{fieldErrors.email && (<div>
                {fieldErrors.email}</div>
              )}</span>
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
            <div className='theInput'>
              <div className={"inputTag " + passwordClasses}>
                <input
                  placeholder="Re-type Password" name="confirmPassword" id=""
                  value={newPassword2}
                  onChange={onPassword2Change}
                  type={openThePassword2.inputType2}
                />
                {openThePassword2.openPass2 ?
                  (<img src={Image.theeyeopen} alt='open password' onClick={closePassword2} />) :
                  (<img src={Image.theeyeclose} alt='close password' onClick={openPassword2} />)
                }
              </div>
            </div>

            <button type="submit">Register</button>
            <Link className="myLink" to="/login">Already have an account</Link>
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

export default RegisterForm;