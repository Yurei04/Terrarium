
import { Separator } from "@/components/ui/separator";
import Footer from "@/pages/homepageSection/footer";
import Hero from "@/pages/homepageSection/hero";
import NavBar from "@/pages/homepageSection/navbar";


export default function Home() {
  return (
    <div>
      <NavBar />

      <Hero />
      <Footer />
    </div>
  );
}
