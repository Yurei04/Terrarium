"use client"
import { use, useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function IdealWeightCalculator () {
    
    const [ height, setHeight ] = useState("");
    const [ gender, setGender ] = useState("male");
    const [ idealWeight, setIdealWeight ] = useState(null);


    const calculate = () => {
        const h = parseFloat(height);

        if (h > 140) {
            const base = h - 152.4;
            const result = gender === "male"
            ? 50 + 0.9 * base
            : 45.5 + 0.9 * base;

            setIdealWeight(result.toFixed(2));
        } else {
            setIdealWeight("Invalid Height");
        }
    };

    return (
        <div className="w-full h-min-screen ">
            <Input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
                        
            <Select className="" value={gender} onChange={(e) => setGender(e.target.value)} >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent value={gender}>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                </SelectContent>
            </Select>

            <Button onClick={calculate}>calculate Ideal Weight</Button>
            {idealWeight && <p>Ideal Weight: {idealWeight} kg</p>}
        </div>
    )
}