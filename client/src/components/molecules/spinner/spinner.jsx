import React from 'react'

const spinner = () => {
  return (
    <div id="container">
<div id="circle">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
    <defs>
        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
    </defs>
    <circle cx="150" cy="100" r="75" fill="none"/>
    <g>
        <use xlink:href="#circlePath" fill="none"/>
        <text fill="#000">
            <textPath xlink:href="#circlePath">AKKURAT NÅ AKKURAT NÅ AKKURAT NÅ  </textPath>
        </text>
    </g>
</svg>
</div>
</div>
  )
}

export default spinner



