"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function YourBodyInNumbersMain() {
  const [startDate, setStartDate] = useState("")
  const [secondsPassed, setSecondsPassed] = useState(0)

  useEffect(() => {
    if (!startDate) return

    const start = new Date(startDate).getTime()

    const update = () => {
      const now = Date.now()
      setSecondsPassed(Math.floor((now - start) / 1000))
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [startDate])

const stats = [
  {
    label: "heartbeats 💓",
    value: Math.floor(secondsPassed * (70 / 60)),
    description: "Your heart tirelessly pumps blood and nutrients to keep you alive."
  },
  {
    label: "breaths 🌬️",
    value: Math.floor(secondsPassed * (16 / 60)),
    description: "Each breath brings oxygen to fuel your cells and brain."
  },
  {
    label: "blinks 👁️",
    value: Math.floor(secondsPassed * (20 / 60)),
    description: "Blinking keeps your eyes moist and protected from dust."
  },
  {
    label: "sweat drops 💦",
    value: Math.floor(secondsPassed * 6),
    description: "Sweat helps cool your body and remove toxins naturally."
  },
  {
    label: "new red blood cells 🦴",
    value: secondsPassed * 2_000_000,
    description: "Red blood cells carry oxygen — your bones make millions every second."
  },
  {
    label: "thoughts 💭",
    value: Math.floor(secondsPassed * (60000 / (24 * 3600))),
    description: "Your brain never rests — constantly generating ideas, emotions, and focus."
  },
  {
    label: "steps walked 👣",
    value: Math.floor(secondsPassed * (5000 / (24 * 3600))),
    description: "Movement improves circulation, balance, and mental health."
  },
  {
    label: "smiles suppressed 😄",
    value: Math.floor(secondsPassed * 0.0002),
    description: "Smiling boosts mood, lowers stress, and connects you to others."
  },
  {
    label: "stress spikes avoided 🧘",
    value: Math.floor(secondsPassed * 0.00005),
    description: "Every second you stay calm helps your immune system stay strong."
  },
  {
    label: "micro naps missed 💤",
    value: Math.floor(secondsPassed * 0.0001),
    description: "Short rest moments reset focus and reduce fatigue."
  },
  {
    label: "DNA mutations fixed 🧬",
    value: Math.floor(secondsPassed * 0.12),
    description: "Your cells repair DNA constantly to keep your body healthy."
  },
  {
    label: "neurons fired ⚡",
    value: Math.floor(secondsPassed * 25),
    description: "Brain signals fire rapidly to control your every move and memory."
  },
  {
    label: "gratitude moments missed 💖",
    value: Math.floor(secondsPassed * 0.00002),
    description: "Gratitude strengthens happiness, social connection, and well-being."
  },
  {
    label: "immune cells trained 🛡️",
    value: Math.floor(secondsPassed * 10),
    description: "Your immune system learns constantly to fight viruses and bacteria."
  },
  {
    label: "toxins filtered by liver 🧪",
    value: Math.floor(secondsPassed * 500),
    description: "Your liver filters harmful chemicals and keeps your blood clean."
  },
  {
    label: "skin cells renewed 🧴",
    value: Math.floor(secondsPassed * 30_000),
    description: "Your skin constantly regenerates to protect your body."
  },
  {
    label: "calories burned 🔥",
    value: Math.floor(secondsPassed * 1.05),
    description: "Even at rest, your body uses energy to stay alive and balanced."
  },
  {
    label: "serotonin pulses 🌈",
    value: Math.floor(secondsPassed * 0.5),
    description: "This 'feel good' hormone affects mood, memory, and calm."
  },
  {
    label: "tears not shed 😢",
    value: Math.floor(secondsPassed * 0.00004),
    description: "Letting emotions out is part of emotional balance and healing."
  },
  {
    label: "gut bacteria multiplying 🦠",
    value: Math.floor(secondsPassed * 1000),
    description: "A healthy microbiome supports digestion, immunity, and mental clarity."
  },
  {
    label: "cells recycled ♻️",
    value: Math.floor(secondsPassed * 1_000_000),
    description: "Apoptosis clears out old cells so new ones can thrive."
  },
  {
    label: "laughs missed 😂",
    value: Math.floor(secondsPassed * 0.0001),
    description: "Laughter lowers stress hormones and strengthens social bonds."
  },
  {
    label: "sunlight energy processed ☀️",
    value: Math.floor(secondsPassed * 0.05),
    description: "Vitamin D from sun boosts mood and strengthens bones."
  },
  {
    label: "lungs cleaned 🌫️",
    value: Math.floor(secondsPassed * 3),
    description: "Your lungs remove particles and refresh oxygen supply constantly."
  },
  {
    label: "oxygen delivered 💨",
    value: Math.floor(secondsPassed * 3_000_000),
    description: "Red blood cells transport oxygen to fuel every organ."
  },
  {
    label: "brain detox cycles 🧠",
    value: Math.floor(secondsPassed * 0.02),
    description: "During sleep or rest, your brain clears waste for better function."
  },
  {
    label: "hydration losses 💧",
    value: Math.floor(secondsPassed * 0.001),
    description: "Your body loses water constantly — stay hydrated for energy and focus."
  },
  {
    label: "cells communicating 📡",
    value: Math.floor(secondsPassed * 5_000_000),
    description: "Trillions of messages keep your body in sync and working together."
  },
  {
    label: "mental health moments 🌿",
    value: Math.floor(secondsPassed * 0.001),
    description: "Each second is a chance to breathe, pause, and heal mentally."
  },
  {
    label: "bone micro-repairs 🦴",
    value: Math.floor(secondsPassed * 20),
    description: "Bones strengthen and heal continuously from tiny stresses."
  },
  {
    label: "blood vessels expanded 🩸",
    value: Math.floor(secondsPassed * 200),
    description: "Your vessels adapt to keep blood flowing evenly across your body."
  },
  {
    label: "heart recovery beats 🧘‍♂️",
    value: Math.floor(secondsPassed * 0.05),
    description: "Moments of calm help your heart reset and strengthen."
  },
  {
    label: "calm breaths missed 🌬️",
    value: Math.floor(secondsPassed * 0.0001),
    description: "Slow breathing helps regulate stress and improve focus."
  },
  {
    label: "healing hormones released 💉",
    value: Math.floor(secondsPassed * 0.3),
    description: "Oxytocin, endorphins, and more support recovery and connection."
  }

]


  if (!startDate) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-white bg-black px-6 text-center ">
        <h2 className="text-3xl font-bold mb-4">
          🥗 When was the last time you did something healthy?
        </h2>
        <Label htmlFor="healthDate" className="mb-2 text-lg">
          (Like exercise, ate veggies, meditated…)
        </Label>
        <Input
          id="healthDate"
          type="date"
          className="text-amber-200 max-w-xs"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
    )
  }

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black text-white z-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="h-screen w-full flex flex-col items-center justify-center snap-center px-6 text-center"
        >
          <div className="text-2xl text-amber-300 mb-4">
            {stat.label}
          </div>
          <div className="text-6xl font-mono font-bold text-white">
            {stat.value.toLocaleString()}
          </div>
          <p className="mt-4 max-w-xl text-white/70 text-base italic">
            {stat.description}
          </p>
          <div className="mt-6 text-sm text-white/40">
            Since {new Date(startDate).toLocaleDateString()} — {secondsPassed.toLocaleString()} seconds ago
          </div>
        </div>
      ))}

    </div>
  )
}
