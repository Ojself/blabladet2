import React from 'react'

const personalities = {
  low: <p><em>Elendig!</em> Du skårer på samme nivå som de som bruker sosiale medier som primær nyhetskilde</p>,
  lowMed: <p><em>Dårlig!</em> Du skårer på samme nivå som de som bruker vg og dagbladet som primær nyhetskilde</p>,
  med: <p><em>Ikke forferdelig!</em> Du har en gjennomsnittelig score, men du er langt ifra godt bevandret i medieverden </p>,
  medHigh: <p><em>Bra!</em> Du kjenner til mange av de norske avisene!  </p>,
  high: <p><em>Utmerket!</em> Du har en bred kunnskapshorisont i norsk media! </p>,
}

const blabladetUrl = "https://chrome.google.com/webstore/detail/blabladet/gffhghfcjpmgohnafihgfkifbamnpibe?hl=no"


const GameOver = ({score}) => {
  console.log(score, 'score')
  
  /* const extensionInfo = (
    <p>Sjekk ut <a href={blabladetUrl}>Blabladet</a>  extension</p>
  ) */
  let feedback
  switch (true) {
    case score > 10:
      feedback = personalities.high
      break;
    case score >= 8:
      feedback = personalities.medHigh
      break;
    case score >= 5:
      feedback = personalities.med
      break;
    case score >= 3:
    feedback = personalities.lowMed
    break;
    default:
    feedback = personalities.low
    break;
    
  }

  return (
    <div>
      <h1>Game Over!</h1>
      <p>Din score ble {score}</p>
      {feedback}
    </div>
  )
}

export default GameOver

