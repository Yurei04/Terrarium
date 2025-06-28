"use client"
import GermWorldHome from "@/pages/germworldSection/germWorldHome";
import GermWorldStory from "@/pages/germworldSection/germworldStory"
import { useEffect } from "react";

export default function GermWorld () {
    useEffect(() => {
        console.log("BlobCursor mounted");
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <GermWorldHome />
            <GermWorldStory/>
        </div>
    )
}

