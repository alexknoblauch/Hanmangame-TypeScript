type guessedWordProps = {
    guessedWord: string
    correctLetter: string[]
}

export default function GuessedWord({guessedWord, correctLetter}: guessedWordProps){
    return <div className="flex flex-row gap-4 md:text-[4rem]  ">
            {guessedWord.toUpperCase().split('').map(letter => {
              return <div className=" border-b-4 border-b-black w-16 justify-center items-center flex"><span className={correctLetter.includes(letter.toLocaleLowerCase())  ? '' : 'invisible'}>{letter}</span></div>
            })}
          </div>
}