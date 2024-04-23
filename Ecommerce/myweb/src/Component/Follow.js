import React from 'react'
import img1 from '../Assets/instagram-02.jpg'
import img2 from '../Assets/instagram-03.jpg'
import img3 from '../Assets/instagram-04 (1).jpg'
import img4 from '../Assets/instagram-04.jpg'
import img5 from '../Assets/instagram-05.jpg'
function Follow() {
  return (
    <div>
    <div class="md:container md:mx-auto">
        <p className='text-red-700 text-xl'>Follow on</p>
        <p className='font-bold text-4xl'>ninico-shop</p>
        <div className='grid grid-cols-5 gap-4'>
            <div>
                <img src={img1} alt='image'></img>
            </div>
            <div>
                <img src={img2} alt='image'></img>
            </div>
            <div>
                <img src={img3} alt='image'></img>
            </div>
            <div>
                <img src={img4} alt='image'></img>
            </div>
            <div>
                <img src={img5} alt='image'></img>
            </div>
          
           
        </div>
    </div>
    </div>
  )
}

export default Follow
