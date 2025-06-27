import Polaroid from "./polaroid"

export default function Component() {
  const photos = [
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Summer vacation",
      caption: "Best summer ever! ☀️",
      rotation: -2,
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Coffee time",
      caption: "Morning coffee ☕",
      rotation: 3,
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "City lights",
      caption: "City nights ✨",
      rotation: -1,
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Beach day",
      caption: "Ocean vibes 🌊",
      rotation: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Polaroid Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
          {photos.map((photo, index) => (
            <Polaroid
              key={index}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              rotation={photo.rotation}
              className="hover:z-10 relative"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Polaroid
            src="/placeholder.svg?height=400&width=400"
            alt="Featured photo"
            caption="Memories that last forever 📸"
            rotation={-1}
            className="mx-auto scale-110"
          />
        </div>
      </div>
    </div>
  )
}
