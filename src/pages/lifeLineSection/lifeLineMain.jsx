"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const lifeTips = [
{ age: 1, tip: "Milk is your main nutrition. Bones are building fast." },
{ age: 2, tip: "Crawling, walking, and playing help your motor skills." },
{ age: 3, tip: "Sleep and storytelling build your growing brain." },
{ age: 4, tip: "Play outside. Fresh air and sun boost immunity." },
{ age: 5, tip: "Immunizations and social skills are key." },
{ age: 6, tip: "Build healthy eating habits early." },
{ age: 7, tip: "Stay active — movement = brain growth." },
{ age: 8, tip: "Emotional support shapes resilience." },
{ age: 9, tip: "Water over soda. Sleep over screens." },
{ age: 10, tip: "Vitamins and playtime are critical." },
{ age: 11, tip: "Talk about feelings. Puberty begins." },
{ age: 20, tip: "Exercise regularly and build strong habits." },
{ age: 30, tip: "Balance work with sleep and social life." },
{ age: 40, tip: "Monitor your heart health and stress levels." },
{ age: 50, tip: "Screenings start to matter. Bone health too." },
{ age: 60, tip: "Focus on stretching, joints, and walking." },
{ age: 70, tip: "Mental stimulation and connection are key." },
{ age: 80, tip: "Stay social, hydrated, and gently active." },
{ age: 90, tip: "Cherish your stories. Keep your mind sharp." },
{ age: 100, tip: "Celebrate. You made it. That’s health in motion." },
    ]

export default function LifeLineMain() {
    return (
        <div className="bg-black text-white">
        {lifeTips.map((item) => (
            <ScrollAge key={item.age} age={item.age} tip={item.tip} />
        ))}
        </div>
    )
    }

    function ScrollAge({ age, tip }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -40% 0px" })

    return (
        <section
        ref={ref}
        className="min-h-screen flex items-center justify-center px-6 py-24 border-b border-white/10 z-10"
        >
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl"
        >
            <div className="text-6xl font-bold text-amber-300 mb-4">
            Age {age}
            </div>
            <p className="text-2xl text-white/90">{tip}</p>
        </motion.div>
        </section>
    )
    }
