import type { ReactNode } from "react"

// Nav yolu sende zaten var:
import Nav from "@modules/layout/templates/nav"

// Footer’ın yolu starter’a göre genelde bu olur.
// Eğer sende farklıysa VSCode’la dosyayı bulun ve yolu düzeltin:
import Footer from "@modules/layout/templates/footer"

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer showGallery/>
    </>
  )
}