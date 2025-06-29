"use client"

import AnimatedContent from "@/components/effects/animatedContent";
import BlurText from "@/components/effects/blurText";
import TextPressure from "@/components/effects/textPressure";
import { useEffect, useRef } from "react";
import BMIconverter from "./BMIconverter";
import BMRconverter from "./BMRCalculator";
import BodyFatEstimator from "./BodyFatEstimator";
import IdealWeightCalculator from "./IdealWeightCalculator";
import StepToCalorieConverter from "./stepToCalorieConverter";
import TDEECalculator from "./TDEECalculator";
import SpotlightCard from "@/components/effects/spotlightCard";


const calculators = [
  { component: <BMIconverter />, 
    key: "bmi", 
    about:" Incididunt nostrud mollit aliquip adipisicing minim pariatur ealiquip consectetur aliqua aute consectetur enim veniam."},
  { component: <BMRconverter />, key: "bmr", 
    about:" Incididunt nostrud mollit aliquip adipisicing minim pariatur ealiquip consectetur aliqua aute consectetur enim veniam."},
  { component: <BodyFatEstimator />, key: "fat", 
    about:" Incididunt nostrud mollit aliquip adipisicing minim pariatur ealiquip consectetur aliqua aute consectetur enim veniam."},
  { component: <IdealWeightCalculator />, key: "ideal", 
    about:" Incididunt nostrud mollit aliquip adipisicing minim pariatur ealiquip consectetur aliqua aute consectetur enim veniam."},
  { component: <StepToCalorieConverter />, key: "steps" , 
    about:" Incididunt nostrud mollit aliquip adipisicing minim pariatur ealiquip consectetur aliqua aute consectetur enim veniam."},
  { component: <TDEECalculator />, key: "tdee", 
    about:" Incididunt nostrud mollit aliquip adipisicing minim pariatur ealiquip consectetur aliqua aute consectetur enim veniam." },
];
export default function BuildYourBalanceMain() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-amber-300">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="mb-10">
                    <TextPressure
                        text="Build_Your_Balance"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#000000"
                        strokeColor="#ff0000"
                        minFontSize={150}
                    />
                </div>
            </div>           
            <div className="flex flex-col items-center justify-self-auto text-center p-4 gap-100">
                {calculators.map((calc, index) => (
                    <div
                    key={calc.key}
                    className={`flex flex-col sm:flex-col lg:flex-row ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } justify-between items-center w-full gap-4`}
                    >
                    <SpotlightCard
                        className="custom-spotlight-card flex flex-col m-4"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <p className="text-amber-100">
                            {calc.about}
                        </p>
                    </SpotlightCard>
                    {calc.component}
                    </div>
                ))}
            </div>


        </div>
    );
}
