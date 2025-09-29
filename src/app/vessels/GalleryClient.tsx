"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Img = { src: string; alt: string }

export default function GalleryClient({ images }: { images: Img[] }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<number | null>(null)

  const openAt = (i: number) => {
    setCurrent(i)
    setOpen(true)
  }
  const close = () => {
    setOpen(false)
    setCurrent(null)
  }

  // ESC ile kapat
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-lg bg-neutral-100 text-left"
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                priority={i < 3}
              />
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {open && current !== null && (
  <div
    className="fixed inset-0 z-[999] bg-black/70"
    onClick={close}
    role="dialog"
    aria-modal="true"
  >
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // içeriye tıklayınca kapanmasın
      >
        {/* Kapat */}
        <button
          aria-label="Close"
          onClick={close}
          className="absolute -top-3 -right-3 text-white/90 hover:text-white"
          title="Close"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* 🔽 Görsel boyut sınırları */}
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={2000}
          height={2000}
          // ekranı aşmasın: genişlik %90vw, yükseklik %85vh, oranı koru
          className="rounded-lg object-contain max-w-[90vw] max-h-[85vh] w-auto h-auto"
          priority
        />
      </div>
    </div>
  </div>
)}
    </>
  )
}