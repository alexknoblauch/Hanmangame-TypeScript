type WonButtonProps = {
    onSubmit: () => void
}

export default function WonButton({onSubmit}: WonButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <button
      onClick={() => onSubmit()}
        className="
          bg-green-600
          text-white
          font-extrabold
          rounded-2xl
          shadow-lg
          transition
          hover:bg-green-700
          animate-bounce
          w-[10rem]
          h-[4rem]
          text-2xl
        "
      >
        YOU WON 🎉
      </button>
    </div>
  )
}
