import React from 'react'
import myImages from './Images'
import '../Style/Popular.css'
import Slider from "react-slick";
import

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


const Popular = () => {
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
        <div className='popular-section'>
            <div className='houseSubHead'>Popular Properties</div>
            <Slider {...settings}>
                <div className='popular-hostel'>
                    <img src={myImages.hostelImage} alt='img of house' />
                    <div className='house-info'>
                        <div className='price-rating'>
                            <div className='price'>$50,000,0000</div>
                            <div className='ratings'>
                                <span className='rating'>4.7</span>
                                <span className='img-rating'>
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                </span>
                            </div>
                        </div>
                        <div className='house-address'>2nd Avenue, hector Estate, Lagos Island</div>
                        <div className='date-added'>Added: November 5, 2023</div>
                        {/* <div className='discription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</div> */}
                        <div className='house-spec'>
                            <span><img src={myImages.bedroomIcon} alt='' />5bd</span>
                            <span><img src={myImages.bathroomIcon} alt='' />5bh</span>
                        </div>
                    </div>
                    <div className='type-image'>
                        <span className='pics-no'><img src={myImages.cameraIcon} alt='' />07</span>
                        <span className='purpose'>For Sale</span>
                    </div>
                </div>
                <div className='popular-hostel'>
                    <img src={myImages.hostelImage} alt='img of house' />
                    <div className='house-info'>
                        <div className='price-rating'>
                            <div className='price'>$50,000,0000</div>
                            <div className='ratings'>
                                <span className='rating'>4.7</span>
                                <span className='img-rating'>
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                </span>
                            </div>
                        </div>
                        <div className='house-address'>2nd Avenue, hector Estate, Lagos Island</div>
                        <div className='date-added'>Added: November 5, 2023</div>
                        {/* <div className='discription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</div> */}
                        <div className='house-spec'>
                            <span><img src={myImages.bedroomIcon} alt='' />5bd</span>
                            <span><img src={myImages.bathroomIcon} alt='' />5bh</span>
                        </div>
                    </div>
                    <div className='type-image'>
                        <span className='pics-no'><img src={myImages.cameraIcon} alt='' />07</span>
                        <span className='purpose'>For Sale</span>
                    </div>
                </div>
                <div className='popular-hostel'>
                    <img src={myImages.hostelImage} alt='img of house' />
                    <div className='house-info'>
                        <div className='price-rating'>
                            <div className='price'>$50,000,0000</div>
                            <div className='ratings'>
                                <span className='rating'>4.7</span>
                                <span className='img-rating'>
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                </span>
                            </div>
                        </div>
                        <div className='house-address'>2nd Avenue, hector Estate, Lagos Island</div>
                        <div className='date-added'>Added: November 5, 2023</div>
                        {/* <div className='discription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</div> */}
                        <div className='house-spec'>
                            <span><img src={myImages.bedroomIcon} alt='' />5bd</span>
                            <span><img src={myImages.bathroomIcon} alt='' />5bh</span>
                        </div>
                    </div>
                    <div className='type-image'>
                        <span className='pics-no'><img src={myImages.cameraIcon} alt='' />07</span>
                        <span className='purpose'>For Sale</span>
                    </div>
                </div>
                <div className='popular-hostel'>
                    <img src={myImages.hostelImage} alt='img of house' />
                    <div className='house-info'>
                        <div className='price-rating'>
                            <div className='price'>$50,000,0000</div>
                            <div className='ratings'>
                                <span className='rating'>4.7</span>
                                <span className='img-rating'>
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                </span>
                            </div>
                        </div>
                        <div className='house-address'>2nd Avenue, hector Estate, Lagos Island</div>
                        <div className='date-added'>Added: November 5, 2023</div>
                        {/* <div className='discription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</div> */}
                        <div className='house-spec'>
                            <span><img src={myImages.bedroomIcon} alt='' />5bd</span>
                            <span><img src={myImages.bathroomIcon} alt='' />5bh</span>
                        </div>
                    </div>
                    <div className='type-image'>
                        <span className='pics-no'><img src={myImages.cameraIcon} alt='' />07</span>
                        <span className='purpose'>For Sale</span>
                    </div>
                </div>
                <div className='popular-hostel'>
                    <img src={myImages.hostelImage} alt='img of house' />
                    <div className='house-info'>
                        <div className='price-rating'>
                            <div className='price'>$50,000,0000</div>
                            <div className='ratings'>
                                <span className='rating'>4.7</span>
                                <span className='img-rating'>
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                </span>
                            </div>
                        </div>
                        <div className='house-address'>2nd Avenue, hector Estate, Lagos Island</div>
                        <div className='date-added'>Added: November 5, 2023</div>
                        {/* <div className='discription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</div> */}
                        <div className='house-spec'>
                            <span><img src={myImages.bedroomIcon} alt='' />5bd</span>
                            <span><img src={myImages.bathroomIcon} alt='' />5bh</span>
                        </div>
                    </div>
                    <div className='type-image'>
                        <span className='pics-no'><img src={myImages.cameraIcon} alt='' />07</span>
                        <span className='purpose'>For Sale</span>
                    </div>
                </div>
                <div className='popular-hostel'>
                    <img src={myImages.hostelImage} alt='img of house' />
                    <div className='house-info'>
                        <div className='price-rating'>
                            <div className='price'>$50,000,0000</div>
                            <div className='ratings'>
                                <span className='rating'>4.7</span>
                                <span className='img-rating'>
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                    <img src={myImages.starRatings} alt='number of ratings' />
                                </span>
                            </div>
                        </div>
                        <div className='house-address'>2nd Avenue, hector Estate, Lagos Island</div>
                        <div className='date-added'>Added: November 5, 2023</div>
                        {/* <div className='discription'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat.</div> */}
                        <div className='house-spec'>
                            <span><img src={myImages.bedroomIcon} alt='' />5bd</span>
                            <span><img src={myImages.bathroomIcon} alt='' />5bh</span>
                        </div>
                    </div>
                    <div className='type-image'>
                        <span className='pics-no'><img src={myImages.cameraIcon} alt='' />07</span>
                        <span className='purpose'>For Sale</span>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Popular;