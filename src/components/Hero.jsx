function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8">
            <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="mb-6 font-mono text-xs tracking-[0.25em] text-accent-red uppercase">
                        Java · Spring Boot · React
                    </p>

                    <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Java Full-Stack
                        <span className="block text-neutral-400">
                            Developer.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
                        I build backend-driven web applications with Spring Boot
                        and modern React interfaces.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="border border-accent-red bg-accent-red px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-transparent hover:text-accent-red"
                        >
                            View Projects →
                        </a>

                        <a
                            href="https://github.com/sunny-kumar-rana"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white/15 px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-accent-blue hover:text-accent-blue"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>

                <div className="relative hidden h-[500px] lg:block">
                    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-red/10 blur-3xl" />

                    <div className="absolute left-[55%] top-[45%] h-64 w-64 rounded-full bg-accent-blue/10 blur-3xl" />

                    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/10" />

                    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-accent-red/20" />

                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-accent-blue/20" />
                </div>
            </div>
        </section>
    )
}

export default Hero