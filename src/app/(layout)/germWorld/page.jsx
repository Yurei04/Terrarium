"use client"
import BlobCursor from "@/components/effects/blobCursor"
import GermWorldAbout from "@/pages/germworldSection/germWorldAbout";
import GermWorldHome from "@/pages/germworldSection/germWorldHome";
import GermWorldStory from "@/pages/germworldSection/germworldStory"
import Particles from "@tsparticles/react";
import { useEffect } from "react";

export default function GermWorld () {
    useEffect(() => {
        console.log("BlobCursor mounted");
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <GermWorldHome />
            <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 10,
            }}
            >
                <BlobCursor
                blobType="circle"
                fillColor="#3deb34"
                trailCount={3}
                sizes={[60, 125, 75]}
                innerSizes={[20, 35, 25]}
                innerColor="rgba(255,255,255,0.8)"
                opacities={[0.6, 0.6, 0.6]}
                shadowColor="rgba(0,0,0,0.75)"
                shadowBlur={5}
                shadowOffsetX={10}
                shadowOffsetY={10}
                filterStdDeviation={30}
                useFilter={true}
                fastDuration={0.1}
                slowDuration={0.5}
                zIndex={50}
                />
            </div>
            <GermWorldStory/>
        </div>
    )
}

