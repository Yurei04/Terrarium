"use client"

import AnimatedContent from "@/components/effects/animatedContent";
import BlurText from "@/components/effects/blurText";
import TextPressure from "@/components/effects/textPressure";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";


export default function WellnessMapHome() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const globeRef = useRef();

    useEffect(() => {
        if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black">
            <div className="pointer-events-none fixed inset-0 z-0 ">
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundColor="rgba(0,0,0,0)"
                showGlobe
                showGraticules={false}
            />
            </div>


            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="mb-10">
                    <TextPressure
                        text="The_Wellness_Map"
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
                <BlurText
                    text="Welcome To The Wellness Map"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 text-white"
                />
            </div>           
            <div className="flex lg:flex-row sm:flex-col text-white items-center justify-center w-full h-screen p-12 mt-6">
                <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center ">
                    <Globe
                        ref={globeRef}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        backgroundColor="rgba(0,0,0,0)"
                        showGlobe
                        showGraticules={false}
                    />
                </div>
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
                    <p className="text-min-md">
                        Quis deserunt cupidatat laborum fugiat non voluptate. Adipisicing cupidatat ullamco dolor commodo non ipsum ea incididunt irure exercitation. Sint tempor eiusmod quis laboris nostrud incididunt adipisicing cupidatat reprehenderit do dolor et.
                        Quis deserunt cupidatat laborum fugiat non voluptate. Adipisicing cupidatat ullamco dolor commodo non ipsum ea incididunt irure exercitation. Sint tempor eiusmod quis laboris nostrud incididunt adipisicing cupidatat reprehenderit do dolor et.
                    </p>
                    <p className="text-min-md">
                        Quis deserunt cupidatat laborum fugiat non voluptate. Adipisicing cupidatat ullamco dolor commodo non ipsum ea incididunt irure exercitation. Sint tempor eiusmod quis laboris nostrud incididunt adipisicing cupidatat reprehenderit do dolor et.
                    </p>
                </AnimatedContent>
            </div>
        </div>
    );
}
