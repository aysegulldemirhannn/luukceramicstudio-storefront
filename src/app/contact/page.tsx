// src/app/contact/page.tsx
import { Instagram } from "lucide-react";
import { Button } from "@medusajs/ui"

import { Playfair_Display, Lora } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500"] })
export const metadata = {
  title: "Contact – Luuk Ceramic Studio",
  description:
    "Feel free to contact me for questions, collaborations, or commissions.",
}

export default function ContactPage() {
  

  return (
    <section className="bg-white text-neutral-900">
  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 text-center">
    <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
      Contact
    </h1>

    <p className={`${lora.className} text-lg md:text-xl leading-relaxed mb-8`}>
      Feel free to contact me for questions, collaborations, or commissions.
    </p>

    <ul className="flex flex-col items-center gap-4 text-lg">
      <li>
        <a
          href="mailto:luuk.ceramicstudio@gmail.com"
          className="underline hover:opacity-80"
        >
          luuk.ceramicstudio@gmail.com
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/luukceramicstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Button variant="secondary" className="inline-flex items-center gap-2">
            View on Instagram
            <Instagram size={20} />
          </Button>
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}