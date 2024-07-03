import React from 'react'
import myImages from './Images'
import Nav from './Nav';
import '../Style/DetailsPage.css'
import Slider from "react-slick";
import Footer from './Footer';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", fontsize: "300px" }}
            onClick={onClick}
        />
    );
}


const DetailsPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true,
    };
    return (
        <div className='DetailsPage'>
            <Nav />
            <div className='back-to'><img src={myImages.backArrow} alt='back' /><p>Back to Search Results</p></div>
            <div className='prop-images'>
                <Slider {...settings}>
                    <div className='houseimage'>
                        <img src={myImages.houseone} alt='img of house' />
                    </div>
                    <div className='houseimage'>
                        <img src={myImages.housesix} alt='img of house' />
                    </div>
                    <div className='houseimage'>
                        <img src={myImages.houseseven} alt='img of house' />
                    </div>
                </Slider>
                <div className='all-photos'>All Photos 7+</div>
            </div>

            <div className='house_details'>
                <div className='house_info'>
                    <div className='house_heading'>4 Bedroom Terrace Duplex for Sale</div>
                    <div className='house_no'>RNT21445</div>
                    <div className='house_location'>Lekki Phase 1, Lagos</div>
                    <div className='house-rooms'>
                        <div className='the-rooms'><img src={myImages.bedroomIcon2} alt='bedrooms' /><div>4 Bedrooms</div></div>
                        <div className='the-rooms'><img src={myImages.bathroomIcon2} alt='bathrooms' /><div>4 Bathrooms</div></div>
                        <div className='the-rooms'><img src={myImages.serviceIcon} alt='services' /><div>Serviced</div></div>
                    </div>
                    <div className='house_overview'>
                        <div>
                            <div className='overview_heading'>OVERVIEW</div>
                            <div className=''>4 Bedroom Terrace Duplex for Rent</div>
                        </div>
                        <img src={myImages.arrowDownIcon} alt='arrow down' />

                    </div>
                    <div className='house_sub_overview' >
                        <div className=''>
                            <div className='sub_overview_heading'>PROPERTY TYPE</div>
                            <div>Terraces/Terrace Duplex</div>
                        </div>
                        <div className=''>
                            <div className='sub_overview_heading'>INTERIOR</div>
                            <div>Not Furnished</div>
                        </div>
                        <div className=''>
                            <div className='sub_overview_heading'>LEASE PLANS</div>
                            <div>12-MONTH</div>
                        </div>
                        <div className=''>
                            <div className='sub_overview_heading'>AVAILABLE PAYMENT PLANS</div>
                            <div>Yearly</div>
                        </div>
                    </div>
                    <div className='house_features'>
                        <div className='feature_head'>
                            <div>
                                <div className='features_headings'>FEATURES</div>
                                <div className=''>These are the basic amenities you enjoy as a home owner.</div>
                            </div>
                            <img src={myImages.arrowDownIcon} alt='arrow down' />
                        </div>
                        <div className='feature_item'>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Wardrope</div>
                            </div>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Walk-in-closet</div>
                            </div>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Kitchen Cabinet</div>
                            </div>
                        </div>
                    </div>
                    <div className='house_services'>
                        <div className=''>
                            <div className='services_head'><p>SERVICES</p><img src={myImages.arrowDownIcon} alt='arrowdown' /></div>
                        </div>
                        <div className='service_item'>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Electricity</div>
                            </div>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Facilities Management</div>
                            </div>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Security Services</div>
                            </div>
                        </div>
                    </div>
                    <div className='house_outdoor'>
                        <div className='house_head'>
                            <div className='outdoor_heading'>RECREATION OUTDOOR SPACE</div>
                            <img src={myImages.arrowDownIcon} alt='arrowdown' />
                        </div>
                        <div className='outdoor_item'>
                            <img src={myImages.markIcon} alt='arrowdown' /><div>Rest-out</div>
                        </div>
                    </div>
                    <div className='house_access'>
                        <div className='house_head'>
                            <div className='outdoor_heading'>ACCESSIBILTY</div>
                            <img src={myImages.arrowDownIcon} alt='arrowdown' />
                        </div>
                        <div className='access_item'>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Access to major landmarks</div>
                            </div>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Access to public transportation</div>
                            </div>
                            <div>
                                <img src={myImages.markIcon} alt='.' /><div>Front and back door leading to the apartment</div>
                            </div>
                        </div>
                    </div>
                    <div className='house_inspection'>
                        <div className='house_head'>
                            <div className='outdoor_heading'>TOUR AVAILABILITY</div>
                            <img src={myImages.arrowDownIcon} alt='arrowdown' />
                        </div>
                        <div className='inspection_time'>
                            <div className='time'>Sunday: 09:00 am - 06:00 pm</div>
                            <div className='time'>Monday: 09:00 am - 06:00 pm</div>
                            <div className='time'>Tuesday: 09:00 am - 06:00 pm</div>
                            <div className='time'>Wednesday: 09:00 am - 06:00 pm</div>
                            <div className='time'>Thursday: 09:00 am - 06:00 pm</div>
                            <div className='time'>Friday: 09:00 am - 06:00 pm</div>
                        </div>
                    </div>
                </div>
                <div className='house_pricing'>

                    <div className='amount-text'>AMOUNT</div>
                    <div className='amount-price'>N500,000,000.00 <span>yearly</span></div>
                    <div className='match-text'>PREFERNCE MATCH</div>
                    <div className='match-no'><div>0</div><span>match</span></div>
                    <div className='match-result'>Not a good match!   Don’t give up yet. You’ll find
                        something that suits you. Keep searching</div>
                    <div className='contact-agent'>Contact Agent</div>
                    <div className='shedule-call'>Schedule a Tour</div>
                </div>
            </div>

            <div className='location_map'>
                <div className='map_heading'>Explore the Neighbourhood</div>
                <div className='map'></div>
            </div>

            <div className='similar_house'>
                <div className='similar_heading'>Similar Homes like this</div>
                <div className='similar_home'>
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
                            <div className='saveicon saved'>
                                <img src={myImages.saveIcon} alt='save' />
                            </div>
                            <div className='payment-type'>For Sale</div>
                        </div>
                        <div className='house-info'>
                            <div className='price-rating'>
                                <div className='price'>N500,000,0000</div>
                                <div className='ratings'>
                                    <img src={myImages.subMenuIcon} alt='sub menu' />

                                </div>
                            </div>
                            <div className='housing-info'>4 bed - 4 baths -  Private Apartment</div>
                            <div className='house-address'>4 Admiralty Way, Lekki Phase 1, Lagos</div>
                        </div>
                    </div>
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
                            <div className='saveicon saved'>
                                <img src={myImages.saveIcon} alt='save' />
                            </div>
                            <div className='payment-type'>For Sale</div>
                        </div>
                        <div className='house-info'>
                            <div className='price-rating'>
                                <div className='price'>N500,000,0000</div>
                                <div className='ratings'>
                                    <img src={myImages.subMenuIcon} alt='sub menu' />

                                </div>
                            </div>
                            <div className='housing-info'>4 bed - 4 baths -  Private Apartment</div>
                            <div className='house-address'>4 Admiralty Way, Lekki Phase 1, Lagos</div>
                        </div>
                    </div>
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
                            <div className='saveicon saved'>
                                <img src={myImages.saveIcon} alt='save' />
                            </div>
                            <div className='payment-type'>For Sale</div>
                        </div>
                        <div className='house-info'>
                            <div className='price-rating'>
                                <div className='price'>N500,000,0000</div>
                                <div className='ratings'>
                                    <img src={myImages.subMenuIcon} alt='sub menu' />

                                </div>
                            </div>
                            <div className='housing-info'>4 bed - 4 baths -  Private Apartment</div>
                            <div className='house-address'>4 Admiralty Way, Lekki Phase 1, Lagos</div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div >
    )
}

export default DetailsPage;