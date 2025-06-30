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
        image: "/images/japan.png",
        story: `In Japan, when illness strikes, many people brew green tea with honey and soak in a hot yuzu bath. They wear a mask, eat rice porridge with pickled plum, and rest quietly indoors with warmth and care.`
    },
    {
        country: "Brazil",
        location: "Salvador, Brazil",
        image: "/images/brazil.png",
        story: `In Brazil, the scent of boldo tea fills the kitchen. People sip it to soothe fevers and digestive discomfort, while lounging in a hammock and breathing eucalyptus steam. Chicken soup is served with garlic to bring strength back.`
    },
    {
        country: "India",
        location: "Kerala, India",
        image: "/images/india.jpg",
        story: `In India, healing often begins with a warm bowl of khichdi and a homemade brew of tulsi, ginger, and turmeric. Steam with cloves opens the lungs, while mustard oil massages and quiet rest restore balance.`
    },
    {
        country: "Sweden",
        location: "Malmö, Sweden",
        image: "/images/sweden.png",
        story: `In Sweden, people sip elderberry syrup and lingonberry juice to boost immunity. Wrapped in wool blankets, they nap in warm rooms while humidifiers keep the air moist. Light soups and scarves help comfort the body.`
    },
    {
        country: "Kenya",
        location: "Kisumu, Kenya",
        image: "/images/kenya.png",
        story: `In Kenya, lemon leaves and ginger are boiled for powerful steam inhalation. Warm uji, a millet porridge, offers comfort, and menthol balm soothes the chest. Rest is taken under shady trees with clean, boiled water nearby.`
    },
    {
        country: "South Korea",
        location: "Busan, South Korea",
        image: "/images/southKorea.png",
        story: `In South Korea, warm samgyetang—a ginseng chicken soup—is prepared to restore energy. People bundle up and rest, sipping warm water and applying herbal patches to sore muscles.`
    },
    {
        country: "Mexico",
        location: "Oaxaca, Mexico",
        image: "/images/mexico.png",
        story: `In Mexico, caldo de pollo, a chicken soup with lime and chili, is served hot. Vicks vapor rub is applied, and herbal teas like manzanilla help calm the body. A warm blanket and good rest are part of the healing ritual.`
    },
    {
        country: "Germany",
        location: "Munich, Germany",
        image: "/images/germany.png",
        story: `In Germany, herbal teas made from thyme or chamomile are brewed to calm coughing. People stay warm indoors, eat light meals like soup with rye bread, and use warm compresses for comfort.`
    },
    {
        country: "Philippines",
        location: "Cebu, Philippines",
        image: "/images/philippines.png",
        story: `In the Philippines, hot lugaw (rice porridge) with boiled egg is eaten to regain energy. Calamansi juice is sipped to soothe the throat, and a warm towel is placed on the forehead while resting.`
    },
    {
        country: "Morocco",
        location: "Fes, Morocco",
        image: "/images/morocco.png",
        story: `In Morocco, mint tea with lemon and honey is brewed and slowly enjoyed. The warmth opens up breathing, while rest in quiet, shaded rooms allows the body to recover in peace.`
    },
    {
      country: "Vietnam",
      location: "Hanoi, Vietnam",
      image: "/images/vietnam.jpg",
      story: `In Vietnam, steamy bowls of pho are served to nourish the body during illness. Ginger and lemongrass tea is sipped slowly, and eucalyptus oil is rubbed on the chest to ease breathing. Rest is taken near open windows to let in fresh air.`
    },
    {
        country: "Turkey",
        location: "Istanbul, Turkey",
        image: "/images/turkey.png",
        story: `In Turkey, warm lentil soup with lemon is a go-to comfort food. Herbal teas like linden and sage are brewed to ease the throat. People rest in warm, quiet rooms and wrap themselves in thick wool shawls to stay cozy.`
    },
    {
        country: "Russia",
        location: "Kazan, Russia",
        image: "/images/russia.png",
        story: `In Russia, hot banya (steam baths) are believed to flush out illness. Afterward, herbal tea with honey and lemon is drunk while wrapped in thick blankets. Chicken broth and black bread are common recovery meals.`
    },
    {
        country: "Ethiopia",
        location: "Addis Ababa, Ethiopia",
        image: "/images/ethiopia.png",
        story: `In Ethiopia, healing comes with a strong cup of spiced tea and injera with hot stew. Eucalyptus leaves are boiled for steam therapy, and rest is taken near the hearth, where warmth surrounds the body.`
    },
    {
        country: "Thailand",
        location: "Chiang Mai, Thailand",
        image: "/images/thailand.png",
        story: `In Thailand, soups with galangal, lime, and chili—like tom yum—are believed to clear sinuses and stimulate the immune system. People drink warm pandan or lemongrass tea and lie down with a cool cloth on the head.`
    },
    {
        country: "Italy",
        location: "Florence, Italy",
        image: "/images/italy.png",
        story: `In Italy, brodo (light broth) is often made with vegetables, garlic, and a touch of olive oil. People sip chamomile tea and rest in soft beds with open windows and warm blankets, letting natural breezes aid recovery.`
    },
    {
        country: "Nepal",
        location: "Pokhara, Nepal",
        image: "/images/nepal.png",
        story: `In Nepal, warm thukpa (noodle soup) is prepared to nourish those who are ill. Turmeric milk and herbal infusions from local plants are sipped slowly. Quiet rest in sunny rooms with mountain air is part of the healing process.`
    },
    {
        country: "France",
        location: "Lyon, France",
        image: "/images/france.png",
        story: `In France, herbal teas made from thyme and mint are popular during colds. Light vegetable soup and toasted bread with garlic are served. People rest indoors under thick blankets, sometimes with a lavender sachet nearby.`
    },
    {
        country: "Indonesia",
        location: "Bali, Indonesia",
        image: "/images/indonesia.png",
        story: `In Bali, jamu—a turmeric and tamarind herbal drink—is used for healing. Chicken porridge is eaten warm, and steam baths made from ginger and betel leaves are used to clear the sinuses and relax the body.`
    },
    {
        country: "Iran",
        location: "Shiraz, Iran",
        image: "/images/iran.png",
        story: `In Iran, herbal teas like borage and thyme are given to calm the body. Rice soup with saffron and cinnamon is served gently warm, and the sick are kept indoors with wool blankets and soft lighting for peace and recovery.`
    }

];

export default function WellnessMap() {

return (
  <div className="flex flex-col items-center justify-center text-center overflow-x-hidden">
    <div className="flex flex-col items-center justify-center w-full px-12 overflow-y-hidden">
      {wellnessMap.map((entry, index) => (
        <div
          key={index}
          className={`w-full h-screen flex p-4 items-center ${
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
