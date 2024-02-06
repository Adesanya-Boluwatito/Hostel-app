import React from 'react'
import { AuthConsumer } from './Context';
import { Link } from 'react-router-dom'
import Images from './Images'
import '../Style/Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className='buy-rent'>
                <div className="iconimg">icon</div>
                <div>Find an Agent</div>
                <div>Buy</div>
                <div>Rent</div>
            </div>
            <AuthConsumer>
                {({ isLoggedIn, login, logout }) => (
                    <div>
                        {isLoggedIn ? (
                            <div className="links link-extends">
                                <div class="">Favourite homes</div>
                                <Link to="/house-posting">Add Property</Link>
                                <Link className='has-submenu' to="/">
                                    <div className="user"><img src={Images.profileavatar} alt="backgroung_imgcd" /><p>profile</p></div>
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
                            <div className='links'>
                                {/* <Link class="">About Us</Link> */}
                                <Link to="/house-posting">Add Property</Link>
                                <Link to="/login" class="">Login</Link>
                                <Link to="/register" class="signup">Sign up </Link>
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