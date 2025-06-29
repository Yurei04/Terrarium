"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TDEECalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");
  const [tdee, setTdee] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (w && h && a) {
      const bmr = gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;
      const result = bmr * parseFloat(activity);
      setTdee(result.toFixed(2));
    } else {
      setTdee("Invalid input");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <Input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <select className="p-2 rounded" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select className="p-2 rounded" value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="1.2">Sedentary</option>
        <option value="1.375">Lightly active</option>
        <option value="1.55">Moderately active</option>
        <option value="1.725">Very active</option>
        <option value="1.9">Extra active</option>
      </select>
      <Button onClick={calculate}>Calculate TDEE</Button>
      {tdee && <p>TDEE: {tdee} kcal/day</p>}
    </div>
  );
}
