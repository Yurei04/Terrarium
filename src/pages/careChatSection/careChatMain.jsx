"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Waves from "@/components/effects/waves"
import TextPressure from "@/components/effects/textPressure"

export default function ChatCareMain() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! I'm here to listen. How are you feeling today?" },
    ])
    const [input, setInput] = useState("")

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage = { sender: "user", text: input }
        const botReply = getBotResponse(input)

        setMessages(prev => [...prev, userMessage, { sender: "Cacha", text: botReply }])
        setInput("")
    }

    const getBotResponse = (message) => {
        message = message.toLowerCase()
        if(message) {
            if (message.includes("sad")) return "I'm really sorry you're feeling this way. You're not alone."
            if (message.includes("happy")) return "That's wonderful! Remember to enjoy the moment 🌼"
            if (message.includes("anxious")) return "Take a deep breath. You’ve got this. One step at a time."
            if (message.includes("tired")) return "Rest is important. It’s okay to take a break."
        } else {
                return "Sorry I do not understand"
        }
        return "I'm here for you. Tell me more about what's on your mind 💬"
    }

    return (
        <div className="w-full h-min-screen flex flex-col items-center justify-center mt-28 mb-12">
            <div className="pointer-events-none fixed inset-0 z-[-1]">
                    <Waves
                        lineColor="#ff007f "
                        backgroundColor="rgba(255, 255, 255, 0.1)"
                        waveSpeedX={0.02}
                        waveSpeedY={0.01}
                        waveAmpX={40}
                        waveAmpY={20}
                        friction={0.9}
                        tension={0.01}
                        maxCursorMove={120}
                        xGap={12}
                        yGap={36}
                    />
                </div>
                <div className="mb-10 p-4 rounded-xl z-10 bg-rose-500/50 ">
                    <TextPressure
                        text="Chat_Care"
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
            <div className="bg-rose-100 items-center justify-center w-full max-w-xl mx-auto h-[500px] rounded-2xl shadow-lg p-4  flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-2 mb-4 p-2">
            {messages.map((msg, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl px-4 py-2 max-w-[80%] ${
                msg.sender === "user"
                    ? "bg-rose-700 text-rose-100 self-end text-right"
                    : "bg-white self-start"
                }`}
            >
                {msg.text}
            </motion.div>
            ))}
        </div>
        <div className="flex gap-2 w-full">
            <Input
            placeholder="Type how you feel..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-rose-500 text-rose-100"
            />
            <Button onClick={handleSend} className="bg-rose-400 hover:bg-rose-500 text-white cursor-pointer">
                Send
            </Button>
        </div>
            </div>      
        
        </div>
    )
}
