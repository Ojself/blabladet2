import React, {useEffect, useState} from 'react'
import api from '../../api'
import Alternative from '../molecules/Alternative'

import Spinner from "../molecules/spinner/Spinner"
import GameOver from "../molecules/GameOver"

export default function Spill() {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(1)
  const [currentArticle, setCurrentArticle] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [alternatives, setAlternatives] = useState([])
  const [animate, setAnimate] = useState(false)
  const [blinkGreen, setBlinkGreen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [gameOver, setGameOver] = useState(false)

  const getNewArticle = async (setSpinner = true) => {
    if (setSpinner){
      setLoading(true)
    }
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
        }, 1000)
        return
      }
    }

    getNewArticle(false)
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
      <div>
        <p>{Array.from({length:lives}, (life,i)=> <span key={`${life}${i}`}>♥️</span>)}</p>
      {!!score &&  <p>Score: <b> {score} </b></p> }
      </div>
      <h3>Hvilke nettavis har denne artikkelen?</h3>
      <div className="alternatives-wrapper">
        {alternatives.map((alternative, i)=><Alternative animate={animate} correctAnswer={correctAnswer} blinkGreen={blinkGreen && correctAnswer === alternative}  key={alternative} cb={handleAlternativeClick } imgName={alternative} index={i}/>)}
      </div>
      </>
      }
      

      
    </div>
  )
}
