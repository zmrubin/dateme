export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-warm-white/5 py-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-warm-gold/40 flex items-center justify-center">
            <span className="text-warm-gold font-serif text-xs">Z</span>
          </div>
          <span className="text-warm-white/30 text-xs tracking-wide">Zachary</span>
        </div>
        <p className="text-warm-white/20 text-xs tracking-wide">
          Made with intention.
        </p>
      </div>
    </footer>
  );
}
