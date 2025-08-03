'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Contato', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="py-6 border-b border-zinc-800 mb-8">
      <nav className="flex gap-6 justify-center text-sm font-medium">
        {navItems.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${
              pathname === href ? 'text-blue-500 dark:text-blue-400' : ''
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
