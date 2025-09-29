import { Suspense } from "react"
import Link from "next/link"
import SideMenu from "@modules/layout/components/side-menu"
import CartButton from "@modules/layout/components/cart-button"
import { STORE_ENABLED } from "@lib/flags"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-neutral-900 border-b border-white/10">
      {/* 3 kolonlu grid: sol / orta / sağ */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-3 items-center">

        {/* SOL: Hamburger + (desktop) linkler */}
        <div className="flex items-center gap-6 h-full">
          <SideMenu />

          <div className="hidden sm:flex items-center gap-6 h-full text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/vessels" className="hover:text-white">Vessels</Link>
          </div>
        </div>

        {/* ORTA: Marka (gerçekten ortalanmış) */}
        <div className="flex items-center justify-center h-full">
  <Link
    href="/"
    className="text-lg sm:text-xl font-semibold tracking-tight text-white whitespace-nowrap"
  >
    Luuk Ceramic Studio
  </Link>
</div>

        {/* SAĞ: Cart */}
        <div className="flex items-center justify-end h-full">
          <Link
            href="/home"
            className="inline-flex items-center justify-center h-full
                       text-gray-300 hover:text-white whitespace-nowrap leading-none"
            data-testid="nav-cart-link"
          >
            Cart&nbsp;(0)
          </Link>
        </div>

      </nav>
    </div>
  )
}