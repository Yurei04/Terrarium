"use client"

import GlareHover from "@/components/effects/glareHover"
import Link from "next/link"


const games = [
    {
        title: "Germ World",
        link: "/germWorld",
        img: "#"
    },
    {
        title: "Myth Or Medicine",
        link: "/mythOrMedicine",
        img: "#"
    },
    {
        title: "Wellness Map",
        link: "/theWellnessMap",
        img: "#"
    },
    {
        title: "Build Your Balance",
        link: "/buildYourBalance",
        img: "#"
    },
    {
        title: "Your Body In Numbers",
        link: "/yourBodyInNumbers",
        img: "#"
    },
    {
        title: "Health Time Machine",
        link: "/healthTimeMachine",
        img: "#"
    },
    {
        title: "Chat Care",
        link: "/buildYourBalance",
        img: "#"
    },
    {
        title: "Life Line",
        link: "/lifeLines",
        img: "#"
    },
    {
        title: "Anti Germs",
        link: "/antiGerms",
        img: "#"
    },
    {
        title: "Health Check List",
        link: "/antiGerms",
        img: "#"
    },
    {
        title: "Comming Soon",
        link: "/buildYourBalance",
        img: "#"
    },
    
]

export default function Hero () {
    return (
        <div className="w-full h-min-screen flex flex-col items-center justify-center">
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
                            >

                                <h2 className="text-white">{game.title}</h2>
                                <img src={game.img} className="border"></img>


                            </GlareHover>
                        
                         </div>   
                    </Link>

                ))

                }
            </div>
 
        </div>
    )
}