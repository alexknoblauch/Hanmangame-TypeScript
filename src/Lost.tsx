
type LoseButtonProps = {
    onSubmit: () => void
}

export default function LoseButton({onSubmit}: LoseButtonProps) {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <button
      onClick={() => onSubmit()}
        className="
          bg-red-600 
          text-white 
          font-bold 
          rounded-2xl 
          shadow-lg 
          transition 
          hover:bg-red-700 
          w-[20vw]  // 20% der Bildschirmbreite
          h-[10vh]  // ca. 10% der Bildschirmhöhe
          text-4xl
        "
      >
        YOU LOSE 😢
      </button>
    </div>
  )
}
