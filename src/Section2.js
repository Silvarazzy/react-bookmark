import React, { useState } from 'react'
import illustrationTwo from './IMAGES/illustration-features-tab-1.svg'
const Section2 = () => {
  const [text, setText]=useState('Organize your bookmarks however you like .Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
  function textChanger() {
    if(text ==='Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'){
      setText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente iusto mollitia atque quam a in repellendus? Consectetur totam quos temporibus, eos tempore aperiam fugit amet nemo hic in expedita.')
    }else{
      setText('Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
    }
  }
  
  return (
    <div>
        <div className='section2'>
          <div><img src={illustrationTwo} alt="" /></div>
          <div className='Bookmarkinoneclick'>
          <h1>Bookmark in one click</h1>
      <p>{text}</p> 
      <button className='moreinfobtn' onClick={textChanger}>More info</button>
          </div>
        </div>
        <div className='extension1'>
    <h1>Download the extension</h1>
    <p>We've got more browsers in the pipeline. Please do let us know if<br/> you've got a favourite you'd liKe us to prioritize.</p>
</div>
    </div>
  )
}

export default Section2