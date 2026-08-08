import ContourLines from "./components/ContourLines";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact, { Footer } from "./components/Contact";

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-white/10 bg-bg/90 backdrop-blur-sm">
      <span className="font-mono text-ink text-sm font-medium">DO</span>
      <nav className="flex gap-5 font-mono text-xs text-muted">
        <a href="#sobre">sobre</a>
        <a href="#projetos">projetos</a>
        <a href="#contato">contato</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-8 pt-16 pb-12 overflow-hidden">
      <ContourLines />
      <div className="relative max-w-2xl animate-fade-in">
        <p className="font-mono text-xs text-amber tracking-wide mb-4">
          // desenvolvedor front-end
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-tight">
          Douglas Oliveira
        </h1>
        <p className="font-display text-base sm:text-lg text-muted mt-3 leading-relaxed">
          Técnico de campo que constrói ferramentas para o próprio trabalho —
          agora migrando isso para código.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <a
            href="#projetos"
            className="bg-amber text-[#412402] font-mono text-xs font-medium px-5 py-3 rounded"
          >
            ver projetos
          </a>
          <a
            href="/curriculo-douglas-oliveira.pdf"
            download
            className="border border-white/20 text-ink font-mono text-xs px-5 py-3 rounded"
          >
            baixar cv
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
