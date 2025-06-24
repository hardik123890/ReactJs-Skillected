import {useEffect, useState} from 'react'


const UseEffectDemo = () => {
    // let [countX, setCountX] = useState(0);
    // let [countY, setCountY] = useState(0);

    const [data, setData] = useState([])
    //showJoke
    const[showJoke, setshowJoke] = useState(false)
    const[prevData, setPrevData] = useState()

    async function fetchData(){
      try{
        setPrevData(data)
        let response= await fetch('https://official-joke-api.appspot.com/random_joke')
        let jokeData = await response.json()
        setData(jokeData)
      }catch(err){
        console.log('Fetch error',err)
      }
    }
    useEffect(()=>{
      fetchData()
    },[])

    function getPrevJoke(){
      setData(prevData)
    }


      

  return (
    <div style={{"height":"200px",width:"300px",backgroundColor:"aqua"}}>
      {/* <span>X: {countX}</span>
        <span>X: {countY}</span> */}
        {/* <button onClick={()=>setCountX(countX+1)}>inc</button>
        <button onClick={()=>setCountY(countY+1)}>dec</button> */}
        
        {/* <h2>{data.type}</h2> */}
        {/* <p>Setup:- {data.setup}</p>
        <h4>PunchLine:- {data.punchline}</h4> */}

        {
          showJoke?<div>
          <p>Setup:- {data.setup}</p>
          <h4>PunchLine:- {data.punchline}</h4>
        </div> :<h4>Jokes are not still fetched</h4>
        }
        <button onClick={fetchData}>Next</button>
        <button onClick={getPrevJoke}>Prev</button>
        <button onClick={()=>setshowJoke(prev=>!prev)}>
          {
            showJoke?"Hide Joke":"Show Joke"
          }
        </button>

    </div>
  )
}

export default UseEffectDemo