"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col gap-4 w-full max-w-sm">
        <Input type="number" placeholder="Waist (cm)" value={waist} onChange={(e) => setWaist(e.target.value)} />
        <Input type="number" placeholder="Neck (cm)" value={neck} onChange={(e) => setNeck(e.target.value)} />
        <Input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
        {gender === "female" && (
            <Input type="number" placeholder="Hip (cm)" value={hip} onChange={(e) => setHip(e.target.value)} />
        )}
        <select className="p-2 rounded" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <Button onClick={calculate}>Estimate Body Fat %</Button>
        {bodyFat && <p>Body Fat %: {bodyFat}%</p>}
        </div>
    );
}
