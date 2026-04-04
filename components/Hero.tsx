import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/photos/hero.jpg"
          alt="Zachary"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Dark gradient overlay — heavier at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 fade-in-up">
        <div className="space-y-6">
          <div className="section-divider" />
          <h1 className="text-4xl md:text-6xl font-serif text-warm-white leading-tight">
            Hi, I&apos;m Zachary.
            <br />
            <span className="text-warm-gold">Maybe we should meet.</span>
          </h1>
          <p className="text-warm-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-light">
            I made this page so you could actually get to know me — not in 150 characters,
            not filtered through an algorithm. Grab a coffee and scroll.
          </p>
          <a
            href="#about"
            className="inline-block border border-warm-gold/60 text-warm-gold text-xs tracking-widest uppercase px-8 py-3 hover:bg-warm-gold hover:text-charcoal transition-all duration-300"
          >
            Get to Know Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-warm-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-warm-gold to-transparent" />
      </div>
    </section>
  );
}
