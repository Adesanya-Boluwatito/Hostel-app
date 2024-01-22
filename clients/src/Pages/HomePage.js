import React from 'react'
import '../Style/HomePage.css'
import Images from './Images'
import { AuthConsumer } from './Context'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div class="homePage">
                    <nav>
                        <div className='buy-rent'>
                            <div className="iconimg">icon</div>
                            <div>Buy</div>
                            <div>Rent</div>
                        </div>
                        <AuthConsumer>
                            {({ isLoggedIn, login, logout }) => (
                                <div>
                                    {isLoggedIn ? (
                                        <div className="links link-extends">
                                            <div class="">Favourite homes</div>
                                            <Link>Add Property</Link>
                                            <Link to="/">
                                                <div className="user"><img src={Images.profileavatar} alt="backgroung_imgcd" /><p>profile</p></div>
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className='links'>
                                            {/* <Link class="">About Us</Link> */}
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
            </div>
        )
    }
}

export default HomePage
