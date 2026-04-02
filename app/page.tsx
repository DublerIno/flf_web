export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-8 px-6 py-24">
        <span className="w-fit rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300">
          Next.js + TailwindCSS
        </span>
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Frontend base ready for your website build.
          </h1>
          <p className="text-lg leading-8 text-zinc-400 sm:text-xl">
            Start from a clean App Router setup with TypeScript, ESLint, and
            TailwindCSS already wired in.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Next.js docs
          </a>
          <a
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind docs
          </a>
        </div>
      </section>
    </main>
  );
}
