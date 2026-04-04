import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="section-divider" />
              <h2 className="font-serif text-3xl md:text-4xl text-warm-white leading-snug">
                A bit about me.
              </h2>
            </div>

            <div className="space-y-5 text-warm-muted leading-relaxed text-[15px]">
              <p>
                I&apos;m the kind of person who will suggest a spontaneous trip on a Wednesday
                and have flights booked by Thursday. Travel isn&apos;t just something I do — it&apos;s
                how I think. Every place teaches me something. I&apos;ve surfed breaks I had no
                business being on, eaten things I couldn&apos;t pronounce, and made friends I
                still text from the other side of the world.
              </p>
              <p>
                Back home, you&apos;ll find me at the gym most mornings — not in a punishing way,
                just as a ritual that keeps me sharp and grounded. I love learning new things,
                whether that&apos;s a new skill, a book I can&apos;t put down, or a subject I knew
                nothing about six months ago.
              </p>
              <p>
                Ambition matters to me, but so does knowing how to actually be present. I
                work hard and I also know how to leave work at the door. Life&apos;s too short
                to be half-somewhere.
              </p>
              <p>
                I&apos;m close with my family — not in an obligatory way, in a genuine one. They
                are people I actually want to spend time with. That warmth is something I
                want to build with a partner too.
              </p>
            </div>
          </div>

          {/* Photos */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/photos/about-1.jpg"
                alt="Zachary"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/photos/about-2.jpg"
                alt="Zachary"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
