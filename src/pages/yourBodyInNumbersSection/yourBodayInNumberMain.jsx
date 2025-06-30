"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function YourBodyInNumbersMain() {
  const [inputTime, setInputTime] = useState("")
  const [secondsPassed, setSecondsPassed] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  useEffect(() => {
    if (!inputTime) return

    const update = () => {
      const past = new Date(inputTime)
      const now = new Date()
      const seconds = Math.floor((now - past) / 1000)
      setSecondsPassed(seconds)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [inputTime])

  // conversions
  const heartbeats = Math.floor(secondsPassed * (70 / 60))
  const breaths = Math.floor(secondsPassed * (16 / 60))
  const blinks = Math.floor(secondsPassed * (20 / 60))
  const sweatDrops = Math.floor(secondsPassed * 6) // mg/sec = ~0.006mL/sec
  const redBloodCells = secondsPassed * 2_000_000
  const thoughts = Math.floor(secondsPassed * (60000 / (24 * 3600)))
  const steps = Math.floor(secondsPassed * (5000 / (24 * 3600)))

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-white bg-gradient-to-b from-zinc-900 to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        🔢 Seconds Since You Last...
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-md text-center mb-8"
      >
        <Label htmlFor="lastTime" className="text-lg block mb-2">
          Enter the last time you did something healthy
        </Label>
        <Input
          id="lastTime"
          type="datetime-local"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          className="text-black"
        />
      </motion.div>

      {inputTime && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 max-w-xl w-full"
        >
          <div className="text-3xl font-mono text-center mb-6">
            ⏱️ {secondsPassed.toLocaleString()} seconds
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-sm">
          <Stat label="heartbeats 💓" value={heartbeats} />
          <Stat label="breaths 🌬️" value={breaths} />
          <Stat label="blinks 👁️" value={blinks} />
          <Stat label="sweat drops 💦" value={sweatDrops} />
          <Stat label="new red blood cells 🦴" value={redBloodCells} />
          <Stat label="thoughts 💭" value={thoughts} />
          <Stat label="steps walked 👣" value={steps} />
          <Stat label="smiles suppressed 😄" value={Math.floor(secondsPassed * 0.0002)} />
          <Stat label="stress spikes avoided 🧘" value={Math.floor(secondsPassed * 0.00005)} />
          <Stat label="micro naps missed 💤" value={Math.floor(secondsPassed * 0.0001)} />
          <Stat label="DNA mutations fixed 🧬" value={Math.floor(secondsPassed * 0.12)} />
          <Stat label="neurons fired ⚡" value={Math.floor(secondsPassed * 25)} />
          <Stat label="gratitude moments missed 💖" value={Math.floor(secondsPassed * 0.00002)} />
        </div>

        </motion.div>
      )}
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-xl font-semibold">{value.toLocaleString()}</div>
      <div>{label}</div>
    </div>
  )
}
