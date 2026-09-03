function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/10 px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <p className="font-mono text-xs tracking-[0.25em] text-accent-red">
                    05 / CONTACT
                </p>

                <div className="mt-8 max-w-3xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Have a project in mind?
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-500">
                        I'm open to interesting projects, opportunities and
                        conversations around software development.
                    </p>
                </div>

                <div className="mt-16 grid gap-3 sm:grid-cols-3">
                    <a
                        href="https://github.com/sunny-kumar-rana"
                        target="_blank"
                        rel="noreferrer"
                        className="group border border-white/10 bg-neutral-950/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-red/30"
                    >
                        <p className="font-mono text-xs tracking-[0.2em] text-accent-red">
                            GITHUB
                        </p>

                        <p className="mt-4 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                            View my repositories ↗
                        </p>
                    </a>

                    <a
                        href="mailto:krsunny3@outlook.com"
                        className="group border border-white/10 bg-neutral-950/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30"
                    >
                        <p className="font-mono text-xs tracking-[0.2em] text-accent-blue">
                            EMAIL
                        </p>

                        <p className="mt-4 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                            krsunny3@outlook.com ↗
                        </p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/su-sunny-dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="group border border-white/10 bg-neutral-950/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30"
                    >
                        <p className="font-mono text-xs tracking-[0.2em] text-accent-blue">
                            LINKEDIN
                        </p>

                        <p className="mt-4 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                            su-sunny-dev ↗
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact