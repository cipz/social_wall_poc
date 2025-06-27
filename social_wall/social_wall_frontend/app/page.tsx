import Polaroid from "../polaroid"

export default function Page() {
  const polaroidData = [
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Doodle art",
      caption: "Creative vibes ✨",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Sarah's profile",
      hashtags: "#art #creative #doodles",
      rotation: -3,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Pattern design",
      caption: "Colorful patterns 🎨",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Mike's profile",
      hashtags: "#patterns #design #colors",
      rotation: 2,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Hand drawn art",
      caption: "Hand drawn magic ✏️",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Emma's profile",
      hashtags: "#handdrawn #sketch",
      rotation: -1,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Abstract doodles",
      caption: "Abstract thoughts 💭",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Alex's profile",
      hashtags: "#abstract #thoughts",
      rotation: 4,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Fun illustrations",
      caption: "Fun times ahead! 🎉",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Luna's profile",
      hashtags: "#fun #party #joy",
      rotation: -2,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Artistic expression",
      caption: "Express yourself 🌟",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Zoe's profile",
      hashtags: "#expression #art #creativity",
      rotation: 1,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Digital art",
      caption: "Digital dreams 💻",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Max's profile",
      hashtags: "#digital #tech #modern",
      rotation: -4,
    },
    {
      src: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      alt: "Vintage vibes",
      caption: "Retro feels 📼",
      profileSrc: "https://img.freepik.com/free-vector/random-fun-hand-drawn-doodle-pattern-background_1048-19869.jpg",
      profileAlt: "Retro's profile",
      hashtags: "#vintage #retro #nostalgia",
      rotation: 3,
    },
  ]

  // Function to generate random spacing between 20 and 40 pixels
  const getRandomSpacing = () => Math.floor(Math.random() * 21) + 20

  // Create 5 columns with different polaroids and random spacing
  const columns = Array.from({ length: 5 }, (_, columnIndex) => {
    return Array.from({ length: 8 }, (_, itemIndex) => {
      const dataIndex = (columnIndex * 8 + itemIndex) % polaroidData.length
      return {
        ...polaroidData[dataIndex],
        spacing: getRandomSpacing(),
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
