function About() {
  return (
    <section
      id="sobre"
      className="px-8 py-16 border-t border-white/10 max-w-2xl"
    >
      <p className="font-mono text-xs text-amber tracking-wide mb-8">
        // sobre
      </p>
      <p className="font-display text-base sm:text-lg text-ink leading-relaxed">
        Técnico de mineração migrando de carreira para desenvolvimento
        front-end. Uso código pra resolver problemas reais do meu próprio dia a
        dia de trabalho em campo.
      </p>
      <p className="text-sm text-muted mt-6 leading-relaxed">
        Formação em Desenvolvimento Web Full Stack pela TripleTen, com
        background em geotecnia de mineração na Anglo American. Construo
        ferramentas que unem esses dois mundos — do registro de inspeções em
        campo até relatórios automatizados.
      </p>
      <div className="flex flex-wrap gap-2 mt-8">
        {["React", "JavaScript", "Node.js", "APIs REST", "Git"].map((skill) => (
          <span
            key={skill}
            className="font-mono text-[11px] text-contour border border-contour/30 px-3 py-1.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
