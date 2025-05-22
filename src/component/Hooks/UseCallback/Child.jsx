import React, { memo } from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <div>Child {props.name}</div>
  )
}

export default memo(Child)


// memo
// props.prevname = "Hello Kishor"
// props.nextPrevNane = "Hello Kishor"

// prev.props === nextProps 
// 100  == 200