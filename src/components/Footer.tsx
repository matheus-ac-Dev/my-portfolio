export default function Footer() {
  return (
    <footer className="py-6 border-t border-zinc-800 mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()}. Todos os direitos reservados.  
        Reprodução total ou parcial deste material é proibida sem autorização prévia.

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
