import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <nav>
            <ul className='flex justify-around  font-bold '>
                <li className='hover:bg-red-700 hover:text-white'><Link to='/'>Overview</Link></li>
                <li className='hover:bg-red-700 hover:text-white'><Link to='/element'>Element</Link></li>
                <li className='hover:bg-red-700 hover:text-white'><Link to='/demoes'>Demoes</Link></li>
                <li className='hover:bg-red-700 hover:text-white'><Link to='/plugins'>Plugins</Link></li>
                <li className='hover:bg-red-700 hover:text-white'><Link to='/documentation'>Documentation</Link></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
