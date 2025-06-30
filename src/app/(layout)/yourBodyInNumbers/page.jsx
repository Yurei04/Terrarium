import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";
import YourBodyInNumbersMain from "@/pages/yourBodyInNumbersSection/yourBodayInNumberMain";
import YourBodyInNumbersHome from "@/pages/yourBodyInNumbersSection/yourBodyInNumbersHome";

export default function YourBodyInNumbers () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <YourBodyInNumbersHome />
            <YourBodyInNumbersMain />
            <Footer />
        </div>
    )
}