import React from 'react'

function Error({error}) {

  if(!error) return null
  return (
    <p style={{
      display: 'inline-block',
      color: '#f31', 
      margin: '1rem 0', 
      backgroundColor: '#ff351114',
      padding: '0.3rem 0',
      paddingRight: '3rem',
      paddingLeft: '1rem',
      borderRadius: '0.3rem',
      fontStyle: 'italic',
      }}>
      {error}
    </p>
  )
}

export default Error