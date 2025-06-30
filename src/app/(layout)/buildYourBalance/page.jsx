import BuildYourBalanceMain from "@/pages/buildYourBalanceSection/buildYourBalanceMain";
import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";

export default function BuildYourBalance () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <BuildYourBalanceMain/>
            <Footer />
        </div>
    )
}