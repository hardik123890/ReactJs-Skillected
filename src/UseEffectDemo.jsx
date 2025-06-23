import {useEffect, useState} from 'react'


const UseEffectDemo = () => {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);

    const [data, setData] = useState([])

    async function fetchData(){
      let response= await fetch('https://official-joke-api.appspot.com/random_joke')
      let jokeData = await response.json()
      setData(jokeData)
    }
    useEffect(fetchData,[countX])

      

  return (
    <div>
      {/* <span>X: {countX}</span>
        <span>X: {countY}</span> */}
        {/* <button onClick={()=>setCountX(countX+1)}>inc</button>
        <button onClick={()=>setCountY(countY+1)}>dec</button> */}

        <h2>{data.type}</h2>
        <p>{data.setup}</p>
        <p>{data.punchline}</p>

    </div>
  )
}

export default UseEffectDemo