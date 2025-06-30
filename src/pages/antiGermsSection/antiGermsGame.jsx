"use client"

import Crosshair from '@/components/effects/crossHair'
import { useRef, useEffect, useState } from 'react'
import AntiGermsMain from "@/pages/antiGermsSection/antiGermsMain"
import GermEnemy from '@/pages/antiGermsSection/enemyGerms'
import { Button } from '@/components/ui/button'

export default function AntiGermsGame() {
    const [timeLeft, setTimeLeft] = useState(60)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showGameEnd, setShowGameEnd] = useState(false)
    const [score, setScore] = useState(0)
    const [germs, setGerms] = useState([])

    const spawnGerm = () => {
        const id = crypto.randomUUID()
        setGerms((prev) => [...prev, { id }])
    }

    const handleHit = () => {
        setScore((prev) => prev + 1)
    }

    useEffect(() => {
        if (!isPlaying) return
        const spawn = setInterval(spawnGerm, 800)
        return () => clearInterval(spawn)
    }, [isPlaying])

    useEffect(() => {
        if (!isPlaying || timeLeft <= 0) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    setIsPlaying(false)
                    setShowGameEnd(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isPlaying, timeLeft])

    const startGame = () => {
        setTimeLeft(60)
        setScore(0)
        setGerms([])
        setShowGameEnd(false)
        setIsPlaying(true)
    }

    const stopGame = () => {
        setIsPlaying(false)
        setShowGameEnd(true)
    }

    const restartGame = () => {
        startGame()
    }

    const returnGame = () => {
        setShowGameEnd(false)
        setTimeLeft(0)
        setScore(0)
        setGerms([])
    }

    const Component = () => {
        const containerRef = useRef(null)
        return (
            <div ref={containerRef} className='border overflow-hidden h-screen z-1'>
                <Crosshair containerRef={containerRef} color='#ffffff' />
            </div>
        )
    }

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-blue-600/25 text-blue-100 " id='antigerm'>
            <Component />

            {isPlaying && (
                <div className="absolute top-4 right-4 bg-black/70 text-blue-100 text-xl font-bold px-4 py-2 rounded-lg z-10">
                    {timeLeft}s
                </div>
            )}

            <div className="absolute top-4 left-4 bg-black/70 text-blue-100 text-xl font-bold px-4 py-2 rounded-lg z-10">
                Score: {score}
            </div>

            {showGameEnd && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/80 text-blue-100 text-4xl font-bold flex-col gap-4">
                    ⏰ Game End
                    <Button onClick={returnGame} className="ml-4 text-base font-normal bg-blue-100 text-black hover:bg-blue-700 hover:text-blue-100 cursor-pointer">
                        Return
                    </Button>
                </div>
            )}

            <AntiGermsMain
                onStart={startGame}
                onRestart={restartGame}
                onStop={stopGame}
                isPlaying={isPlaying}
            />

            {germs.map((germ) => (
                <GermEnemy key={germ.id} onHit={handleHit} />
            ))}
        </div>
    )
}
