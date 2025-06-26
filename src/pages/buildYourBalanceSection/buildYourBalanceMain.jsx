"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import TextPressure from "@/components/effects/textPressure"
import Balance from "./balance"


const options = [
    {
        id: 1,
        name: "exercise",
        weight: 100
    },
    {
        id: 2,
        name: "exercise",
        weight: 100
    },
    {
        id: 3,
        name: "exercise",
        weight: 100
    },
    {
        id: 4,
        name: "exercise",
        weight: 100
    }

]

export default function BuildYourBalanceMain () {
    return (
        <div className="w-full min-h-screen overflow-x-hidden items-center justify-center flex flex-col">
            <div className="flex flex-col">
                <div style={{position: 'relative', height: '200px'}}>
                    <TextPressure
                        text="Build_Your_Balance"
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
                <div className="flex flex-col items-center justify-center">
                  
                    <div className="flex lg:flex-row md:flex-col items-center justify-center m-5 gap-4">
                        <div className="w-[500px] h-[300px] flex flex-row bg-white rounded-2xl">
                            
                        </div>
                        <div className="w-[500px] h-[300px] flex flex-row bg-white rounded-2xl">

                        </div>
                    </div>
                    <div className="w-full h-[2rem] flex flex-row bg-white rounded-3xl"></div>
                    <div className="w-[10%] h-[3rem] flex flex-row bg-white rounded-3xl justify-center items-center m-2"></div>
                    <div className="w-[20%] h-[3rem] flex flex-row bg-white rounded-3xl justify-center items-center"></div>
                    <div className="w-[50%] h-[5rem] flex flex-row bg-white rounded-3xl justify-center items-center mt-8"></div>
                </div>
            </div>
            <div className="flex flex-1/5 items-center gap-6 my-6">
                {options.map((option) => (
                    <div key={option.id} className="w-[10rem] h-[10rem] flex flex-row bg-white rounded-xl justify-center items-center">
                        {option.name}
                    </div>    
                ))}
            </div>
        </div>
    )
}