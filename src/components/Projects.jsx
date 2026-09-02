import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-white/10 px-6 py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <p className="font-mono text-xs tracking-[0.25em] text-accent-red">
                        03 / PROJECTS
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Things I've built.
                    </h2>
                </div>

                <div className="space-y-6">
                    {projects.map((project) => {
                        const accent =
                            project.accent === 'red'
                                ? 'accent-red'
                                : 'accent-blue'

                        const accentText =
                            project.accent === 'red'
                                ? 'text-accent-red'
                                : 'text-accent-blue'

                        const accentBorder =
                            project.accent === 'red'
                                ? 'border-accent-red/20'
                                : 'border-accent-blue/20'

                        const accentGlow =
                            project.accent === 'red'
                                ? 'bg-accent-red/10'
                                : 'bg-accent-blue/10'

                        return (
                            <article
                                key={project.id}
                                className="group overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                            >
                                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                                    {/* Visual */}
                                    <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-neutral-950 p-8 lg:min-h-[28rem]">
                                        <div
                                            className={`absolute h-56 w-56 rounded-full ${accentGlow} blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-80`}
                                        />

                                        <div
                                            className={`relative flex h-52 w-52 rotate-45 items-center justify-center border ${accentBorder} transition-transform duration-700 group-hover:rotate-[135deg]`}
                                        >
                                            <div className="flex h-36 w-36 -rotate-45 items-center justify-center border border-white/10 transition-transform duration-700 group-hover:-rotate-[135deg]">
                                                <span
                                                    className={`font-mono text-4xl font-medium ${accentText}`}
                                                >
                                                    {project.number}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.25em] text-neutral-700">
                                            {project.title.toUpperCase()}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between p-8 lg:p-12">
                                        <div>
                                            <div className="flex items-center justify-between gap-4">
                                                <p
                                                    className={`font-mono text-xs tracking-[0.2em] ${accentText}`}
                                                >
                                                    {project.number}
                                                </p>

                                                <span className="text-xs text-neutral-600">
                                                    {project.status}
                                                </span>
                                            </div>

                                            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                                                {project.title}
                                            </h3>

                                            <p className="mt-2 text-sm text-neutral-500">
                                                {project.subtitle}
                                            </p>

                                            <p className="mt-8 max-w-xl leading-7 text-neutral-400">
                                                {project.description}
                                            </p>

                                            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                                                {project.technologies.map(
                                                    (technology) => (
                                                        <span
                                                            key={technology}
                                                            className="font-mono text-xs text-neutral-600"
                                                        >
                                                            {technology}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-6">
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className={`project-link ${project.accent === 'red'
                                                    ? 'project-link-red'
                                                    : 'project-link-blue'
                                                    }`}
                                            >
                                                View Project →
                                            </Link>

                                            {project.github.backend && (
                                                <a
                                                    href={project.github.backend}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="project-link project-link-red text-sm text-neutral-600"
                                                >
                                                    Backend ↗
                                                </a>
                                            )}

                                            {project.github.frontend && (
                                                <a
                                                    href={project.github.frontend}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="project-link project-link-blue text-sm text-neutral-600"
                                                >
                                                    Frontend ↗
                                                </a>
                                            )}

                                            {project.github.repository && (
                                                <a
                                                    href={project.github.repository}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="project-link project-link-red text-sm text-neutral-600"
                                                >
                                                    Repository ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects