import React from 'react'
import image4 from '../Assets/betheme-box.webp'

function About() {
  return (
    <div>
      <div className='About'>
        <p className='text-4xl text-red-700 underline font-bold'>This is About Page</p>
        <div className='image flex gap-20 mt-12'>
        <img src={image4} alt='image'></img>
        <div className='text1 text-start'>
        <h1 className='text-4xl'>About <span className='text-violet-700'>Be</span>theme</h1>
         <p>Ever since Betheme was just an idea, we knew that it would be different from all other multipurpose WordPress themes we’d tried before.</p>
         <p>We wanted to build something more than just another WordPress theme, that could easily adapt to any project you need to work on without writing any code. A theme designed from scratch to save your time & help you enjoy your freedom..</p>
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
        </div>
        <div className='text3'>
            <p className='text-6xl'><i class="fa-solid fa-thumbs-up"></i></p>
            <p className='text-8xl text-violet-700'>250K+</p>
            <p className='text-2xl text-red-700'>Trusted by thousands</p>
            <p className='text-2xl text-red-700'>of happy customers</p>
        </div>
        

        </div>
      </div>
    </div>
  )
}

export default About
