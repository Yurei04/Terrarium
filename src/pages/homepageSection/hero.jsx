"use client"

import GlareHover from "@/components/effects/glareHover"
import GridDistortion from "@/components/effects/gridDistortion"
import Squares from "@/components/effects/square"
import TextPressure from "@/components/effects/textPressure"
import Waves from "@/components/effects/waves"
import Link from "next/link"


const games = [
    {
        title: "Germ World",
        link: "/germWorld",
        img: "/images/bkg4.jpg"
    },
    {
        title: "Myth Or Medicine",
        link: "/mythOrMedicine",
        img: "/images/bkg7.jpg"
    },
    {
        title: "Wellness Map",
        link: "/theWellnessMap",
        img: "/images/bkg1.jpg"
    },
    {
        title: "Build Your Balance",
        link: "/buildYourBalance",
        img: "/images/bkg5.jpg"
    },
    {
        title: "Your Body In Numbers",
        link: "/yourBodyInNumbers",
        img: "/images/bkg10.jpg"
    },
    {
        title: "Health Time Machine",
        link: "/healthTimeMachine",
        img: "/images/bkg6.jpg"
    },
    {
        title: "Chat Care",
        link: "/chatCare",
        img: "/images/bkg3.jpg"
    },
    {
        title: "Life Line",
        link: "/lifeLines",
        img: "/images/bkg2.jpg"
    },
    {
        title: "Anti Germs",
        link: "/antiGerms",
        img: "/images/bkg9.jpg"
    },
    {
        title: "Health Check List",
        link: "/healthCheckList",
        img: "/images/bkg8.jpg"
    },
    {
        title: "Comming Soon",
        link: "/healthCheckList",
        img: "/images/bkg1.jpg"
    },
    
]

export default function Hero () {
    return (
        <div className="w-full h-min-screen flex flex-col items-center justify-center p-6">
             <div className="pointer-events-none fixed inset-0 z-[-1]">
                <Squares 
                speed={0.3} 
                squareSize={60}
                direction='diagonal'
                borderColor='#8deba6'
                hoverFillColor='#222'
                />
            </div>
            <div className="mb-4 p-4 rounded-xl mt-24">
                    <TextPressure
                        text="Terrarium"
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
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-center justify-center p-4 m-12  gap-12">
                {games.map((game, index) => (

                    <Link key={index} href={game.link} className="p-6 rounded-2xl items-center justify-center flex flex-col text-center hover:scale-105">
                        <div className="w-[25rem] h-[10rem]"> 
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-30}
                                glareSize={300}
                                transitionDuration={800}
                                playOnce={false}
                                className="border border-white hover:border-2"
                            >

                                <h2 className="text-white">{game.title}</h2>
                                <img src={game.img} className="border opacity-75 "></img>
                            </GlareHover>
                        
                         </div>   
                    </Link>

                ))
                }
            </div>
        </div>
    )
}