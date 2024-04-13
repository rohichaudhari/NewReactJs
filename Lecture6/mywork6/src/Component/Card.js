import React from 'react'

function Card(props) {
  return (
    <div>
      <div className='max-w-sm shadow overflow-hidden rounded'>
        <img className='h-80 w-100 flex justify-center items-center justify-around' src={props.img}></img>
        <div className='text text-4xl'>
            <h1>{props.name}</h1>
        </div>
        <p className='italic'>{props.descr}</p>
      </div>
      <div className='max-w-sm shadow overflow-hidden rounded'>
        <img className='h-80 w-100 flex justify-center items-center justify-around' src={props.img}></img>
        <div className='text text-4xl'>
            <h1>{props.name}</h1>
        </div>
        <p className='italic'>{props.descr}</p>
      </div>
    </div>
  )
}

export default Card
