import React from 'react'
import img1 from '../Assets/logo.png'
import img2 from '../Assets/lang-flag.png'
function Header() {
  return (
    <div>
  <div className="container mx-auto px-4">
    <header className='flex justify-between items-center'>
      <div className='mobile-menu md:block sm:block lg:hidden'>
      <i class="fa-solid fa-bars"></i>
      </div>
      <div className='logo'>
          <img src={img1} alt='logo'></img>
      </div>
      <div className='main-search flex w-full  justify-evenly md:hidden lg:flex  sm:hidden '>
      <div className=' mt-5'>
      <input type="text" id="search-navbar" className=" w-[600px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Search..."/>
      </div>
      <div className='en flex w-64 justify-evenly '>

      <div className="group relative bg-gray-300 w-60  m-3 en flex  justify-evenly border-2 p-1 items-center  "> 
        <img src={img2} alt='image'/><span>English <i className="fa-solid fa-chevron-down "></i></span>
        <button class="invisible group-hover:visible  
            absolute pr-10 pl-10 pt-2 pb-2   
             border-0 text-black"> 
            <ul className='mt-36 outline '>
              <li><a>spanish</a></li>
              <li><a>English</a></li>
              <li><a>French</a></li>
            </ul>
        </button> 
    </div> 
    <div className="group relative bg-gray-300 w-40  m-3 en flex  justify-evenly border-2 p-1 items-center  "> 
    <p>USD</p>
        {/* <img src={img2} alt='image'/><span>English <i className="fa-solid fa-chevron-down "></i></span> */}
        <button class="invisible group-hover:visible  
            absolute pr-10 pl-10 pt-2 pb-2   
             border-0 text-black"> 
            <ul className='mt-36 outline '>
              <li><a>USD</a></li>
              <li><a>EAEN</a></li>
              <li><a>EURO</a></li>
            </ul>
        </button> 
    </div>
      {/* <div className='btn  border-2 m-3 relative bg-gray-300 w-40 flex'>
          <button className='flex justify-between items-center'>USD <i class="fa-solid fa-chevron-down"></i></button>
      </div> */}
      </div>
    
    
         
        
            
            
         
          
          
          
      </div>
      <div className='shop flex'>
      <i class="fa-solid fa-cart-shopping md:hidden lg:flex  sm:hidden"></i>
      <i className="fa-regular fa-user ml-10"></i>
      <i className="fa-regular fa-heart ml-10 "></i>
      </div>
    </header>
      




  
  </div>
      
    </div>
  )
}

export default Header
       
           


