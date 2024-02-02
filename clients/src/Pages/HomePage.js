import React from 'react'
import Images from './Images'
import { AuthConsumer } from './Context'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Location from './Location'
import '../Style/HomePage.css'
import Popular from './Popular';
import Featured from './Feature';

const HomePage = () => {
    return (
        <div>
            <div class="homePage">
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
                                        <Link to="/">
                                            <div className="user"><img src={Images.profileavatar} alt="backgroung_imgcd" /><p>profile</p></div>
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
                </nav>
                <div className="homePageIntro"></div>
                <div className="homePageText">
                    <div className="homePageText1">Find a home in a neighborhood you love</div>
                    <div>Helping client find their Perfect fit</div>
                    <div className="search-box">
                        <input className="search-input" type="text" placeholder="Find a Home" />
                        <button className="search">Search</button>
                    </div>
                </div>
                <div className="homePageImage">
                    <img className="homePageImage2" src={Images.maskgroup3} alt="backgroung_img1" />
                </div>
            </div>
            <div className='houseHead'>Explore Cities</div>
            <div className='houseSubHead'>Find Your Neighborhood</div>
            <Location />
            <Popular />
            <Featured />
        </div>

    )
}


export default HomePage
