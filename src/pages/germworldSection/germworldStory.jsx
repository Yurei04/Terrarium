"use client"

import TextPressure from "@/components/effects/textPressure";
import BlurText from "@/components/effects/blurText";
import { useRef } from 'react';
import VariableProximity from "@/components/effects/variableProximity";
import PixelTransition from "@/components/effects/pixelTransition";
import BlobCursor from "@/components/effects/blobCursor";
import Magnet from "@/components/effects/magnet";
import ScrollReveal from "@/components/effects/scrollReveal";
import SplitText from "@/components/effects/splitText";


const germs = [
    {
        title: "Germ1",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        title: "Germ2",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        title: "Germ3",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        title: "Germ4",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    }
]

const medicine = [
    {
        title: "med1",
        image: "/images/Virus-pana.png",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        title: "med1",
        image: "/images/Virus-pana.png",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        title: "med1",
        image: "/images/Virus-pana.png",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        title: "med1",
        image: "/images/Virus-pana.png",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    }
]

export default function GermWorldStory () {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="flex flex-col items-center justify-center text-center overflow-x-hidden">
            <div className="flex flex-col items-center justify-center w-full px-12">

                {germs.map((germ, index) => (
                    <div
                    key={index}
                    className={`w-full h-auto flex p-4 items-center  ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    >
                        
                        <PixelTransition
                        firstContent={
                            <img
                            src={germ.image}
                            alt="default pixel transition content, a cat!"
                            style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 100}}
                            />
                        }
                        secondContent={
                            <img
                            src={germ.Realimage}
                            alt="default pixel transition content, a cat!"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        }
                        gridSize={12}
                        pixelColor='#ffffff'
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                        />

                            <div className="flex flex-col">
                                <Magnet className="text-white text-lg mb-2" padding={20} disabled={false} magnetStrength={5}>
                                    <h2>{germ.title}</h2>
                                </Magnet>
                                <Magnet className="text-white max-w-md" padding={50} disabled={false} magnetStrength={5}>
                                    <p>{germ.des}</p>
                                </Magnet>
                            </div>
                        
                    </div>
                ))}

                <div className="w-[70%] flex flex-col items-center justify-center mt-12">

                    {medicine.map((med, index) => (
                        <div
                        key={index}
                        className={`w-full h-auto flex p-4 items-center ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                        >
                    
                        <div className="bg-white rounded-2xl w-[200px] h-[200px] flex flex-col items-center justify-center mr-4">
                            <div className="text-black text-lg mb-2">
                                <h2>{med.title}</h2>
                            </div>
                            <div>
                                <img src={med.image} alt={med.title} className="w-24 h-24 object-contain" />
                            </div>
                        </div>


                            <div className="flex flex-col">
                                <Magnet className="text-white text-lg mb-2" padding={20} disabled={false} magnetStrength={5}>
                                    <h2>{med.title}</h2>
                                </Magnet>
                                <Magnet className="text-white max-w-md" padding={50} disabled={false} magnetStrength={5}>
                                    <p>{med.des}</p>
                                </Magnet>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </div>
    )
}