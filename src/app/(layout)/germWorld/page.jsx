"use client"
import GermWorldHome from "@/pages/germworldSection/germWorldHome";
import GermWorldStory from "@/pages/germworldSection/germworldStory"
import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";
import { useEffect } from "react";

export default function GermWorld () {
    useEffect(() => {
        console.log("BlobCursor mounted");
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <NavBar />
            <GermWorldHome />
            <GermWorldStory/>
            <Footer />
        </div>
    )
}

