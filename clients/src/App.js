import React from 'react';
// import Register  from './Pages/NewRegister'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import { AuthProvider } from './Pages/Context';
import RegisterForm from './Pages/Register_form';
import PostHouse from './Pages/PostHouse';
import Search from './Pages/Search';
import DetailsPage from './Pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/register' Component={RegisterForm} />
            <Route path='/search' Component={Search} />
            {/* <Route path='/success' Component={SuccessPage} /> */}
            <Route path='/login' Component={Login} />
            <Route path='/formregister' Component={RegisterForm} />
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/house-posting' element={<PostHouse />} />
            <Route path='/DetailsPage' element={<DetailsPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
