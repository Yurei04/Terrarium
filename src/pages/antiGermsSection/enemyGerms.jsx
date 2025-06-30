"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function GermEnemy({ onHit }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Randomly place the germ on mount
    const randomX = Math.random() * 80 + 10 // avoid edges
    const randomY = Math.random() * 80 + 10
    setPosition({ x: randomX, y: randomY })
  }, [])

  const handleHit = () => {
    setVisible(false)
    if (onHit) onHit()
  }

  if (!visible) return null

  return (
    <div
      className="absolute w-16 h-16 cursor-pointer z-10 transition-opacity duration-300"
      onClick={handleHit}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <Image
        src="/images/virus.png"
        alt="Germ"
        width={64}
        height={64}
        className="animate-pulse"
      />
    </div>
  )
}
