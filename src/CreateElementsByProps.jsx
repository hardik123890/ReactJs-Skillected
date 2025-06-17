import React from 'react'

function OtherComponents({type,placeholder,className}) {
  return (
    <div>
        <input type={type} className={className} placeholder={placeholder}  />
    </div>
  )
}

export default OtherComponents