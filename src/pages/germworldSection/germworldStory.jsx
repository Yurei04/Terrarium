"use client"

import TextPressure from "@/components/effects/textPressure";

const germs = [
    {
        title: "Germ1",
        image: "#",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        title: "Germ2",
        image: "#",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        image: "#",
        title: "Germ3",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        image: "#",
        title: "Germ4",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    }
]

const medicine = [
    {
        title: "med1",
        image: "#",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        title: "med1",
        image: "#",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        image: "#",
        title: "med1",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    },
    {
        image: "#",
        title: "med1",
        des: "Pariatur aliqua minim nostrud velit voluptate irure et elit commodo eiusmod nulla id in ad."
    }
]

export default function GermWorldStory () {
    return (
        <div className="flex flex-col items-center justify-center text-center overflow-x-hidden">
            <div style={{position: 'relative', height: '200px'}}>
                <TextPressure
                    text="The_Germ_World!"
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

            <div className="flex flex-col items-center justify-center w-full px-12">


                {germs.map((germ, index) => (
                    <div
                    key={index}
                    className={`w-full h-auto flex p-4 items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    >
                
                    <div className="bg-white rounded-2xl w-[200px] h-[200px] flex flex-col items-center justify-center mr-4">
                        <div className="text-black text-lg mb-2">
                            <h2>{germ.title}</h2>
                        </div>
                        <div>
                            <img src={germ.img} alt={germ.title} className="w-24 h-24 object-contain" />
                        </div>
                    </div>

                    <div className="text-white max-w-md">
                        <p>{germ.des}</p>
                    </div>
                    </div>
                ))}
                <div className="w-[70%] flex flex-col items-center justify-center mt-12">
                    <div className="w-full h-auto bg-white rounded-2xl p-4">
                        <h2>The Medicines</h2>
                        <img src={"#"}/>
                    </div>
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
                                <img src={med.img} alt={med.title} className="w-24 h-24 object-contain" />
                            </div>
                        </div>

                            <div className="text-white max-w-md">
                                <p>{med.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}