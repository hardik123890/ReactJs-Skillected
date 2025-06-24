
import './App.css'
import BottomFooter from './BottomFooter'
import Element from './CreateElementsByProps'
import Footer from './Footer'
import { MultipleExport } from './MultipleExport'
import Navbar from './Navbar'
import UseEffect from './UseEffect'
import UseEffectDemo from './UseEffectDemo'
import UseStateComponent from './UseState'
import UserContextProvider from './context api/userContextProvider'

import { NavbarData } from './data'
function App() {

// console.log(NavbarData)
// let copyright = "@ 2025 Hardik"
  return (
    <UserContextProvider>
     
      <Navbar data={NavbarData} />
      {/* <Footer title ='hello from footer props' parent="App file" />
      <Element type="text" placeholder="Enter your name" className="lg"/>
      <Element type="date" placeholder="Enter your Email" className="sm"/>
      <Element type="radio" placeholder="" className="sm"/> */}


      {/* <MultipleExport/> */}
      {/* <UseStateComponent/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectDemo/>  
       */}
       {/* <Footer data = {copyright}/> */}
       <BottomFooter/>
      
    </UserContextProvider>
  )
}

export default App