import React, { useState } from 'react' 
import Data from './Tableuse' 
function Table() { 
  const [data,setData] =useState(Data) 
  console.log(data,"Tableuse") 
  return ( 
    <div> 
      <table class="border-spacing-x-0.5 mt-5 table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
  <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'> 
    <tr className='px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xl'> 
      <th>ID</th> 
      <th>NAME</th> 
      <th>EMAIL</th> 
      <th>CITY</th> 
      <th>PHONE NO</th> 
    </tr> 
  </thead> 
  <tbody className='border border-slate-800'> 
    {data.map((cvalue ,ind)=>{ 
      return(<> 
      <tr className='h-10 bg-amber-100 text-red border'> 
        <td>{cvalue.Id}</td> 
        <td>{cvalue.Name}</td> 
        <td>{cvalue.Email}</td> 
        <td>{cvalue.City}</td> 
        <td>{cvalue.Phoneno}</td> 
      </tr> 
      </>) 
    })} 
    {/* <tr className="bg-amber-100"> 
      <td>1</td> 
      <td>Chaudhari rohini</td> 
      <td>rohini@gmail.com</td> 
      <td>vyara</td> 
      <td>9876543211</td> 
    </tr> 
    <tr> 
      <td>2</td>   
      <td>Gamit ganga</td> 
      <td>Ganga@gmail.com</td> 
      <td>Uchhal</td> 
      <td>1124141244</td> 
    </tr> 
    <tr className="bg-amber-100"> 
      <td>3</td> 
      <td>Chaudhari Divya</td> 
      <td>Divya@gmail.com</td> 
      <td>Dolvan</td> 
      <td>9876543211</td> 
    </tr> 
    <tr> 
      <td>4</td> 
      <td>Chaudhari nimisha</td> 
      <td>nimisha@gmail.com</td> 
      <td>vyara</td> 
      <td>9876543211</td> 
    </tr> 
    <tr className="bg-amber-100"> 
      <td>5</td> 
      <td>Chaudhari kinjal</td> 
      <td>Kinjal@gmail.com</td> 
      <td>vyara</td> 
      <td>9876543211</td> 
    </tr> */} 
  </tbody> 
</table> 
    </div> 
  ) 
} 
 
export default Table