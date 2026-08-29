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
                        I'm open to interesting projects, opportunities and conversations
                        around software development.
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                    <a
                        href="https://github.com/sunny-kumar-rana"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-neutral-400 transition-colors hover:text-accent-red"
                    >
                        GitHub ↗
                    </a>

                    <span className="text-sm text-neutral-700">
                        Email — coming soon
                    </span>

                    <span className="text-sm text-neutral-700">
                        LinkedIn — coming soon
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact