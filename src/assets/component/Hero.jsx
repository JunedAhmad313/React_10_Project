import React from 'react'

function HeroSection() {
  return (
    <main className='hero'>


<div className='hero-content'>
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WHERE HERE OUR SHOES.YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES</p>
    <div className='hero-btn'>
        <button>Shop Now</button>
        <button className='second-btn'>Category</button>
    </div>
    <div className='shopping'>
        <p>Also Avlable On</p>
        <div className='brand-icons'>
            <img src="/images/amazon.png" alt='amazone-logo'></img>
            <img src="/images/flipkart.png" alt='amazone-logo'></img>
            
        </div>
    </div>
    

</div>




<div className='hero-bannner'>
<img src="/images/shoe_image.png" alt='shoes-image'></img>
<button className='resume-btn'><a href='/images/Juned Ahmad Resume.pdf'>Devloper Resume</a></button>

</div>
    </main>
  )
}

export default HeroSection