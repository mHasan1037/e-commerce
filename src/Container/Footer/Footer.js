import React from 'react'

const Footer = () => {
  return (
    <div style={{
      width: '100%',  
      background: 'black', 
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      flexShrink: 0
    }}>
    Mahmudul Hasan  @{new Date().getFullYear()} 
    </div>
  )
}

export default Footer