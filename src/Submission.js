import React from 'react'

function Submission() {

  const image = localStorage.getItem('imgurl')   

  return (
    <div>
        <h1>Submitted</h1>
        <img src={image}></img>
    </div>
  )
}

export default Submission
