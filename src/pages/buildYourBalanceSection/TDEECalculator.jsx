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
        <Select className="" value={gender} onChange={(e) => setGender(e.target.value)} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent value={gender}>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
            </SelectContent>
        </Select>
        <Select className="" value={activity} onChange={(e) => setActivity(e.target.value)} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1.2">Sedentary</SelectItem>
              <SelectItem value="1.375">Lightly active</SelectItem>
              <SelectItem value="1.55">Moderately active</SelectItem>
              <SelectItem value="1.725">Very active</SelectItem>
              <SelectItem value="1.9">Extra active</SelectItem>
            </SelectContent>
        </Select>
      <Button onClick={calculate}>Calculate TDEE</Button>
      {tdee && <p>TDEE: {tdee} kcal/day</p>}
    </div>
  );
}
