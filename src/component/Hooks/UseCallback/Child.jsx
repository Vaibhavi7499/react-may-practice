import React, { memo } from 'react'

const Child = ({callbackEx}) => {
    console.log("child called")
  return (
    <div>
        <button onClick={()=>callbackEx(1)}>click me</button>
    </div>
  )
}

export default memo(Child)