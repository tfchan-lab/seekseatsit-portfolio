export default function App() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full py-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-semibold">MyPortfolio</h1>
          <nav className="space-x-6 text-sm">
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold tracking-tight">
          I build clean, modern web experiences
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Full‑stack developer specializing in Node.js, Tailwind, and SaaS UI design.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            View Projects
          </button>
          <button className="px-6 py-3 border rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold">Fast Development</h3>
          <p className="text-gray-600 mt-2">Modern tooling for rapid iteration.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Clean UI</h3>
          <p className="text-gray-600 mt-2">Minimal, elegant, SaaS‑style interfaces.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Scalable Code</h3>
          <p className="text-gray-600 mt-2">Built with maintainability in mind.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 MyPortfolio — Built by Venia
      </footer>
    </div>
  )
}