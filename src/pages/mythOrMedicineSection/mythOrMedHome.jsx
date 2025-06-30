"use client"

import AnimatedContent from "@/components/effects/animatedContent";
import BlurText from "@/components/effects/blurText";
import TextPressure from "@/components/effects/textPressure";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MythOrMedicineHome() {

    return (
        <div className="relative w-full min-h-screen overflow-hidden">

            <div className="relative z-1 flex flex-col items-center justify-center min-h-screen text-white text-center ">
                <div className="mb-10">
                    <TextPressure
                        text="Myth_Or_Medicine"
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
                    text="Learn if Myth or Facts"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-8 text-white"
                />
                <Link href="#mythFact">
                    <Button className="bg-blue-100 text-black hover:bg-blue-700 hover:text-blue-100 font-bold cursor-pointer">
                        Lets Go!
                    </Button>
                </Link>
            </div>           
        </div>
    );
}
