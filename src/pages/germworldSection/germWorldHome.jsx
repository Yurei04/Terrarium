import BlurText from "@/components/effects/blurText";
import Particles from "@/components/effects/particles";
import TextPressure from "@/components/effects/textPressure";
import GermWorldAbout from "./germWorldAbout";



export default function GermWorldHome() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-black">
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

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
                <div className="mb-10">
                    <TextPressure
                        text="Germ_World!"
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
                    text="Welcome To The Germ World!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8 text-white"
                />
            </div>
            <GermWorldAbout />
        </div>
    );
}
