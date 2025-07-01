import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/effects/blurText";

export default function BMIconverter() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100; 

        if (weightNum > 0 && heightNum > 0) {
            const bmiValue = weightNum / (heightNum * heightNum);
            setBmi(bmiValue.toFixed(2));
        } else {
            setBmi("Invalid input");
        }
    };

    return (
        <div className="w-1/2 min-h-auto flex items-center justify-center flex-col gap-4 p-6 text-white/20 stroke-amber-700 bg-amber-900/80 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
            <BlurText
                text="BMI Converter"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8 text-white"
            />
            <Input
                className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100"
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <Input
                className="text-amber-950 hover:bg-amber-200 bg-amber-400 active:border-amber-100 hover:border-amber-100"
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <Button 
            onClick={calculateBMI}
            className="text-black hover:text-amber-200 hover:bg-amber-700 bg-amber-300"
            >
                Calculate BMI
            </Button>
            {bmi && (
                <p className="text-xl font-semibold text-amber-100">
                    Your BMI is: {bmi}
                </p>
            )}
        </div>
    );
}
