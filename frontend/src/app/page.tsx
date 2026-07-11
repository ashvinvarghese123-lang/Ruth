import Link from "next/link";
import { Float, PaperAirplane, PaperClip, Pencil, Notebook, StickyNote, Bookmark, FoldedPaper } from "@/components/illustrations";

const FEATURES = [
  {
    title: "Write rough, read beautiful",
    body: "Jot down whatever comes to mind. Ruth's AI turns it into a beautifully written entry — without changing what actually happened.",
  },
  {
    title: "Every page, your choice",
    body: "Your journal is private by default. Share a single page with one person, on your terms, and revoke access any time.",
  },
  {
    title: "Memories, resurfaced",
    body: "\u201COne year ago today\u201D moments appear on their own, so the small things don't get lost.",
  },
];

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ---------------- Hero ---------------- */}
      <section className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <Float speed="float-slow" delayMs={0} className="absolute left-[8%] top-[18%] opacity-80">
          <PaperAirplane size={56} />
        </Float>
        <Float speed="float" delayMs={400} className="absolute right-[10%] top-[24%] opacity-70">
          <PaperClip size={40} />
        </Float>
        <Float speed="float-slow" delayMs={800} className="absolute left-[14%] bottom-[20%] opacity-70">
          <StickyNote size={44} />
        </Float>
        <Float speed="float" delayMs={200} className="absolute right-[14%] bottom-[16%] opacity-80">
          <Pencil size={48} />
        </Float>
        <Float speed="float-slow" delayMs={600} className="absolute right-[6%] top-[52%] opacity-60 hidden md:block">
          <Bookmark size={36} />
        </Float>
        <Float speed="float" delayMs={1000} className="absolute left-[6%] top-[50%] opacity-60 hidden md:block">
          <FoldedPaper size={40} />
        </Float>

        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-ink/50">Ruth</p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[1.1] md:text-7xl">
          Document Yourself
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-ink/60 md:text-lg">
          A quiet place to write your days as they were — then let Ruth help you tell them beautifully.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/signup" className="btn-primary">
            Start writing
          </Link>
          <Link href="/login" className="btn-secondary">
            I already have an account
          </Link>
        </div>
      </section>

      {/* ---------------- Notebook signature moment ---------------- */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="paper-card flex flex-col items-center gap-6 px-8 py-14 text-center md:flex-row md:text-left">
          <Notebook size={96} className="shrink-0" />
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Not another social feed.</h2>
            <p className="mt-3 max-w-lg text-ink/60">
              No followers, no likes, no comments from strangers. Ruth is built around one page at a time —
              written for you, and shared only with the people you choose.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="paper-card p-7">
              <h3 className="font-serif text-xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/8 px-6 py-10 text-center text-xs text-ink/40">
        Ruth — Document Yourself
      </footer>
    </main>
  );
}
