"use client"

import AnimatedContent from "@/components/effects/animatedContent";
import BlurText from "@/components/effects/blurText";
import Particles from "@/components/effects/particles";
import TextPressure from "@/components/effects/textPressure";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AntiGermsHome() {

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black">

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="pointer-events-none fixed inset-0 z-0 ">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
                <div className="mb-10">
                    <TextPressure
                        text="Anti_Germs"
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
                    text="Shoot the germs until Time Runs Out"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-8 text-white"
                />
                <Link href="#antigerm">
                    <Button className="bg-blue-100 text-black hover:bg-blue-700 hover:text-blue-100 font-bold cursor-pointer">
                        Lets Go!
                    </Button>
                </Link>
            </div>           
        </div>
    );
}
