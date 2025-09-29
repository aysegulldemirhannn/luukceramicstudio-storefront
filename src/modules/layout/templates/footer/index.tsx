import Image from "next/image"

type FooterProps = {
  showGallery?: boolean
}

export default function Footer({ showGallery = true }: FooterProps) {
  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container w-full py-10">
        
        {showGallery && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["/images/home.jpg", "/images/home2.jpg", "/images/home3.jpg"].map(
              (src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image
                    src={src}
                    alt={`Studio image ${i + 1}`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0" />
                </div>
              )
            )}
          </div>
        )}

        <div className="mt-8 flex w-full justify-center text-ui-fg-muted">
          <span className="txt-compact-small">
            © {new Date().getFullYear()} Luuk Ceramic Studio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}