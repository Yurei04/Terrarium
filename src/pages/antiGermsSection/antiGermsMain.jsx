"use client"

import { Button } from "@/components/ui/button"

export default function AntiGermsMain({ onStart, onRestart, isPlaying, onStop }) {
  return (
    <div className="absolute bottom-4 left-4 z-10">
      <div className="flex flex-row gap-4 items-center justify-center">
        {!isPlaying && (
          <Button onClick={onStart} className="bg-blue-100 text-black hover:bg-blue-700 hover:text-blue-100 font-bold cursor-pointer">
            Start
          </Button>
        )}
        {isPlaying && (
          <Button onClick={onRestart} className="bg-blue-100 text-black hover:bg-blue-700 hover:text-blue-100 font-bold cursor-pointer">
            Restart
          </Button>
        )}
        {isPlaying && (
          <Button onClick={onStop} className="bg-blue-100 text-black hover:bg-blue-700 hover:text-blue-100 font-bold cursor-pointer">
            Stop
          </Button>
        )}
      </div>
    </div>
  )
}
