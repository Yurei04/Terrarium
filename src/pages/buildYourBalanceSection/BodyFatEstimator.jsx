"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import BlurText from "@/components/effects/blurText";

export default function BodyFatEstimator() {
const [waist, setWaist] = useState("");
const [neck, setNeck] = useState("");
const [hip, setHip] = useState("");
const [height, setHeight] = useState("");
const [gender, setGender] = useState("male");
const [bodyFat, setBodyFat] = useState(null);

    const calculate = () => {
        const w = parseFloat(waist);
        const n = parseFloat(neck);
        const h = parseFloat(height);
        const hp = parseFloat(hip);

        if (gender === "male" && w && n && h) {
        const bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
        setBodyFat(bf.toFixed(2));
        } else if (gender === "female" && w && n && h && hp) {
        const bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
        setBodyFat(bf.toFixed(2));
        } else {
        setBodyFat("Invalid input");
        }
    };

    return (
        <div className=" w-1/2 min-h-auto flex items-center justify-center flex-col gap-4 p-6 text-white/20 stroke-amber-700 bg-amber-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
            <BlurText
                text="Body Fat Estimator"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8 text-white"
            />
            <Input type="number" placeholder="Waist (cm)" value={waist} onChange={(e) => setWaist(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100" />
            <Input type="number" placeholder="Neck (cm)" value={neck} onChange={(e) => setNeck(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100" />
            <Input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100" />
            {gender === "female" && (
                <Input type="number" placeholder="Hip (cm)" value={hip} onChange={(e) => setHip(e.target.value)} className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100"/>
            )}

            <Select className="" value={gender} onChange={(e) => setGender(e.target.value)} >
                <SelectTrigger className="w-[180px] text-black hover:text-amber-200 hover:bg-amber-700 bg-amber-400">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent value={gender}>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                </SelectContent>
            </Select>
            
            <Button onClick={calculate} className="text-black hover:text-amber-200 hover:bg-amber-700 bg-amber-300">Estimate Body Fat %</Button>
            {bodyFat && <p className="text-xl font-semibold text-amber-100">Body Fat %: {bodyFat}%</p>}
        </div>
    );
}
