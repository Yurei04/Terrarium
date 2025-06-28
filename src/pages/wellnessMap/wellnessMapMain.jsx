"use client";


import PixelTransition from "@/components/effects/pixelTransition";
import Magnet from "@/components/effects/magnet";
import { Separator } from "@/components/ui/separator";
import BlurText from "@/components/effects/blurText";
import SpotlightCard from "@/components/effects/spotlightCard";
import TiltedCard from "@/components/effects/tiltedCard";


const wellnessMap = [
    {
        country: "Japan",
        location: "Kyoto, Japan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Umeboshi_plum.jpg/640px-Umeboshi_plum.jpg",
        story: `In Japan, when illness strikes, many people brew green tea with honey and soak in a hot yuzu bath. They wear a mask, eat rice porridge with pickled plum, and rest quietly indoors with warmth and care.`
    },
    {
        country: "Brazil",
        location: "Salvador, Brazil",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Canja_de_galinha.jpg/640px-Canja_de_galinha.jpg",
        story: `In Brazil, the scent of boldo tea fills the kitchen. People sip it to soothe fevers and digestive discomfort, while lounging in a hammock and breathing eucalyptus steam. Chicken soup is served with garlic to bring strength back.`
    },
    {
        country: "India",
        location: "Kerala, India",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Khichdi.JPG/640px-Khichdi.JPG",
        story: `In India, healing often begins with a warm bowl of khichdi and a homemade brew of tulsi, ginger, and turmeric. Steam with cloves opens the lungs, while mustard oil massages and quiet rest restore balance.`
    },
    {
        country: "Sweden",
        location: "Malmö, Sweden",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Elderberry.jpg/640px-Elderberry.jpg",
        story: `In Sweden, people sip elderberry syrup and lingonberry juice to boost immunity. Wrapped in wool blankets, they nap in warm rooms while humidifiers keep the air moist. Light soups and scarves help comfort the body.`
    },
    {
        country: "Kenya",
        location: "Kisumu, Kenya",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Uji_ya_Wimbi.jpg/640px-Uji_ya_Wimbi.jpg",
        story: `In Kenya, lemon leaves and ginger are boiled for powerful steam inhalation. Warm uji, a millet porridge, offers comfort, and menthol balm soothes the chest. Rest is taken under shady trees with clean, boiled water nearby.`
    },
    {
        country: "South Korea",
        location: "Busan, South Korea",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Samgyetang.jpg/640px-Samgyetang.jpg",
        story: `In South Korea, warm samgyetang—a ginseng chicken soup—is prepared to restore energy. People bundle up and rest, sipping warm water and applying herbal patches to sore muscles.`
    },
    {
        country: "Mexico",
        location: "Oaxaca, Mexico",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Caldo_de_pollo.jpg/640px-Caldo_de_pollo.jpg",
        story: `In Mexico, caldo de pollo, a chicken soup with lime and chili, is served hot. Vicks vapor rub is applied, and herbal teas like manzanilla help calm the body. A warm blanket and good rest are part of the healing ritual.`
    },
    {
        country: "Germany",
        location: "Munich, Germany",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hustentee.jpg/640px-Hustentee.jpg",
        story: `In Germany, herbal teas made from thyme or chamomile are brewed to calm coughing. People stay warm indoors, eat light meals like soup with rye bread, and use warm compresses for comfort.`
    },
    {
        country: "Philippines",
        location: "Cebu, Philippines",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lugaw_with_hard_boiled_egg.jpg/640px-Lugaw_with_hard_boiled_egg.jpg",
        story: `In the Philippines, hot lugaw (rice porridge) with boiled egg is eaten to regain energy. Calamansi juice is sipped to soothe the throat, and a warm towel is placed on the forehead while resting.`
    },
    {
        country: "Morocco",
        location: "Fes, Morocco",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Moroccan_mint_tea_served.jpg/640px-Moroccan_mint_tea_served.jpg",
        story: `In Morocco, mint tea with lemon and honey is brewed and slowly enjoyed. The warmth opens up breathing, while rest in quiet, shaded rooms allows the body to recover in peace.`
    }
];

export default function WellnessMap() {

return (
  <div className="flex flex-col items-center justify-center text-center overflow-x-hidden">
    <div className="flex flex-col items-center justify-center w-full px-12 overflow-y-hidden">
      {wellnessMap.map((entry, index) => (
        <div
          key={index}
          className={`w-full h-auto flex p-4 items-center ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <TiltedCard
            imageSrc={entry.image}
            altText={`${entry.country} Healing Practice`}
            captionText={entry.country}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text">{entry.country}</p>}
          />

          <SpotlightCard
            className="custom-spotlight-card flex flex-col m-4"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <Magnet className="text-white text-2xl" padding={20} magnetStrength={5}>
              <h1>{entry.country} – {entry.location}</h1>
            </Magnet>
            <Magnet className="text-white max-w-md text-left" padding={50} magnetStrength={5}>
              <p>{entry.story}</p>
            </Magnet>
          </SpotlightCard>
        </div>
      ))}
    </div>
  </div>
);

}
