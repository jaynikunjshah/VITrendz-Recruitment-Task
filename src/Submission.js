import React, { useState } from 'react'
import './submission.css'
import App from './App'

function Submission() {

  const image = localStorage.getItem('imgurl')   
  const [handleClick,setHandleClick] = useState(false)

  const buttonClicked = () => {
    setHandleClick(true)
  }

  if(handleClick){
    return(
      <App />
    )
  }

  return (
    <div>
        <h1 className='congratulationstext'>Congratulations</h1>
        <button className='gobackbutton' onClick={buttonClicked}>Go Back</button>
        <img src={image} className='capturedimage' alt='Captured Image'></img>
    </div>
  )
}

export default Submission
