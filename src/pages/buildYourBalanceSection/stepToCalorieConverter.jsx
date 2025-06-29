"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/effects/blurText";

export default function StepToCalorieConverter() {
    const [steps, setSteps] = useState("");
    const [calories, setCalories] = useState(null);

    const convertSteps = () => {
        const count = parseInt(steps);
        const stepLength = 0.762; // meters
        const kcalPerMeter = 0.57;

        if (count > 0) {
        const distance = count * stepLength;
        setCalories((distance * kcalPerMeter).toFixed(2));
        } else {
        setCalories("Invalid input");
        }
    };

    return (
        <div className="w-1/2 min-h-auto flex items-center justify-center flex-col gap-4 p-6 text-white/20 stroke-amber-700 bg-amber-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
            <BlurText
                text="Step To Calorie Converter"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8 text-white"
            />
            
            <Input
                type="number"
                placeholder="Steps walked"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100"
            />
            <Button onClick={convertSteps} className="text-black hover:text-amber-200 hover:bg-amber-700 bg-amber-300">Convert</Button>
            {calories && <p className="text-xl font-semibold text-amber-100">Estimated Calories Burned: {calories} kcal</p>}
        </div>
    );
}
