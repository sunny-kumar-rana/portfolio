import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    const closeMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('')
            return
        }

        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting
                )

                if (visibleSection) {
                    setActiveSection(`#${visibleSection.target.id}`)
                }
            },
            {
                rootMargin: '-25% 0px -60% 0px',
                threshold: 0,
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [location.pathname])

    const handleNavigation = (href) => {
        closeMenu()

        if (location.pathname !== '/') {
            navigate(`/${href}`)
            return
        }

        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                <button
                    type="button"
                    onClick={() => {
                        closeMenu()

                        if (location.pathname === '/') {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        } else {
                            navigate('/')
                        }
                    }}
                    className="font-mono text-lg font-medium tracking-wider text-white transition-colors hover:text-accent-red"
                >
                    Sunny Kumar Rana
                </button>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            type="button"
                            onClick={() => handleNavigation(link.href)}
                            className={`text-sm transition-colors ${activeSection === link.href
                                ? 'text-accent-red'
                                : 'text-neutral-400 hover:text-accent-red'
                                }`}
                        >
                            {link.label}
                        </button>
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
                            <button
                                key={link.href}
                                type="button"
                                onClick={() => handleNavigation(link.href)}
                                className={`text-left text-sm transition-colors ${activeSection === link.href
                                    ? 'text-accent-red'
                                    : 'text-neutral-300 hover:text-accent-red'
                                    }`}
                            >
                                {link.label}
                            </button>
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