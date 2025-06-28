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
    }
]

export default function Hero () {
    return (
        <div className="w-full h-min-screen flex flex-col items-center justify-center">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center p-4 m-12">
                {games.map((game, index) => (
                    <Link key={index} className="" href={game.link}>
                        <div className="bg-white w-[15rem] h-auto">
                            <h2>{game.title}</h2>
                            <img src={game.img}></img>
                        </div>   
                    </Link>
                     
                ))

                }
            </div>
        </div>
    )
}