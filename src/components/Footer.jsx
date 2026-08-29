function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {new Date().getFullYear()} Shubh. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/sunny-kumar-rana"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-neutral-300"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="#contact"
                        className="transition-colors hover:text-neutral-300"
                    >
                        Contact ↑
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer