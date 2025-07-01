"use client"

import AnimatedContent from "@/components/effects/animatedContent";
import Aurora from "@/components/effects/aurora";
import BlurText from "@/components/effects/blurText";
import TextPressure from "@/components/effects/textPressure";
import Threads from "@/components/effects/threads";

export default function YourBodyInNumbersHome() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="pointer-events-none fixed inset-0 z-0">
                    <Threads
                        amplitude={3}
                        distance={1}
                        enableMouseInteraction={true}
                    />
                </div>
                <div className="mb-10">
                    <TextPressure
                        text="Your_Body_In_Numbers"
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
            <div className="flex lg:flex-row sm:flex-col text-white items-center justify-center w-full h-screen p-12 mt-6 z-10">
                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                    >
                    <p className="text-min-md mb-6">
                        Your body is always in motion—even when you're still. Every breath, heartbeat, and blink is a silent signal of life, resilience, and health in action. Yet we rarely pause to recognize just how much happens inside us every second.
                    </p>
                    <p className="text-min-md">
                        This experience transforms invisible body processes into visible moments of wonder. By reflecting on your wellness timeline, you’ll uncover just how much your body does to keep you alive, balanced, and well—no matter where you are in your health journey.
                    </p>
                    </AnimatedContent>

            </div>
        </div>
    );
}
