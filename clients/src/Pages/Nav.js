import React from 'react'
import { AuthConsumer } from './Context';
import { Link } from 'react-router-dom'
import Images from './Images'
import '../Style/Nav.css';

const Nav = () => {
    return (
        <nav style={{ fontFamily: 'Averta Demo, sans-serif' }}>
            <div className='buy-rent'>
                <div className="iconimg" style={{ fontFamily: 'Averta Demo, sans-serif' }}>HomeList
                    {/* <span></span> */}
                </div>
            </div>
            <AuthConsumer>
                {({ isLoggedIn = true, login, logout }) => (
                    <div>
                        {isLoggedIn ? (
                            <div className="links link-extends">
                                <div className="">Home</div>
                                <Link to="/house-posting">About</Link>
                                <Link to="/house-posting">List a home</Link>
                                <Link className='has-submenu' to="/">
                                    <div className="user"><img src={Images.profileavatar} alt="backgroung_imgcd" /></div>
                                    <ul>
                                        <li><a href="/1">Profile</a></li>
                                        <li><a href="/2">Saved Home</a></li>
                                        <li><a href="3">Become a Realtor</a></li>
                                        <li><a href="/4">eCommerce</a></li>
                                        <li><a href="/5">Sign Out </a></li>
                                    </ul>
                                </Link>
                                <div></div>
                            </div>
                        ) : (
                            <div className='links sidenav'>
                                {/* <Link class="">About Us</Link> */}
                                <Link to="">Home</Link>
                                <Link to="">About</Link>
                                <Link to="/house-posting">List a home</Link>
                                <Link to="/login" className="">Login</Link>
                                <Link to="/register" className="signup">Sign up </Link>
                            </div>
                        )}
                    </div>
                )}
            </AuthConsumer>
            {/* <div className='pop-up1'>
                <ul>
                    <li><a href="/1">Branding</a></li>
                    <li><a href="/2">Web Design</a></li>
                    <li><a href="3">Web Development</a></li>
                    <li><a href="/4">eCommerce</a></li>
                    <li><a href="/5">Print</a></li>
                </ul>
            </div> */}
        </nav>)
}

export default Nav;