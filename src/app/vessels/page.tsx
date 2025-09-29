import { Playfair_Display, Lora } from "next/font/google"
import GalleryClient from "./GalleryClient"   // ⬅️ ek

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "Vessels – Luuk Ceramic Studio",
  description: "Selected vessels and ceramic works by Luuk Ceramic Studio.",
}

const IMAGES = [
  { src: "/images/vessels/1.jpg", alt: "Vessel" },
  { src: "/images/vessels/2.jpg", alt: "Vessel" },
  { src: "/images/vessels/3.jpg", alt: "Vessel" },
  { src: "/images/vessels/4.jpg", alt: "Vessel" },
  { src: "/images/vessels/5.JPG", alt: "Vessel" },
  { src: "/images/vessels/6.jpg", alt: "Vessel" },
  { src: "/images/vessels/7.jpg", alt: "Vessel" },
  { src: "/images/vessels/8.jpg", alt: "Vessel" },
  { src: "/images/vessels/9.jpg", alt: "Vessel" },
]

export default function VesselsPage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 text-center">
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold`}>Vessels</h1>
          <p className={`${lora.className} text-lg md:text-xl mt-4 text-neutral-700`}>
            A selection of handbuilt, sculptural and functional pieces.
          </p>
        </header>

        {/* ⬇️ Artık grid burada değil, client galeri var */}
        <GalleryClient images={IMAGES} />
      </div>
       
     
    </section>
  )
}