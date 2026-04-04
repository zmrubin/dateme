import Image from "next/image";

const hobbies = [
  {
    label: "Travel",
    description:
      "I ended up at a fossil market in Taipei haggling with a vendor who spoke zero English. We figured it out. That's travel.",
    photo: "/photos/travel.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    label: "Surfing",
    description:
      "The ocean resets me. I chase waves wherever I go — even mediocre ones. It keeps me humble.",
    photo: "/photos/surfing.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    label: "Always Learning",
    description:
      "Current obsession: whatever I got into last month. I like having something I'm reading, building, or getting weirdly deep on.",
    photo: "/photos/learning.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    label: "My People",
    description:
      "I have friends I've known half my life and ones I made last year. Good people around you is something I take seriously.",
    photo: "/photos/friends.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    label: "Ocean Life",
    description:
      "On the water, in the water, near the water — doesn't matter much. It's where I feel most like myself.",
    photo: "/photos/ocean.jpg",
    aspect: "aspect-[3/4]",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          <div className="space-y-3">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
              How I spend my time.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hobbies.map((h) => (
              <div
                key={h.label}
                className="group relative overflow-hidden rounded-sm bg-charcoal-mid"
              >
                {/* Photo */}
                <div className={`relative ${h.aspect} overflow-hidden`}>
                  <Image
                    src={h.photo}
                    alt={h.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid/90 via-charcoal-mid/20 to-transparent" />
                </div>

                {/* Text */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-warm-gold text-lg">{h.label}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
