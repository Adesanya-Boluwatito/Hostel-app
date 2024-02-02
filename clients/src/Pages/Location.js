import React, { Component } from "react";
import Slider from "react-slick";
import '../Style/Location.css'

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

export default class Location extends Component {
  render() {
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
      <div>
        <Slider {...settings}>
        <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
                <div className="house-location">
                    <div className='location'>
                        <div className='theLocation'>Lagos</div>
                        <div className='no-of-prop'>36 Properties</div>
                    </div>
                </div>
        </Slider>
      </div>
    );
  }
}