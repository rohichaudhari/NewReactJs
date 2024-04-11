import React, { useContext } from 'react'
import { Data } from './Context1'

function Context3() {
    const myName = useContext(Data)
  return (
    <div>
      <h1>Learn Reactjs1 {myName}</h1>
    </div>
  )
}

export default Context3
