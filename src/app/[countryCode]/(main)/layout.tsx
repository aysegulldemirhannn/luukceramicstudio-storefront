import { Metadata } from "next"

import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"

import Nav from "@modules/layout/templates/nav"
import Footer from "@modules/layout/templates/footer"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout({ children }: { children: React.ReactNode }) {
  const customer = await retrieveCustomer()
  const cart = await retrieveCart()
  let shippingOptions: StoreCartShippingOption[] = []

  if (cart) {
    const { shipping_options } = await listCartOptions()
    shippingOptions = shipping_options
  }

  return (
    // Tüm sayfa iskeleti: footer alta oturur, arka plan koyu
    <div className="min-h-dvh flex flex-col bg-white">
      <Nav />

      {/* İçerik alanı: arka plan şeffaf */}
      <main className="flex-1 bg-transparent">
        {/* (İstersen) bu iki blok kalsın */}
        {customer && cart && <CartMismatchBanner customer={customer} cart={cart} />}
        {cart && (
          <FreeShippingPriceNudge
            variant="popup"
            cart={cart}
            shippingOptions={shippingOptions}
          />
        )}

        {/* >>> Beyaz bandı kesen kısım */}
        <div className="content-container py-0 bg-transparent">
          {children}
        </div>
      </main>

      <Footer  showGallery/>
    </div>
  )
}