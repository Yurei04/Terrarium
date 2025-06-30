import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";
import WellnessMapHome from "@/pages/wellnessMap/wellnessMapHome";
import WellnessMapMain from "@/pages/wellnessMap/wellnessMapMain";


export default function WellnessMap () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <div className="flex flex-col items-center justify-center">
                <WellnessMapHome />
                <WellnessMapMain />
            </div>
            <Footer />
        </div>
    )
}