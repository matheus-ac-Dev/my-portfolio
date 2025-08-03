export default function Footer() {
  return (
    <footer className="py-6 border-t border-zinc-800 mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
      <p>© {new Date().getFullYear()} Matheus. Todos os direitos reservados.</p>
      <div className="mt-2 flex justify-center gap-6">
        <a
          href="https://github.com/matheus-ac-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/matheus-ac-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
