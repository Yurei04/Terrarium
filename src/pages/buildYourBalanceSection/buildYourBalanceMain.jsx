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
import Squares from "@/components/effects/square";


const calculators = [
  {
    component: <BMIconverter />,
    key: "bmi",
    about:
      "The Body Mass Index (BMI) calculator helps you estimate your body fat based on height and weight. It's a quick way to determine if you're underweight, normal, overweight, or obese."
  },
  {
    component: <BMRconverter />,
    key: "bmr",
    about:
      "The Basal Metabolic Rate (BMR) calculator estimates how many calories your body needs at rest to maintain basic functions like breathing and digestion."
  },
  {
    component: <BodyFatEstimator />,
    key: "fat",
    about:
      "This estimator uses your physical measurements to calculate your body fat percentage — an important metric for tracking fitness and overall health."
  },
  {
    component: <IdealWeightCalculator />,
    key: "ideal",
    about:
      "The Ideal Weight Calculator provides a healthy weight range based on your height and body frame, helping set realistic and personalized fitness goals."
  },
  {
    component: <StepToCalorieConverter />,
    key: "steps",
    about:
      "Convert your daily steps into an estimated number of calories burned. Useful for tracking your walking or running activity and understanding energy output."
  },
  {
    component: <TDEECalculator />,
    key: "tdee",
    about:
      "The Total Daily Energy Expenditure (TDEE) calculator shows how many calories you burn per day, including exercise — essential for weight loss or gain planning."
  }
];

export default function BuildYourBalanceMain() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-amber-300">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="pointer-events-none fixed inset-0 z-[-1]">
                    <Squares
                        speed={0.5} 
                        squareSize={40}
                        direction='diagonal'
                        borderColor='#fff'
                        hoverFillColor='#222'
                    />
                </div>
                <div className="mb-10 z-10">
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
            <div className="flex flex-col items-center justify-self-auto text-center p-4 gap-100 z-10">
                {calculators.map((calc, index) => (
                    <div
                    key={calc.key}
                    className={`flex flex-col sm:flex-col lg:flex-row ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } justify-between items-center w-full gap-4 z-10`}
                    >
                    <SpotlightCard
                        className="custom-spotlight-card flex flex-col m-4 z-10"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <p className="text-amber-100 z-10">
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
