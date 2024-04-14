import React from 'react'

function Destructureprops({fname ,mname, lname}) {
    // const [fname,lname]=props;
  return (
    <div>
      {fname} {mname} {lname}
    </div>
  )
}

export default Destructureprops


