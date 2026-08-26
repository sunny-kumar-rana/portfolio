const skillGroups = [
    {
        title: 'BACKEND',
        accent: 'red',
        skills: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'Spring Data JPA',
            'REST APIs',
            'JWT Authentication',
        ],
    },
    {
        title: 'FRONTEND',
        accent: 'blue',
        skills: [
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'Tailwind CSS',
            'React Router',
        ],
    },
    {
        title: 'DATABASE',
        accent: 'blue',
        skills: [
            'PostgreSQL',
            'Oracle',
            'SQL',
            'Relational Data Modeling',
        ],
    },
    {
        title: 'TOOLS',
        accent: 'red',
        skills: [
            'Git',
            'GitHub',
            'Maven',
            'Swagger / OpenAPI',
            'IntelliJ IDEA / Eclipse',
            'Linux',
        ],
    },
]

function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-white/10 px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <p className="font-mono text-xs tracking-[0.25em] text-accent-red">
                        02 / SKILLS
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Technologies I work with.
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="border border-white/10 p-7 transition-colors duration-300 hover:border-white/20"
                        >
                            <p
                                className={
                                    group.accent === 'red'
                                        ? 'font-mono text-xs tracking-[0.2em] text-accent-red'
                                        : 'font-mono text-xs tracking-[0.2em] text-accent-blue'
                                }
                            >
                                {group.title}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills