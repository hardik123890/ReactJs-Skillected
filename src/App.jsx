
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { NavbarData } from './data'
function App() {

// console.log(NavbarData)

  return (
    <>
     
      <Navbar data={NavbarData} />
      <Footer title ='hello from footer props' parent="App file" />
    </>
  )
}

export default App