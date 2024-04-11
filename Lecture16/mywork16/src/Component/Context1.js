import React, { createContext } from 'react'
import Context2 from './Context2'
 const Data = createContext();
function Context1() {
  return (
    <div>
        <Data.Provider value={"Rohini chaudhari"}>
      <Context2/>
        </Data.Provider>

    </div>
  )
}

export default Context1;
export {Data};
