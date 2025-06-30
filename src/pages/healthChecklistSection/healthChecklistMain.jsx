"use client"

import Ballpit from "@/components/effects/ballpit"
import Silk from "@/components/effects/silk"
import TextPressure from "@/components/effects/textPressure"
import { useState } from "react"

const healthHabits = [
  "Brush your teeth twice a day",
  "Eat vegetables every day",
  "Drink 8 glasses of water daily",
  "Get at least 7-8 hours of sleep regularly",
  "Exercise at least 3 times a week",
  "Go for a medical check-up",
  "Get your eyes tested",
  "Take care of your mental health",
  "Go outside and get sunlight",
  "Wash your hands before eating",
  "Cut back on sugary snacks",
  "Stretch or move during long sitting",
  "Take needed vitamins or medications",
  "Talk to someone you trust",
  "Avoid smoking or secondhand smoke",
  "Limit your screen time before bed",
  "Practice mindfulness or meditation",
  "Eat a healthy breakfast",
  "Practice safe sex (if applicable)",
  "Take a break when feeling overwhelmed"
]

export default function HealthChecklistMain() {
  const [checked, setChecked] = useState([])

  const toggleCheck = (item) => {
    setChecked(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-xl shadow-md mt-24">
            <div className="pointer-events-none fixed inset-0 z-[-1]">
                <Silk
                speed={5}
                scale={1}
                color="#4fff0d"
                noiseIntensity={1.5}
                rotation={0}
                />
            </div>
            <div className="mb-10 p-4 rounded-xl z-10">
                
                <TextPressure
                    text="Health_Checklist"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={100}
                />
            </div>
            <div className="bg-lime-200 p-4 rounded-2xl z-10">
                <h1 className="text-2xl font-bold text-center mb-4 text-green-700 z-10">🩺 Your Yearly Health Checklist</h1>
                <p className="text-sm text-center text-gray-600 mb-6 z-10">How many have you done this year? Tick them off as you go!</p>
                <div className="space-y-3 grid lg:grid-cols-5 sm:grid-cols-1 z-10">
                    {healthHabits.map((habit, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                        <input
                        type="checkbox"
                        checked={checked.includes(habit)}
                        onChange={() => toggleCheck(habit)}
                        className="w-5 h-5 text-green-600"
                        />
                        <span className={`text-base ${checked.includes(habit) ? "line-through text-gray-400" : "text-gray-800"}`}>
                        {habit}
                        </span>
                    </label>
                    ))}
                </div>

                <p className="mt-6 text-center text-green-700 font-medium z-10">
                    ✅ {checked.length} out of {healthHabits.length} done!
                </p>
            </div>
        </div>
    )
}
