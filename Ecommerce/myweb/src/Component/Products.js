import React from 'react'
import img1 from '../Assets/product-2.jpg'
import img2 from '../Assets/product-4.jpg'
import img3 from '../Assets/product-6.jpg'
import img4 from '../Assets/product-8.jpg'
import img5 from '../Assets/product-10.jpg'
import img6 from '../Assets/product-12.jpg'
import img7 from '../Assets/product-14.jpg'
import img8 from '../Assets/product-16.jpg'
import img9 from '../Assets/product-18.jpg'
import img10 from '../Assets/product-20.jpg'
function Products() {
  return (
    <div className='bg-white'>
        <div className='product xl:flex justify-between sm:block md:block '>
            <p className='text-2xl text-start font-bold'>popular   <span className='text-red-700'>Products</span></p>
            <nav>
                <ul className='flex w-80 justify-between mr-7 font-bold '>
                    <li className='text-red-700 font-bold'><a>ALL</a></li>
                    <li><a>Popular</a></li>
                    <li><a>On sale</a></li>
                    <li><a>Best rated</a></li>
                </ul>
            </nav>
        </div>
        <div className='images-card'>
        <div class="grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 ">
        <div className='card-1'>
            <div className='bg-slate-200'>
                <img src={img1} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Bradley Burgess 2</p>
            <p className='font-bold'>$20.00</p>
            </div>
         </div>
         <div className='card-2'>
            <div className='bg-slate-200'>
                <img src={img2} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Alliety sharp</p>
            <p className='font-bold'>$30.00</p>
            </div>
         </div>
         <div className='card-3'>
            <div className='bg-slate-200'>
                <img src={img3} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Nathaniel Baldwin</p>
            <p className='font-bold'>$40.00</p>
            </div>
         </div>
         <div className='card-4'>
            <div className='bg-slate-200'>
                <img src={img4} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Effie Rios</p>
            <p className='font-bold'>$40.00</p>
            </div>
         </div>
         <div className='card-5'>
            <div className='bg-slate-200'>
                <img src={img5} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Carolyn Goodwin</p>
            <p className='font-bold'>$50.00</p>
            </div>
         </div>
         <div className='card-6'>
            <div className='bg-slate-200'>
                <img src={img6} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Evelyn Patton</p>
            <p className='font-bold'>$60.00</p>
            </div>
         </div>
         <div className='card-7'>
            <div className='bg-slate-200'>
                <img src={img7} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Sally Ray</p>
            <p className='font-bold'>$70.00</p>
            </div>
         </div>
         <div className='card-8'>
            <div className='bg-slate-200'>
                <img src={img8} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Ora Bowman</p>
            <p className='font-bold'>$80.00</p>
            </div>
         </div>
         <div className='card-9'>
            <div className='bg-slate-200'>
                <img src={img9} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Frederick Valdez</p>
            <p className='font-bold'>$90.00</p>
            </div>
         </div>
         <div className='card-8'>
            <div className='bg-slate-200'>
                <img src={img8} alt='image'></img>
            </div>
            <div className='text-start'>
            <p className='hover:text-red-700'>Terry Byrd</p>
            <p className='font-bold'>$100.00</p>
            </div>
         </div>
        </div>
    </div>
</div>
  )
}

export default Products
            
      







            
           
            
          
            
          
 
