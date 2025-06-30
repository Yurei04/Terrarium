"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Slider } from "@/components/ui/slider"

const dataByYear = {
  1920: {
    life: "54 years",
    disease: "Tuberculosis, Pneumonia, Influenza",
    diet: "High in fats, meats, and bread. Few vegetables.",
    care: "Limited access, basic sanitation, no antibiotics."
  },
  1930: {
    life: "59 years",
    disease: "Flu, Malaria, Heart issues",
    diet: "Depression-era meals: beans, bread, cheap meats.",
    care: "Rural access still low, early vaccine work begins."
  },
  1940: {
    life: "62 years",
    disease: "Polio, Rheumatic fever, Infections",
    diet: "Wartime rations, canned goods, low sugar",
    care: "Antibiotics discovered, wartime medicine improves"
  },
  1950: {
    life: "65 years",
    disease: "Polio, Heart Disease, Cancer",
    diet: "Meat-heavy, canned foods, rise of convenience meals.",
    care: "Vaccines emerging, more hospitals, post-war medical growth."
  },
  1960: {
    life: "67 years",
    disease: "Cancer, Heart Disease",
    diet: "TV dinners, processed snacks, sugar boom",
    care: "Widespread vaccination, suburban hospitals"
  },
  1970: {
    life: "68 years",
    disease: "Heart Disease, Stroke, Cancer",
    diet: "Fast food rise, packaged meals, lower veg intake",
    care: "Emergency care improves, defibrillators in use"
  },
  1980: {
    life: "70 years",
    disease: "Heart Disease, HIV/AIDS, Cancer",
    diet: "Microwave meals, soda, synthetic foods",
    care: "Big pharma era begins, more diagnostics"
  },
  1990: {
    life: "71 years",
    disease: "Heart Disease, Diabetes, Stroke",
    diet: "Low-fat craze, processed carbs, frozen meals",
    care: "Medical imaging, early internet in healthcare"
  },
  2000: {
    life: "72 years",
    disease: "Heart Disease, Diabetes, Stroke",
    diet: "Fast food culture, low awareness of sugar/fat intake.",
    care: "Digital health starts, medical globalization"
  },
  2010: {
    life: "74 years",
    disease: "Heart Disease, Mental Illness, Obesity",
    diet: "More health trends, but ultra-processed food common",
    care: "Wearables, telehealth emerging"
  },
  2020: {
    life: "75 years",
    disease: "COVID-19, Mental Health, Lifestyle diseases",
    diet: "Plant-based options rising, ultra-processed food still common.",
    care: "Telemedicine, AI screening, pandemic impact"
  },
  2030: {
    life: "78 years (projected)",
    disease: "Chronic lifestyle diseases, anxiety disorders",
    diet: "Custom AI diets, lab-grown meat more common",
    care: "Remote AI doctors, preventative gene therapy"
  },
  2040: {
    life: "80 years (projected)",
    disease: "Tech-induced mental fatigue, resistant infections",
    diet: "Functional food trends, biotech protein",
    care: "Nanobots in trials, fully digital hospitals"
  },
  2050: {
    life: "82 years (projected)",
    disease: "Pollution-related illness, automation stress",
    diet: "Hyper-personalized plans, climate-affected crops",
    care: "Fully AI-managed health systems, predictive care"
  },
  2100: {
    life: "85+ years (projected)",
    disease: "AI-diagnosed genetic issues, pollution syndromes",
    diet: "Synthetic nutrients, vertical farmed food, algae-based diets",
    care: "Genetic editing, nanomedicine, aging reversal therapies"
  }
}

const minYear = 1920
const maxYear = 2100
const step = 10

export default function HealthTimeMachineMain() {
  const [year, setYear] = useState(1920)

  const handleChange = (value) => {
    const rounded = Math.round(value[0] / step) * step
    setYear(rounded)
  }

  const currentData = dataByYear[year]

  return (
    <section className="z-10 min-h-screen flex flex-col items-center justify-center text-amber-100  p-4 rounded-xl">
      <h2 className="z-10 text-4xl font-bold mb-4 text-center">🧬 Generational Health Time Machine</h2>
      <p className="z-10 mb-8 text-center max-w-xl text-lg">
        Use the slider to travel through time and see how health evolved.
      </p>

      <div className="w-full max-w-md mb-6 z-10">
        <Slider
          min={minYear}
          max={maxYear}
          step={step}
          value={[year]}
          onValueChange={handleChange}
        />
        <div className="text-center mt-2 text-lg font-medium z-10">Year: {year}</div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-xl p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 z-10 "
        >
          {currentData ? (
            <>
              <p className="mb-2"><strong>🧓 Life Expectancy:</strong> {currentData.life}</p>
              <p className="mb-2"><strong>🦠 Common Diseases:</strong> {currentData.disease}</p>
              <p className="mb-2"><strong>🥗 Diet Trends:</strong> {currentData.diet}</p>
              <p><strong>🏥 Healthcare:</strong> {currentData.care}</p>
            </>
          ) : (
            <p className="text-red-400">No data available for this year.</p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
