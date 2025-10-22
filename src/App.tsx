import { useState } from "react"
import wordList from "./wordList.json"
import GuessedWord from "./GuessedWord"
import Hangman from "./Hangman"
import Keyboard from "./Kesboard"
import LoseButton from "./Lost"
import WonButton from "./Won"

function App() {
  const [guessedWord, setGuessedWord] = useState(() => {
    const index = Math.floor(Math.random() * wordList.length)
    return wordList[index]
  })
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)



  const guessedWordSet: string = new Set(guessedWord.toLowerCase())
  const [clickedLetter, setClickedLetter] = useState<string[]>([])

  let falseLetter: string[] = clickedLetter.filter(letter => {
        return !guessedWord.includes(letter)
  })
  let correctLetter: string[] = clickedLetter.filter(letter => {
        return guessedWord.includes(letter)
  })

  console.log(falseLetter)


  //Gamelogik
  if(!won && [...guessedWordSet].every(letter => correctLetter.includes(letter))){
    setWon(true)

  }
  if (!lost && clickedLetter.length === 6 + correctLetter.length){
    setLost(true)
  }

  function newGame(){
    const index = Math.floor(Math.random() * wordList.length)
    setGuessedWord(wordList[index])
    setClickedLetter([])
    falseLetter = []
    correctLetter = []
    setWon(false)
    setLost(false)
  }




  return (
  <div className="flex flex-col justify-center items-center h-screen">
        <Hangman falseLetter={falseLetter}/>
      <div className="flex flex-col justify-center items-center">
        {won &&  <WonButton onSubmit={newGame} />}
        {lost && <LoseButton onSubmit={newGame}/>}
        <GuessedWord guessedWord={guessedWord} correctLetter={correctLetter}/>
        <Keyboard setClickedLetter={setClickedLetter}/>
      </div>
  </div>
  )}


export default App
