import React, { Component } from 'react';

class PasswordForm extends Component {
  state = {
    password: '',
    confirmPassword: '',
    fieldErrors: {}
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;
    const fieldErrors = this.validatePassword(password, this.state.confirmPassword);
    this.setState({ password, fieldErrors });
  };

  handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    const fieldErrors = this.validatePassword(this.state.password, confirmPassword);
    this.setState({ confirmPassword, fieldErrors });
  };

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

  handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const fieldErrors = this.validatePassword(password, confirmPassword);
    this.setState({ fieldErrors });
    // Perform further actions on form submission if needed
  };

  render() {
    const { password, confirmPassword, fieldErrors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {fieldErrors.failedRules.length > 0 && (
          <div style={{ color: 'red' }}>
            <p>Validation Errors:</p>
            <ul>
              {fieldErrors.failedRules.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    );
  }
}

export default PasswordForm;
