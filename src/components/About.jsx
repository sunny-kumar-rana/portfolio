function About() {
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

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <p className="text-xl leading-9 text-neutral-300">
                            I'm a Java full-stack developer focused on building
                            practical web applications with Spring Boot and React.
                        </p>

                        <p className="mt-6 leading-8 text-neutral-500">
                            I enjoy working across the entire application stack —
                            designing databases, building REST APIs, implementing
                            authentication and business logic, and connecting
                            everything to modern frontend interfaces.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="border border-white/10 p-6 transition-colors duration-300 hover:border-accent-red/40">
                            <p className="font-mono text-xs tracking-wider text-accent-red">
                                BACKEND
                            </p>

                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                Java, Spring Boot, Spring Security, JPA, REST APIs,
                                JWT authentication and PostgreSQL.
                            </p>
                        </div>

                        <div className="border border-white/10 p-6 transition-colors duration-300 hover:border-accent-blue/40">
                            <p className="font-mono text-xs tracking-wider text-accent-blue">
                                FRONTEND
                            </p>

                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                React, JavaScript, React Router, Tailwind CSS and
                                responsive interface development.
                            </p>
                        </div>

                        <div className="border border-white/10 p-6 transition-colors duration-300 hover:border-accent-blue/40">
                            <p className="font-mono text-xs tracking-wider text-accent-blue">
                                DATABASE
                            </p>

                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                PostgreSQL, Oracle, SQL, relational data modeling
                                and persistence with JPA.
                            </p>
                        </div>

                        <div className="border border-white/10 p-6 transition-colors duration-300 hover:border-accent-red/40">
                            <p className="font-mono text-xs tracking-wider text-accent-red">
                                APPROACH
                            </p>

                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                Build practical systems, understand the underlying
                                technology and keep the implementation maintainable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About