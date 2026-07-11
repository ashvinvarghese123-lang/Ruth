import Link from "next/link";
import { Float, FoldedPaper, PaperClip } from "@/components/illustrations";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <Float speed="float-slow" className="absolute left-[10%] top-[14%] opacity-60 hidden sm:block">
        <FoldedPaper size={44} />
      </Float>
      <Float speed="float" delayMs={500} className="absolute right-[12%] bottom-[16%] opacity-60 hidden sm:block">
        <PaperClip size={36} />
      </Float>

      <div className="w-full max-w-sm">
        <Link href="/" className="mb-8 block text-center font-serif text-2xl">
          Ruth
        </Link>
        <div className="paper-card p-8">{children}</div>
      </div>
    </main>
  );
}
