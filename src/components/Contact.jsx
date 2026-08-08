function Contact() {
  return (
    <section
      id="contato"
      className="px-8 py-16 border-t border-white/10 max-w-2xl"
    >
      <p className="font-mono text-xs text-amber tracking-wide mb-6">
        // contato
      </p>
      <p className="font-display text-xl sm:text-2xl text-ink font-medium leading-snug">
        Aberto a oportunidades como desenvolvedor front-end.
      </p>
      <p className="text-sm text-muted mt-4">
        Se meu trabalho fizer sentido pra sua equipe, vamos conversar.
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
        <a
          href="mailto:dmdoliveira2@outlook.com"
          className="bg-amber text-[#412402] font-mono text-xs font-medium px-5 py-3 rounded"
        >
          enviar email
        </a>
        <a
          href="https://www.linkedin.com/in/douglas-oliveira-14bab9326/"
          target="_blank"
          rel="noreferrer"
          className="border border-white/20 text-ink font-mono text-xs px-5 py-3 rounded"
        >
          linkedin
        </a>
        <a
          href="https://github.com/Dmdoliveira2"
          target="_blank"
          rel="noreferrer"
          className="border border-white/20 text-ink font-mono text-xs px-5 py-3 rounded"
        >
          github
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 py-6 border-t border-white/10">
      <p className="font-mono text-[11px] text-muted">
        © 2026 Douglas Oliveira
      </p>
    </footer>
  );
}

export default Contact;
export { Footer };
