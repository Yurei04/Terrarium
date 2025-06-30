import AnimatedContent from "@/components/effects/animatedContent";

export default function GermWorldAbout () {
    return (
        <div className="flex flex-col text-white items-center justify-center w-full h-screen p-12 mt-6">
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
                    <strong>GermWorld</strong> is an interactive journey into the hidden universe of bacteria and viruses that affect our daily lives. From the flu-causing influenza virus to antibiotic-resistant bacteria like MRSA, each germ carries unique traits, transmission methods, and health risks. By understanding them, we take the first step toward protecting ourselves and others.
                </p>
                <p className="text-min-md">
                    Alongside each pathogen, we highlight real-world medicines used to treat or manage infections—showcasing both the dangers we face and the powerful tools at our disposal. Whether you're a student, a health enthusiast, or just curious, GermWorld makes learning about microscopic threats both visual and engaging.
                </p>
            </AnimatedContent>
        </div>
    )
}
