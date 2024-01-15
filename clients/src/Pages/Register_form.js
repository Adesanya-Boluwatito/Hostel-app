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
    );
  }
}

export default PasswordForm;
