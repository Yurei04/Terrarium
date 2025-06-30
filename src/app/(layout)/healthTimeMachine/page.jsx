
"use client"

import HealthTimeMachineHome from "@/pages/healthTimeMachineSection/healthTimeMachineHome"
import HealthTimeMachineMain from "@/pages/healthTimeMachineSection/healthTimeMachineMain"
import Footer from "@/pages/homepageSection/footer"
import NavBar from "@/pages/homepageSection/navbar"

export default function HealthTimeMachine () {

    return (
        <div className=" w-full min-h-screen overflow-hidden">
            <NavBar />
            <HealthTimeMachineHome />
            <HealthTimeMachineMain />
            <Footer />
        </div>
    )
}

