const projects = [
  {
    number: "01",
    status: "em produção",
    title: "Relatório de geotecnia",
    stack: "PWA · React · IA",
    link: "https://relatorio-diario-gth-cava.vercel.app",
  },
  {
    number: "02",
    status: "ministério",
    title: "Semente do dia",
    stack: "HTML · CSS · JS",
    link: "https://devocional-reflex-es.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projetos" className="px-8 py-16 border-t border-white/10">
      <p className="font-mono text-xs text-amber tracking-wide mb-8">
        // projetos
      </p>
      <div className="grid sm:grid-cols-2 gap-px bg-white/10">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="bg-surface p-5 sm:p-6 hover:bg-surface/70 transition-colors"
          >
            <p className="font-mono text-[10px] text-contour mb-2">
              {project.number} · {project.status}
            </p>
            <p className="font-display text-ink text-base font-medium">
              {project.title}
            </p>
            <p className="text-xs text-muted mt-1">{project.stack}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
