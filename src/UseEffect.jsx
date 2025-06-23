import {useState} from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);

    function incrementX(){
        setCountX(prev=>prev+1)
    }
    function incrementY(){
        setCountY(prev=>prev+1)
    }

    function hello(){
        console.log("Hello");
    }

    //useEffect(hello)
    useEffect(hello,[countX])

  return (

    <div>
        <span>X:{countX}</span>
        <span>X:{countY}</span>
        <br />
        <br />
        <button onClick={incrementX}>inc</button>
        <button onClick={incrementY}>dec</button>
    </div>
  )
}

export default UseEffect