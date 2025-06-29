"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col gap-4 w-full max-w-sm">
        <Input
            type="number"
            placeholder="Steps walked"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
        />
        <Button onClick={convertSteps}>Convert</Button>
        {calories && <p>Estimated Calories Burned: {calories} kcal</p>}
        </div>
    );
}
