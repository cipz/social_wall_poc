import Polaroid from "../polaroid"
import polaroidData from "../data/polaroids.json"

export default async function Page() {
  // Function to generate random spacing between 20 and 40 pixels
  const getRandomSpacing = () => Math.floor(Math.random() * 21) + 20

  // Function to generate random rotation between -15 and 15 degrees
  const getRandomRotation = () => Math.floor(Math.random() * 31) - 15

  // Create 5 columns with different polaroids and random spacing
  // Distribute 9 polaroids across 5 columns: 4 columns with 2 polaroids each, 1 column with 1 polaroid
  const columns = Array.from({ length: 5 }, (_, columnIndex) => {
    const polaroidsPerColumn = columnIndex < 4 ? 2 : 1; // First 4 columns get 2 polaroids, last column gets 1
    return Array.from({ length: polaroidsPerColumn }, (_, itemIndex) => {
      const dataIndex = (columnIndex * 2 + itemIndex) % polaroidData.length
      return {
        ...polaroidData[dataIndex],
        spacing: getRandomSpacing(),
        rotation: getRandomRotation(),
      }
    })
  })

  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: "#0abf53" }}>
      <div className="flex w-full h-full">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 relative overflow-hidden px-4">
            <div className={`flex flex-col ${columnIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"}`}>
              {/* First set of polaroids */}
              {column.map((polaroid, itemIndex) => (
                <div
                  key={`first-${itemIndex}`}
                  className="flex justify-center"
                  style={{ marginBottom: `${polaroid.spacing}px` }}
                >
                  <Polaroid
                    src={polaroid.src}
                    alt={polaroid.alt}
                    caption={polaroid.caption}
                    profileSrc={polaroid.profileSrc}
                    profileAlt={polaroid.profileAlt}
                    hashtags={polaroid.hashtags}
                    rotation={polaroid.rotation}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {column.map((polaroid, itemIndex) => (
                <div
                  key={`second-${itemIndex}`}
                  className="flex justify-center"
                  style={{ marginBottom: `${polaroid.spacing}px` }}
                >
                  <Polaroid
                    src={polaroid.src}
                    alt={polaroid.alt}
                    caption={polaroid.caption}
                    profileSrc={polaroid.profileSrc}
                    profileAlt={polaroid.profileAlt}
                    hashtags={polaroid.hashtags}
                    rotation={polaroid.rotation}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
