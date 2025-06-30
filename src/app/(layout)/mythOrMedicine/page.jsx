import Footer from "@/pages/homepageSection/footer";
import NavBar from "@/pages/homepageSection/navbar";
import MythOrMedicineHome from "@/pages/mythOrMedicineSection/mythOrMedHome";
import MythOrMedicineMain from "@/pages/mythOrMedicineSection/mythOrmedicineMain";

export default function MythOrMedicine () {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <NavBar />
            <MythOrMedicineHome />
            <MythOrMedicineMain />
            <Footer />
        </div>
    )
}