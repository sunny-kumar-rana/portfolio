import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                <a
                    href="#"
                    onClick={closeMenu}
                    className="font-mono text-sm font-medium tracking-wider text-white transition-colors hover:text-accent-red"
                >
                    SHUBH SHUBH
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-neutral-400 transition-colors hover:text-accent-red"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="https://github.com/sunny-kumar-rana"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-accent-blue"
                    >
                        GitHub ↗
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="text-neutral-300 transition-colors hover:text-accent-red md:hidden"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-sm text-neutral-300 transition-colors hover:text-accent-red"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="https://github.com/sunny-kumar-rana"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-accent-blue"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar