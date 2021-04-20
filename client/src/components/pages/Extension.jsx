import React, {useEffect, useState} from 'react'

export default function Extension() {
  const [gameState, setGameState] = useState({
    score: 0,
    progress: 0,
    currentArticle: '',
    correctAnswer: '',
    alternatives: []
  })

  
  return (
    <div className="Home">
      
      <p>Blabladet</p>
    </div>
  )
}
