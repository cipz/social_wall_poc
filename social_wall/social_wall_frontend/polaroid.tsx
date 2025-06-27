import { cn } from "@/lib/utils"

interface PolaroidProps {
  src: string
  alt: string
  caption?: string
  profileSrc?: string
  profileAlt?: string
  hashtags?: string
  className?: string
  rotation?: number
}

export default function Polaroid({
  src,
  alt,
  caption,
  profileSrc,
  profileAlt = "Profile",
  hashtags,
  className,
  rotation = 0,
}: PolaroidProps) {
  return (
    <div
      className={cn(
        "bg-white p-4 pb-16 transform transition-transform",
        "w-full",
        className,
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
        {profileSrc && (
          <div className="absolute bottom-2 left-2">
            <img
              src={profileSrc || "/placeholder.svg"}
              alt={profileAlt}
              className="w-20 h-20 rounded-full border-3 border-white object-cover"
            />
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        {caption && <p className="text-gray-700 font-handwriting text-lg text-center">{caption}</p>}
        {hashtags && <p className="text-gray-500 text-sm text-center font-mono">{hashtags}</p>}
      </div>
    </div>
  )
}
