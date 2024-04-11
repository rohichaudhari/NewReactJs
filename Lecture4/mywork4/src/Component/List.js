import React from 'react'
import image1 from '../Images/image-1.jpg'
function List() {
  return (
    <div>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Address</a></li>
        <li><a href='#'>phone no</a></li>
        <li><a href='#'>map</a></li>
        <li><a href='#'>save</a></li>
        <li><a href='#'>Contact us</a></li>
      </ul>
      <img src={image1} alt='image' height={300} width={500}></img>
    </div>
  )
}

export default List
