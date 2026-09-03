function About() {
    const areas = [
        {
            label: 'BACKEND',
            accent: 'red',
            description:
                'Java, Spring Boot, Spring Security, JPA, REST APIs, JWT authentication and PostgreSQL.',
        },
        {
            label: 'FRONTEND',
            accent: 'blue',
            description:
                'React, JavaScript, React Router, Tailwind CSS and responsive interface development.',
        },
        {
            label: 'DATABASE',
            accent: 'blue',
            description:
                'PostgreSQL, Oracle, SQL, relational data modeling and persistence with JPA.',
        },
        {
            label: 'APPROACH',
            accent: 'red',
            description:
                'Build practical systems, understand the underlying technology and keep the implementation maintainable.',
        },
    ]

    return (
        <section
            id="about"
            className="border-t border-white/10 px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <p className="font-mono text-xs tracking-[0.25em] text-accent-red">
                        01 / ABOUT
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        A little about me.
                    </h2>
                </div>

                <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
                    <div>
                        <p className="max-w-xl text-xl leading-9 text-neutral-300">
                            I'm a Java full-stack developer focused on building
                            practical web applications with Spring Boot and React.
                        </p>

                        <p className="mt-6 max-w-xl leading-8 text-neutral-500">
                            I enjoy working across the entire application stack —
                            designing databases, building REST APIs, implementing
                            authentication and business logic, and connecting
                            everything to modern frontend interfaces.
                        </p>

                        <div className="mt-10 border-l border-accent-red/30 pl-5">
                            <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                                FOCUS
                            </p>

                            <p className="mt-3 text-sm leading-7 text-neutral-400">
                                Backend-driven applications, clean architecture
                                and reliable business logic.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {areas.map((area, index) => (
                            <div
                                key={area.label}
                                className="group border border-white/10 bg-neutral-950/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
                            >
                                <div className="flex items-center justify-between">
                                    <p
                                        className={`font-mono text-xs tracking-wider ${area.accent === 'red'
                                            ? 'text-accent-red'
                                            : 'text-accent-blue'
                                            }`}
                                    >
                                        {area.label}
                                    </p>

                                    <span className="font-mono text-[10px] text-neutral-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About