import React, {useEffect, useState} from 'react'
import api from '../../api'
import Alternative from '../molecules/Alternative'

import GameOver from "./../molecules/GameOver"
import Spinner from "./../molecules/spinner/Spinner"

export default function Spill() {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [currentArticle, setCurrentArticle] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [alternatives, setAlternatives] = useState([])
  const [animate, setAnimate] = useState(false)
  const [blinkGreen, setBlinkGreen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [gameOver, setGameOver] = useState(false)

  const getNewArticle = async () => {
    
      setLoading(true)
    
    let data = await api.getArticle()
    setCurrentArticle(data.articleScreenShot)
    setCorrectAnswer(data.correctAnswer)
    setAlternatives(data.alternatives)
    setAnimate(false)
    setBlinkGreen(false)
    setLoading(false)
  }
  useEffect(()=> {
    getNewArticle()
  },[])

  const handleAlternativeClick = (name) => {
    setAnimate(true)
    if (name === correctAnswer){
      const newScore = score + 1
      setScore(newScore)
      setBlinkGreen(true)
    } else {
      const newLife = lives - 1
      setLives(newLife)
      if (newLife <= 0){
        setTimeout(()=>{
          setGameOver(true)
        }, 2000)
        return
      }
    }

    getNewArticle()
  }
  if (gameOver) {
    return <GameOver score={score}/>
  }
  return (
    <div className="spill">
      
      
      
      {loading
        ? <Spinner /> 
        : <> 
      <div className="sketchy">

      <img src={`data:image/jpeg;base64,${currentArticle}`} />
      </div>
      <div style={{height: "5vh"}}>
        <p style={{height: "2vh"}}>{Array.from({length:lives}, (life,i)=> <span style={{fontSize: "2rem"}} key={`${life}${i}`}>♥️</span>)}</p>
      <p>Score: <b> {score} </b></p> 
      </div>
      <br />
      <h3>Hvilke nettavis har denne artikkelen?</h3>
      </>
      }
      
      {alternatives.length ? <div className="alternatives-wrapper">
        {alternatives.map((alternative, i)=><Alternative animate={animate} correctAnswer={correctAnswer} blinkGreen={blinkGreen && correctAnswer === alternative}  key={alternative} cb={handleAlternativeClick } imgName={alternative} index={i}/>)}
      </div> : null}

      
    </div>
  )
}
