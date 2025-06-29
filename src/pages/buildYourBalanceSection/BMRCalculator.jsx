"use client"

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import BlurText from "@/components/effects/blurText";

export default function BMRconverter () {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [bmr, setBmr] = useState(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseFloat(age);

        if (w && h && a) {
            const result = gender === "male"
            ? 10 * w + 6.25 * h - 5 * a + 5 
            : 10 * w + 6.25 * h - 5 * a - 161;;
            
            setBmr(result.toFixed(2));
        } else {
            setBmr("Invalid Input");
        }

    }


    return (
        <div className="w-1/2 min-h-auto flex items-center justify-center flex-col gap-4 p-6 text-white/20 stroke-amber-700 bg-amber-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
            <BlurText
                text="BMR Converter"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8 text-white"
            />
            <Input placeholder="Weight (Kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100" />
            <Input placeholder="height (cm)" type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100" />
            <Input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100" />

            <Select value={gender} onChange={(e) => setGender(e.target.value)} >
            <SelectTrigger className="w-[180px] text-black hover:text-amber-200 hover:bg-amber-700 bg-amber-400">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent value={gender}>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
            </SelectContent>
            </Select>
            <Button onClick={calculate} className="text-black hover:text-amber-200 hover:bg-amber-700 bg-amber-300">Calculate BMR</Button>
            {bmr && <p className="text-xl font-semibold text-amber-100">BMR: {bmr} kcal/day</p>}
        </div>
    )
}