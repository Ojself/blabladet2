import React from 'react'
import "./alternative.scss"




const Alternative = ({imgName, cb, index, animate, blinkGreen, correctAnswer }) => {

  const innerStyle = index % 2 ? "oddboxinner" : "evenboxinner"
  
  const animationClass = (animate && blinkGreen) ? 'blink-green' : animate && !(correctAnswer === imgName) ? 'fadeout' : ''
  return (
    <>
    <div className={`logowrapper box box${index+1} ${animationClass}`} onClick={() => cb(imgName)}>
      <img className={`logo ${innerStyle}`} src={`./assets/logos/${imgName}.png`} alt={imgName} />
    </div>
    </>
  )
}



export default Alternative

