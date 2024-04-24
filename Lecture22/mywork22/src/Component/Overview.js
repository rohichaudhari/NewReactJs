import React from 'react'

function Overview() {
  return (
    <div>
      <div className='flex w-full  bg-slate-200 h-[100vh]   items-center justify-around '>
        <div className='text leading-10 text-start'>
            <h1 className='text-6xl font-bold hover:text-red-700'>The Most<span className='block'>Customizable WP</span>  <span className='block'>Theme</span></h1>
            <p className='text-2xl'>Awesome Pre-Built Websites that are Easy to Install <span className='block'>and Customize</span></p>
        </div>
        <div className='h-[30%] w-[15%] bg-red-200 rounded-full border-8 border-red-400'>
            <h1 className='text-8xl text-red-700 flex items-center justify-center mt-10 font-bold'>U</h1>
        </div>
      </div>
    </div>
  )
}

export default Overview


