import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";
import LifeLineHome from "@/pages/lifeLineSection/lifeLineHome";
import LifeLineMain from "@/pages/lifeLineSection/lifeLineMain";

export default function LifeLines () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <LifeLineHome />
            <LifeLineMain />
            <Footer />
        </div>
    )
}