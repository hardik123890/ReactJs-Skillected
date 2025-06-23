import {useState} from 'react'

const UseStateComponent = () => {
    // let initialValue = useState("Value")[0]
    // let fun = useState("Value")[1]

    let [count, setCount] = useState(0)
   //console.log(value)

  //  function callSetValue(){
  //   setCount(count++)
  //  }
  function increment(){
    //setCount(count+1)
    setCount(prev => prev+1)
   }
   function decrement(){
    // if(count<0){
    //   setCount(0)
    // }else{
    //   setCount(count-1)
    // }
    //***ChatGPT */
    setCount(prev => (prev > 0 ? prev - 1 : 0));
    
   }
//    callSetValue()
//    console.log(value)

  return (
    <div>
        <h2>{count}</h2>
        {/* <button onClick={callSetValue}>Update</button> */}
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        
    </div>
  )
}

export default UseStateComponent