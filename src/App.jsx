
import './App.css'
import Element from './CreateElementsByProps'
import Footer from './Footer'
import { MultipleExport } from './MultipleExport'
import Navbar from './Navbar'
import UseEffect from './UseEffect'
import UseStateComponent from './UseState'


import { NavbarData } from './data'
function App() {

// console.log(NavbarData)

  return (
    <>
     
      <Navbar data={NavbarData} />
      
      <UseEffect/>
    </>
  )
}

export default App