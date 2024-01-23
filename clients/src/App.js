import React from 'react';
import Register  from './Pages/NewRegister'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import { AuthProvider } from './Pages/Context';
import NewRegister from './Pages/NewRegister';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/register' element={<Register/>} />
            {/* <Route path='/success' Component={SuccessPage} /> */}
            <Route path='/login' element={<Login/>} />
            <Route path='/newregister' element={<NewRegister/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
