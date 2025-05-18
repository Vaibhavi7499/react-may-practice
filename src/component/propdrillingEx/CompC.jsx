import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

const CompC = () => {
    // console.log(useContext(userContext))
    let {user} = useContext(userContext)
  return (
    <div>
        <h2>CompC</h2>
        <h3>{user}</h3>
    </div>
  )
}

export default CompC