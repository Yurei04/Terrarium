"use client"

import AnimatedContent from "@/components/effects/animatedContent";
import BlurText from "@/components/effects/blurText";
import TextPressure from "@/components/effects/textPressure";
import { useEffect, useRef } from "react";


export default function BuildYourBalanceMain() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black">
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
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={100}
                    />
                </div>
            </div>           

        </div>
    );
}
