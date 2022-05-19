import React from 'react'
import illustrationOne from './IMAGES/illustrationtoday.svg'

const Section1 = () => {
  return (
    <div>
        <div className='section1'>
          <div className='textsection11'>
          <h1>A Simple Bookmark Manager</h1>
      <p className='secton1p'>A clean and simple interface to organise <br/> your favorite websites.Open a new browser <br/> tab and see your sites load instantly. Try it <br/> for free.</p>
      <button className='firstbtnset'>Get it on chrome</button> <button className='firstbtnset'>Get it on firefox</button>
          </div>
          <div className='imagesection1'>
          <img src={illustrationOne} alt="" />
          </div>
        </div>
<div className='features'>
    <h1>Features</h1>
    <p>Our aim is to make it quick and easy for you to access your favourite<br/> websites. Your bookmark sinks between your devices so you can<br/> access them on the go.</p>
</div>
<div className='Afterfeatures'>
  <div>Simple Bookmarking</div>
  <div>Simple searching</div>
  <div>Easy Sharing</div>
</div>
<hr className='hr'/>
    </div>
  )
}

export default Section1