import './App.css';
import React, {useRef, useState} from "react"
import Webcam from 'react-webcam';
import Submission from './Submission';

function App() {

  const webcamRef = useRef(null)
  const [hasPhoto,setHasPhoto] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [address,setAddress] = useState('')
  const [submittedState, setSubmittedState] = useState(false)


  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    localStorage.setItem('imgurl',imageSrc)
    setHasPhoto(true)
  }

  const reset = () => {
    setHasPhoto(false)
    setName("")
    setEmail("")
    setNumber("")
    setAddress("")
  }

  const handleSubmit = () => {
    if(!hasPhoto){
      alert('Please Capture Image')
    }
    else{
    setSubmittedState(true)
    }
  }

  if(submittedState){
    return(
    <Submission />
    )
  }


  return (
    <div className="App">
      { hasPhoto ? 
        <img
          alt='CapturedImage'
          src={imgSrc}
          className='capturedimg'
        />
      : <Webcam
      audio={false}
      ref={webcamRef}
      height={250}
      width={250}
      screenshotFormat="image/jpeg"
      onUserMediaError={(e) => {alert(e.message)}}
      className='cam'
    /> }
    <button onClick={capture} className='photocapturebutton'>Capture Photo</button>
    <button onClick={reset} className='resetbutton'>Reset</button>
    <form onSubmit={handleSubmit}> 
        <input type='text' placeholder='Enter Name' className='nameinputfield' value={name} onChange={(e) => {setName(e.target.value)}} required/>
        <input type='email' placeholder='Enter VIT Email' pattern='.+@vitstudent\.ac\.in' className='emailinputfield' value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
        <input type='number' placeholder='Enter Number' className='numberinputfield' value={number} onChange={(e) => {setNumber(e.target.value)}} required/>
        <input type='text' placeholder='Enter Address' className='addressinputfield' value={address} onChange={(e) => {setAddress(e.target.value)}} required/>
        <input type="submit" value="Submit" className='submitbutton'/>
    </form>    
    </div>
  );
}

export default App;
