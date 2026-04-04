"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How religious are you?",
    a: "Cultural and meaningful, not Orthodox. Shabbat dinner matters. The High Holidays matter. Building a Jewish home matters. I'm not counting minutes from sundown, but it's genuinely important to me and I want it to be important to my partner too.",
  },
  {
    q: "City or suburbs?",
    a: "Right now, city. Eventually, open to both — I want land and a farmers market and also a good restaurant within walking distance. Is that too much to ask?",
  },
  {
    q: "What does a good Sunday look like?",
    a: "Morning workout, great coffee, farmers market or a beach walk, good food somewhere — either out or cooked at home. Zero agenda. Maybe something spontaneous in the afternoon.",
  },
  {
    q: "Are you actually active on dating apps?",
    a: "I made this page because I found them exhausting. I wanted to give someone a real chance to know me before they decide. So — this is me trying something different.",
  },
  {
    q: "What's with all the hats?",
    a: "I contain multitudes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          <div className="space-y-3">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
              Things you might be wondering.
            </h2>
          </div>

          <div className="divide-y divide-warm-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <span className="font-serif text-warm-white text-[17px] group-hover:text-warm-gold transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-warm-gold/70 text-lg mt-0.5 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-warm-muted text-sm leading-relaxed pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
