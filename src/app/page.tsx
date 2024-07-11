
import ConnectButton from "@/components/ConnectButton"
import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                Travel based on your Spotify tastes!
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground mb-8">
              Let Voyagify analyze your Spotify playlists and suggest your next dream vacation spot.

              </p>
              <ConnectButton />
            </div>
            <div className="hidden md:block">
              <img src="." alt="Next.js Hero Image" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}