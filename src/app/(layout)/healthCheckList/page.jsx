import HealthChecklistMain from "@/pages/healthChecklistSection/healthChecklistMain";
import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";

export default function HealthChecklist () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <HealthChecklistMain />
            <Footer />
        </div>
    )
}