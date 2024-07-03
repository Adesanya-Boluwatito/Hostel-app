import React from 'react'
import myImages from './Images'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='links'>
                    <div>About</div>
                    <div>Support</div>
                    <div>Privacy</div>
                    <div>Terms and Condition</div>
                </div>
                <div className='media'>
                    <img src={myImages.linkdlinIcon} alt='linkdelin'/>
                    <img src={myImages.twitterIcon} alt='twitter'/>
                    <img src={myImages.facebookIcon} alt='facebook'/>
                    <img src={myImages.instagramIcon} alt='instagram'/>
                </div>
            </div>
            <hr />
            <div className='bottom'>© 2024 HomeList inc</div>
        </div>

    )
}

export default Footer