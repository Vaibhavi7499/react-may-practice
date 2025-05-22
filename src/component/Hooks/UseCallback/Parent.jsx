import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Hello Kishor")


    // let getIdFromChild = (id) => {
    //     console.log(`id is ${id}`)
    // }

   let getIdFromChild = useCallback((id) => {
        console.log(`id is ${id}`) 
    },[name])

  return (
    <div>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Inc Count</button>
            <button onClick={() => setName("Hello Sir")}>Change Name</button>
        </div>
        <Child name={name} getIdFromChild={getIdFromChild} />
    </div>
  )
}

export default Parent