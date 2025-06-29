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
        <div className="flex flex-col w-full max-w-sm">

            <Input placeholder="Weight (Kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <Input placeholder="height (cm)" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            <Input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />

            <Select className="" value={gender} onChange={(e) => setGender(e.target.value)} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent value={gender}>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
            </SelectContent>
            </Select>
            
        </div>
    )
}