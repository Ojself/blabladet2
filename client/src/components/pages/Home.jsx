import React, {useEffect, useState} from 'react'
import api from '../../api'

export default function Home() {
  const [score, setScore] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentArticle, setCurrentArticle] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [alternatives, setAlternatives] = useState([])
  const [loading, setLoading] = useState(true)

  

  useEffect(()=> {
    const getArticle = async () => {
      let data = await api.getArticle()
      setCurrentArticle(data.articleScreenShot.data)
      setCorrectAnswer(data.correctAnswer)
      setAlternatives(data.alternatives)
      setLoading(false)
    }
    //getArticle()
  },[])
    
  return (
    <div className="Home">
      {/* Header */}
      {/* Article Image */}
      {/* alternatives */}
      <p>Blabladet</p>
    </div>
  )
}
