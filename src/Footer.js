import React from 'react'
import bookmarkIcon from './IMAGES/logo-bookmark.svg'
import facebook from './IMAGES/icon-facebook.svg'
import twitter from './IMAGES/icon-twitter.svg'

const Footer = () => {
  return (
    <div>
        <ul className='footer'>
            <li><img src={bookmarkIcon} alt="" /></li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li><img className='footericons' src={facebook} alt="" /> <img src={twitter} alt="" /></li>
        </ul>
    </div>
  )
}

export default Footer