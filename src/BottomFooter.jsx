import React from 'react'
import { useContext } from 'react'
import userDataStorage from './context api/UserContext'

const BottomFooter = () => {
    const user = useContext(userDataStorage).userData
    const copy = useContext(userDataStorage).copyright
  return (
    <div>
        <p>bottom side of footer</p>
        {/* <p>{parentData}</p> */}
        <p>{user}</p>
        <p>{copyright}</p>
    </div>
  )
}

export default BottomFooter