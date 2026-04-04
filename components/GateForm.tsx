"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function GateForm({ from }: { from?: string }) {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/gate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word }),
    });

    setLoading(false);

    if (res.ok) {
      router.push(from && from !== "/gate" ? from : "/");
      router.refresh();
    } else {
      setError(true);
      setWord("");
      inputRef.current?.focus();
      // Remove shake class after animation
      setTimeout(() => setError(false), 600);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div className={error ? "animate-shake" : ""}>
        <input
          ref={inputRef}
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter the secret word"
          autoComplete="off"
          autoFocus
          className="w-full bg-transparent border border-warm-gold/40 rounded-sm px-5 py-3 text-warm-white placeholder-warm-white/30 text-center tracking-widest uppercase text-sm focus:outline-none focus:border-warm-gold transition-colors"
        />
        {error && (
          <p className="text-center text-red-400/80 text-xs mt-2 tracking-wide">
            Not quite — try again.
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading || !word.trim()}
        className="w-full bg-warm-gold/90 hover:bg-warm-gold text-charcoal font-medium py-3 rounded-sm tracking-widest uppercase text-xs transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "..." : "Enter"}
      </button>
    </form>
  );
}
