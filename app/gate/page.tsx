import GateForm from "@/components/GateForm";

export default function GatePage({
  searchParams,
}: {
  searchParams: { from?: string };
}) {
  return (
    <main className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-sm w-full">
        {/* Monogram */}
        <div className="w-16 h-16 rounded-full border border-warm-gold/50 flex items-center justify-center mx-auto">
          <span className="text-warm-gold font-serif text-xl tracking-widest">Z</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-warm-white font-serif text-2xl tracking-wide">
            A private page.
          </h1>
          <p className="text-warm-white/40 text-sm tracking-wide leading-relaxed">
            If you were sent here, you know the word.
          </p>
        </div>

        <GateForm from={searchParams.from} />
      </div>
    </main>
  );
}
