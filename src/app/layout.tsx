import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata = {
  title: "Luuk Ceramic Studio",
  description: "Handmade ceramic vases, sculptures and functional works by Büşra.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
