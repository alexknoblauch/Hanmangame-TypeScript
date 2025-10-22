import { keyboard } from './keyboad'

type KeyboardProps = {
  setClickedLetter:  React.Dispatch<React.SetStateAction<string[]>>
}


export default function Keyboard({setClickedLetter}: KeyboardProps){
    return<div className="mt-8 grid grid-cols-7 gap-2 max-w-xl mx-auto p-4 justify-center items-center">
      {keyboard.map((key) => (
        <button
          onClick={() => setClickedLetter(prev  => [...prev, key])}
          key={key}
          className="bg-gray-200 hover:bg-gray-300 md:text-[3rem]  font-medium rounded px-4 py-2 text-center uppercase shadow transition"
        >
          {key}
        </button>
      ))}
    </div>
}