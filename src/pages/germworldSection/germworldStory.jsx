"use client"

import PixelTransition from "@/components/effects/pixelTransition";
import Magnet from "@/components/effects/magnet";
import { Separator } from "@/components/ui/separator";
import BlurText from "@/components/effects/blurText";


const germs = [
    {
        title: "E. coli",
        type: "Bacteria",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "Escherichia coli is a common bacterium found in the intestines. While most strains are harmless, some can cause food poisoning and urinary tract infections.",
        transmission: "Contaminated food or water, especially undercooked beef or raw vegetables."
    },
    {
        title: "Influenza Virus",
        type: "Virus",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "The influenza virus causes the flu, a contagious respiratory illness. It spreads through droplets and mutates rapidly, requiring annual vaccines.",
        transmission: "Airborne droplets from coughs, sneezes, or talking."
    },
    {
        title: "Salmonella",
        type: "Bacteria",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "Salmonella is a bacteria often found in undercooked poultry and eggs. It can cause diarrhea, fever, and abdominal cramps within hours of infection.",
        transmission: "Eating raw or undercooked eggs, poultry, or contact with contaminated surfaces."
    },
    {
        title: "Norovirus",
        type: "Virus",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "Norovirus is a highly contagious virus known for causing stomach flu. It spreads through contaminated food or surfaces and causes vomiting and diarrhea.",
        transmission: "Contact with contaminated surfaces, food, or infected individuals."
    },
    {
        title: "Staphylococcus aureus",
        type: "Bacteria",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "This bacterium lives on skin and in the nose. Some strains, like MRSA, are resistant to antibiotics and can cause serious infections.",
        transmission: "Direct contact with infected wounds or contaminated hands, surfaces, or objects."
    },
    {
        title: "Rotavirus",
        type: "Virus",
        image: "/images/Virus-amico.png",
        Realimage: "/images/Virus-pana.png",
        des: "Rotavirus is a major cause of diarrhea among infants and young children. Vaccines are available and have significantly reduced its global impact.",
        transmission: "Fecal-oral route, often through contaminated hands or surfaces."
    }
];


const medicine = [
    {
        title: "Amoxicillin",
        image: "/images/Virus-pana.png",
        des: "A widely used antibiotic that treats bacterial infections like strep throat, pneumonia, and ear infections.",
        usedFor: "Bacterial infections (e.g., E. coli, Staphylococcus)"
    },
    {
        title: "Oseltamivir (Tamiflu)",
        image: "/images/Virus-pana.png",
        des: "An antiviral drug used to reduce the severity and duration of influenza (flu) symptoms if taken early.",
        usedFor: "Influenza virus"
    },
    {
        title: "Oral Rehydration Salts (ORS)",
        image: "/images/Virus-pana.png",
        des: "A fluid replacement treatment used to prevent dehydration from diarrhea caused by viruses like Rotavirus or Norovirus.",
        usedFor: "Rotavirus, Norovirus (for symptom relief)"
    },
    {
        title: "Ciprofloxacin",
        image: "/images/Virus-pana.png",
        des: "A broad-spectrum antibiotic often used to treat infections like Salmonella or urinary tract infections.",
        usedFor: "Bacterial infections (e.g., Salmonella)"
    },
    {
        title: "Vancomycin",
        image: "/images/Virus-pana.png",
        des: "A strong antibiotic used to treat serious infections caused by resistant bacteria like MRSA.",
        usedFor: "Staphylococcus aureus (MRSA)"
    }
];


export default function GermWorldStory () {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="flex flex-col items-center justify-center text-center overflow-x-hidden">
            <div className="flex flex-col items-center justify-center w-full px-12">
                <BlurText
                    text="Bacteria & Viruses"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-4xl mb-8 text-white"
                />
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
                        gridSize={12}
                        pixelColor='#ffffff'
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                        />

                            <div className="flex flex-col m-2">
                                <div className="flex flex-row gap-5 items-center justify-center">
                                    <Magnet className="text-white text-2xl" padding={20} disabled={false} magnetStrength={5}>
                                        <h1>{germ.title}</h1>
                                    </Magnet>
                                    <Magnet className="text-white max-w-sm" padding={50} disabled={false} magnetStrength={5}>
                                        <h3>{germ.type}</h3>
                                    </Magnet>
                                </div>
                                    <Magnet className="text-white max-w-md" padding={50} disabled={false} magnetStrength={5}>
                                        <p>{germ.des}</p>
                                    </Magnet>
                                    <Separator className="m-2" />
                                    <Magnet className="text-white max-w-md" padding={50} disabled={false} magnetStrength={5}>
                                        <p><b>transmission: </b>{germ.transmission}</p>
                                    </Magnet>
                            </div>
                        
                    </div>
                ))}

                <div className="w-full flex flex-col items-center justify-center mt-12">
                <BlurText
                    text="Medicines"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-4xl mb-8 text-white"
                />
                    {medicine.map((med, index) => (
                        <div
                        key={index}
                        className={`w-full h-auto flex p-4 items-center ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                        >
                    
                        <PixelTransition
                        firstContent={
                            <img
                            src={med.image}
                            alt="default pixel transition content, a cat!"
                            style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 100}}
                            />
                        }
                        gridSize={12}
                        pixelColor='#ffffff'
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                        />


                            <div className="flex flex-col m-4">
                                <Magnet className="text-white text-lg mb-2" padding={20} disabled={false} magnetStrength={5}>
                                    <h2>{med.title}</h2>
                                </Magnet>
                                <Magnet className="text-white max-w-md" padding={50} disabled={false} magnetStrength={5}>
                                    <p>{med.des}</p>
                                </Magnet>
                                    <Separator className="m-2" />
                                <Magnet className="text-white max-w-md" padding={50} disabled={false} magnetStrength={5}>
                                    <p>{med.usedFor}</p>
                                </Magnet>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </div>
    )
}