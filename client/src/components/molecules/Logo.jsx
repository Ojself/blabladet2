import React from 'react'


const Logo = ({imgSrc, imgName, onClick}) => {
  return (
    <div className="logowrapper" onClick={onClick}>
      <img className="logo" src={imgSrc} alt={imgName} />
    </div>
  )
}



export default Logo

