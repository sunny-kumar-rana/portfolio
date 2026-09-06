function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {new Date().getFullYear()} Sunny Kumar Rana. All rights reserved.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <a
                        href="https://github.com/sunny-kumar-rana"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-accent-red"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="mailto:krsunny3@outlook.com"
                        className="transition-colors hover:text-accent-blue"
                    >
                        Email ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/su-sunny-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-accent-blue"
                    >
                        LinkedIn ↗
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