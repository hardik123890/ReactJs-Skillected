import React from 'react'

const Navbar = ({data}) => {
   // console.log(data.logoUrl)
  // console.log(data.navItems)
  return (
    <div className= "navbar">
        <img className="logo" src={data.logoUrl} alt="logo" />
           <div className="menu-items">
{/*             
            <li>Home</li>
            <li>Contact</li>
            <li>Blogs</li>
            <li>Services</li>
            <li>About Us</li> */}

            {
              data.navItems.map((item)=>{
                 return <li>{item}</li>
              })
            }

           </div>
    </div>
  )
}

export default Navbar