import Image from "next/image"
import { Playfair_Display, Lora } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "About – Luuk Ceramic Studio",
  description:
    "About Luuk Ceramic Studio. Sculptural and functional ceramics by Büşra.",
}

// ✅ Default export bir React component OLMALI
export default function AboutPage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
          About
        </h1>

        {/* Üstte fotoğraf — /public/about.jpg dosyasını ekleyin */}
        <div className="relative w-full mb-8">
          <Image
            src="/images/about.jpg"
            alt="Büşra – Luuk Ceramic Studio"
            width={1600}
            height={900}
            priority
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <p className={`${lora.className} text-lg md:text-xl leading-relaxed`}>
          I’m Büşra, the artist behind Luuk Ceramic Studio, based in Latvia. I work
          with stoneware clay using handbuilding techniques, focusing on sculptural
          and functional ceramics. My work is inspired by architecture, the textures
          and colors of nature, and fragments of visual memory.
        </p>
      </div>
    </section>
  )
}