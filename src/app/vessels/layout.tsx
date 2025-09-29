import type { ReactNode } from "react"
import Nav from "@modules/layout/templates/nav"
import Footer from "@modules/layout/templates/footer"

export default function VesselsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer showGallery={false}/>
    </>
  )
}