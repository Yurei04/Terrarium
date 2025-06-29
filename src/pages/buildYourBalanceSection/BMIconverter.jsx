import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-4 p-6">
            <Input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <Input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <Button onClick={calculateBMI}>
                Calculate BMI
            </Button>
            {bmi && (
                <p className="text-xl font-semibold">
                    Your BMI is: {bmi}
                </p>
            )}
        </div>
    );
}
