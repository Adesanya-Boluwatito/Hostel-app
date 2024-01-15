import { SuccessPage, Register } from './Pages/Register'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import { AuthProvider } from './Pages/Context';
import NewRegister from './Pages/NewRegister';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/register' Component={Register} />
            <Route path='/success' Component={SuccessPage} />
            <Route path='/login' Component={Login} />
            <Route path='/newregister' Component={NewRegister} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
