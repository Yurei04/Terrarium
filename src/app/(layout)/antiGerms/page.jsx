"use client"

import AntiGermsGame from '@/pages/antiGermsSection/antiGermsGame'
import AntiGermsHome from '@/pages/antiGermsSection/antiGermsHome'
import Footer from '@/pages/homepageSection/footer'
import NavBar from '@/pages/homepageSection/navbar'


export default function AntiGerms() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <NavBar />
      <AntiGermsHome />
      <AntiGermsGame />
      <Footer />
    </div>
  )
}
