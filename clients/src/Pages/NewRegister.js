import React, { useState } from 'react';
import '../Style/register.css';
import Image from './Images';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [emailExit, setEmailExit] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});
    const [fieldErrors2, setFieldErrors2] = useState({ isValid: false, failedRules: [] });
    const [nameClasses, setNameClasses] = useState('');
    const [emailClasses, setEmailClasses] = useState('');
    const [passwordClasses, setPasswordClasses] = useState('');
    const [inputType, setInputType] = useState('password');
    const [inputType2, setInputType2] = useState('password');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPassword2, setNewPassword2] = useState('');

    const navigate = useNavigate();

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const { password, confirmPassword } = { name: newName, email: newEmail, password: newPassword, confirmPassword: newPassword2 };
        const person = { name: newName, email: newEmail, password: newPassword, confirmPassword: newPassword2 };
        const errors = validate(person);
        const passwordValidation = validatePassword(password, confirmPassword);
        setFieldErrors2(passwordValidation);
        setFieldErrors(errors);
        setNameClasses(errors.name ? 'error' : 'none');
        setEmailClasses(errors.email ? 'error' : 'noerror');
        setPasswordClasses(passwordValidation.isValid ? 'noerror' : 'error');

        if (Object.keys(errors).length !== 0 && !passwordValidation.isValid) return;

        try {
            const response = await axios.post('http://localhost:5000/register', { email: newEmail, name: newName, password: newPassword });
            console.log('Response:', response.data);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setEmailExit(true);
            } else {
                console.log('Error:', error);
            }
        }
    };

    const validate = (person) => {
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
            passwordsMatch: password === confirmPassword,
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
            failedRules: failedRules,
        };
    };

    const onNameChange = (evt) => {
        setNewName(evt.target.value);
    };

    const onEmailChange = (evt) => {
        setNewEmail(evt.target.value);
    };

    const onPasswordChange = (evt) => {
        setNewPassword(evt.target.value);
    };

    const onPassword2Change = (evt) => {
        setNewPassword2(evt.target.value);
    };

    const openPassword = () => {
        setInputType('text');
    };

    const closePassword = () => {
        setInputType('password');
    };

    const openPassword2 = () => {
        setInputType2('text');
    };

    const closePassword2 = () => {
        setInputType2('password');
    };

    return (
        <div className="container">
            <div className="register-page">
                <div className="theErrors">
                    {fieldErrors2.failedRules.length > 0 && (
                        <div className="theErrors">
                            <img src={Image.errorIcon} alt="cancel" />
                            <div>
                                <ul>
                                    {fieldErrors2.failedRules.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                            <img src={Image.cancelIcon} alt="cancel" />
                        </div>
                    )}
                </div>

            </div>
        </div>
    )  