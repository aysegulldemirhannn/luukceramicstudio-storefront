"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { STORE_ENABLED } from "@lib/flags"
import { Playfair_Display } from "next/font/google"

const BRAND_NAME = "LUUK CERAMIC STUDIO"
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

export default function SideMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      {/* Trigger (hamburger) – sadece mobil */}
      <button
  type="button"
  onClick={() => setOpen(true)}
  aria-label="Open menu"
  className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md
             text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none
             focus:ring-2 focus:ring-white/30 leading-none"
>
  <div className="flex flex-col items-center justify-center gap-1.5">
    <span aria-hidden className="block w-6 h-[2px] bg-current rounded" />
    <span aria-hidden className="block w-6 h-[2px] bg-current rounded" />
    <span aria-hidden className="block w-6 h-[2px] bg-current rounded" />
  </div>
</button>

      {open && (
        <div className="fixed inset-0 z-[100] sm:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute inset-0 bg-white text-neutral-900 flex flex-col">
            {/* Üst bar: X – Marka – Cart(0) */}
            <div className="h-14 flex items-center justify-between px-4 border-b border-black/10">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <span className={`${playfair.className} text-2xl tracking-wide`}>{BRAND_NAME}</span>

              {STORE_ENABLED ? (
                <Link href="/cart" className="text-sm">Cart (0)</Link>
              ) : (
                <span className="text-sm opacity-0 select-none">.</span>
              )}
            </div>

            {/* Menü gövdesi */}
            <div className="flex-1 overflow-y-auto">
              <nav className="h-full flex flex-col items-center justify-center gap-10 py-10">
                {/* Shop – STORE_ENABLED true ise göster */}
                {STORE_ENABLED && (
                  <Link
                    href="/store"
                    onClick={() => setOpen(false)}
                    className={`${playfair.className} text-4xl hover:opacity-70 transition-opacity`}
                  >
                    Shop
                  </Link>
                )}
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`${playfair.className} text-4xl hover:opacity-70 transition-opacity`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className={`${playfair.className} text-4xl hover:opacity-70 transition-opacity`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`${playfair.className} text-4xl hover:opacity-70 transition-opacity`}
                >
                  Contact
                </Link>
                 <Link
                  href="/vessels"
                  onClick={() => setOpen(false)}
                  className={`${playfair.className} text-4xl hover:opacity-70 transition-opacity`}
                >
                  Vessels
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}