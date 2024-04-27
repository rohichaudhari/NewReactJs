import React from 'react'
import img1 from '../Images/breadcrumb-01.jpg'
import img2 from '../Images/error.png'
function Error() {
  return (
    <div>
      <div className='img'>
        <img src={img1}></img>
        <div className='text flex justify-center aligns-center mt-5'>
          <img src={img2} alt='image'></img>
        </div>
        <div className='error leading-6 '>
          <h1 className='text-6xl font-bold'>404. Page not found</h1>
          <p className='mt-4'>Sorry, we couldn’t find the page you where looking for. We suggest that<span className='block'>
you return to homepage.</span></p>
<button class="bg-red-700 text-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Back to HOme
</button>
        </div>
      </div>
    </div>
  )
}

export default Error
