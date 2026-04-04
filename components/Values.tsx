import Image from "next/image";

const values = [
  {
    icon: "✦",
    title: "Family, genuinely.",
    body: "Not as an obligation — as a priority. The people I love most are people I actually want to be around. I want to build that same warmth with a partner.",
  },
  {
    icon: "✦",
    title: "Find the good.",
    body: "Life deals everyone bad days. I choose to look for what's working. That's not naivety — it's a daily decision I think matters enormously.",
  },
  {
    icon: "✦",
    title: "Animals aren't optional.",
    body: "I'm an animal person. Animals have a way of revealing who someone really is, and I'm drawn to people who feel that too.",
  },
  {
    icon: "✦",
    title: "City and country, both.",
    body: "I love a good farmers market as much as a great restaurant. I don't need one world — I want both.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 md:py-32 bg-charcoal-light">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Values list */}
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="section-divider" />
              <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
                What I actually care about.
              </h2>
            </div>

            <div className="space-y-8">
              {values.map((v) => (
                <div key={v.title} className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-warm-gold text-xs">{v.icon}</span>
                    <h3 className="font-serif text-warm-white text-lg">{v.title}</h3>
                  </div>
                  <p className="text-warm-muted text-sm leading-relaxed pl-5">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/photos/family.jpg"
              alt="Zachary with family"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
