"use client"

import { Button } from "@/components/ui/button"

export default function AntiGermsMain({ onStart, onRestart, isPlaying, onStop }) {
  return (
    <div className="absolute bottom-4 left-4 z-10">
      <div className="flex flex-row gap-4 items-centerjustify-center">
        {!isPlaying && (
          <Button onClick={onStart} className="bg-amber-50 text-black font-bold">
            Start
          </Button>
        )}
        {isPlaying && (
          <Button onClick={onRestart} className="bg-amber-50 text-black font-bold">
            Restart
          </Button>
        )}
        {isPlaying && (
          <Button onClick={onStop} className="bg-amber-50 text-black font-bold">
            Stop
          </Button>
        )}
      </div>
    </div>
  )
}
