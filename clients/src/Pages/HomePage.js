import React from 'react'
// import Images from './Images'
// import { AuthConsumer } from './Context'
// import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Location from './Location'
import '../Style/HomePage.css'
import Popular from './Popular';
import Featured from './Feature';
import Nav from './Nav';

const HomePage = () => {
    return (
        <div>
            <div class="homePage">
                <Nav />
                <div className="homePageText">
                    <div className="homePageText1">Find a home in a neighborhood you love</div>
                    <div>Helping client find their Perfect fit</div>
                    <div className="search-box">
                        <input className="search-input" type="text" placeholder="Find a Home" />
                        <button className="search">Search</button>
                    </div>
                </div>
                {/* <div className="homePageImage">
                        <img className="homePageImage2" src={Images.maskgroup3} alt="backgroung_img1" />
                    </div> */}
                <div className="homeImage">
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
