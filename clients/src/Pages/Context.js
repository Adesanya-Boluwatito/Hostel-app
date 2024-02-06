import React, { createContext } from "react"

const AuthContext = createContext();

class AuthProvider extends React.Component {
    state = {
        isLoggedIn: true,
    }
    login = () => {
        this.setState({ isLoggedIn: true })
    }
    logout = () => {
        this.setState({ isLoggedIn: false })
    }
    render() {
        const { children } = this.props;
        const { isLoggedIn } = this.state;
        const contextValue = {
            isLoggedIn,
            login: this.login,
            logout: this.logout
        }
        return (
            <div>
                <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
            </div>)
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer }