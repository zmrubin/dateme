export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal-light">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="section-divider" />
            <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
              Say hello.
            </h2>
          </div>

          <div className="space-y-4 text-warm-muted text-[15px] leading-relaxed">
            <p>
              If something on this page resonated — or even just made you curious — I&apos;d love
              to hear from you. Drop your preferred way to get in touch and I&apos;ll reach out
              within a couple of days.
            </p>
            <p className="text-warm-white/40 text-sm">
              No pressure, no algorithm deciding your fate. Just two people saying hi.
            </p>
          </div>

          {/* Tally embed — replace data-tally-src with your actual Tally form URL */}
          <div className="rounded-sm overflow-hidden">
            <iframe
              data-tally-src="https://tally.so/embed/kdWQAe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="300"
              title="Contact Zachary"
              className="w-full"
              style={{ border: "none", background: "transparent" }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var d = document, w = "https://tally.so/widgets/embed.js";
                    var s = d.createElement("script");
                    s.src = w;
                    s.onload = function() { if(typeof Tally !== 'undefined') Tally.loadEmbeds(); };
                    s.onerror = function() {
                      d.querySelectorAll("[data-tally-src]:not([src])").forEach(function(e) {
                        e.src = e.dataset.tallySrc;
                      });
                    };
                    d.body.appendChild(s);
                  })();
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
