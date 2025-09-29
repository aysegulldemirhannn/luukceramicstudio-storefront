import Image from "next/image"
import { Playfair_Display, Lora } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500"] })


const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 min-h-[80vh]">
      {/* Blur'lu background */}
    

      {/* İçerik */}
      <div className="z-10 max-w-3xl px-6">
        <h1
          className={`${playfair.className} text-4xl md:text-6xl font-bold text-black drop-shadow-lg`}
        >
          Luuk Ceramic Studio
        </h1>
        <p
          className={`${lora.className} mt-6 text-lg md:text-xl leading-relaxed text-black drop-shadow`}
        >
         Exploring clay through forms that shift between sculptural and functional. Each piece is handbuilt and inspired by the world around us.
        </p>
      </div>
    </section>
  )
}

export default Hero