
import './App.css'
import Element from './CreateElementsByProps'
import Footer from './Footer'
import { MultipleExport } from './MultipleExport'
import Navbar from './Navbar'
import { NavbarData } from './data'
function App() {

// console.log(NavbarData)

  return (
    <>
     
      <Navbar data={NavbarData} />
      <Footer title ='hello from footer props' parent="App file" />
      <Element type="text" placeholder="Enter your name" className="lg"/>
      <Element type="date" placeholder="Enter your Email" className="sm"/>
      <Element type="radio" placeholder="" className="sm"/>

      {/* <MultipleExport/> */}
    </>
  )
}

export default App