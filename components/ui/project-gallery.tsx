const projects = [
  {
    title: "Aurora Interface",
    description:
      "A motion-first landing page concept with layered gradients, soft blur transitions, and a cinematic typography system.",
    href: "https://www.youtube.com/results?search_query=motion+design+landing+page+showcase",
    previewClassName: "project-gif project-gif--aurora",
  },
  {
    title: "Signal Frames",
    description:
      "A visual identity study for a video-driven brand, built around pulse rhythms, editorial grids, and contrast-heavy composition.",
    href: "https://www.youtube.com/results?search_query=brand+identity+motion+design+case+study",
    previewClassName: "project-gif project-gif--signal",
  },
  {
    title: "Echo Loop",
    description:
      "An experimental product teaser system using looping abstract visuals, bold captions, and interactive reveal states on hover.",
    href: "https://www.youtube.com/results?search_query=product+teaser+motion+graphics",
    previewClassName: "project-gif project-gif--echo",
  },
  {
    title: "Afterglow System",
    description:
      "A modular campaign direction that pairs glowing forms, grain texture, and staggered transitions for launch content.",
    href: "https://www.youtube.com/results?search_query=campaign+motion+graphics+launch+video",
    previewClassName: "project-gif project-gif--afterglow",
  },
];

function ProjectGallery() {
  return (
    <section className="relative min-h-screen snap-start bg-[#060606] px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Scroll into a gallery of moving project posters.
          </h2>
          <p className="text-base leading-8 text-stone-300 sm:text-lg">
            Each tile links out to a related YouTube video page, and the project
            description appears on hover.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-white/25"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className={project.previewClassName} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_0.7px,transparent_0.8px)] bg-[length:6px_6px] opacity-20 mix-blend-screen" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200">
                    GIF Preview
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200">
                    YouTube
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="space-y-3 transition duration-500 group-hover:-translate-y-1">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {project.title}
                    </h3>
                    <p className="max-w-md text-sm uppercase tracking-[0.24em] text-stone-300/75">
                      Hover to read project notes
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-end bg-black/70 p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                  <p className="max-w-md text-base leading-7 text-stone-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProjectGallery };
