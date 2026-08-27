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

                <div className="space-y-8">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group overflow-hidden border border-white/10 transition-colors duration-300 hover:border-white/20"
                        >
                            <div className="grid lg:grid-cols-2">
                                <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-neutral-950 p-8 lg:min-h-96">
                                    <div
                                        className={
                                            project.accent === 'red'
                                                ? 'absolute h-48 w-48 rounded-full bg-accent-red/10 blur-3xl transition-all duration-500 group-hover:bg-accent-red/15'
                                                : 'absolute h-48 w-48 rounded-full bg-accent-blue/10 blur-3xl transition-all duration-500 group-hover:bg-accent-blue/15'
                                        }
                                    />

                                    <div className="relative flex h-full min-h-56 w-full items-center justify-center border border-white/5">
                                        <span className="font-mono text-xs tracking-[0.3em] text-neutral-700">
                                            PROJECT {project.number}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-8 lg:p-12">
                                    <div>
                                        <p
                                            className={
                                                project.accent === 'red'
                                                    ? 'font-mono text-xs tracking-[0.2em] text-accent-red'
                                                    : 'font-mono text-xs tracking-[0.2em] text-accent-blue'
                                            }
                                        >
                                            {project.number}
                                        </p>

                                        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-neutral-500">
                                            {project.subtitle}
                                        </p>

                                        <p className="mt-8 max-w-xl leading-7 text-neutral-400">
                                            {project.description}
                                        </p>

                                        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="font-mono text-xs text-neutral-600"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="mt-6 text-xs text-neutral-600">
                                            {project.status}
                                        </p>
                                    </div>

                                    <div className="mt-10 flex flex-wrap items-center gap-6">
                                        {project.github.backend && (
                                            <a
                                                href={project.github.backend}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm text-neutral-300 transition-colors hover:text-accent-red"
                                            >
                                                Backend ↗
                                            </a>
                                        )}

                                        {project.github.frontend && (
                                            <a
                                                href={project.github.frontend}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm text-neutral-300 transition-colors hover:text-accent-blue"
                                            >
                                                Frontend ↗
                                            </a>
                                        )}

                                        {project.github.repository && (
                                            <a
                                                href={project.github.repository}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm text-neutral-300 transition-colors hover:text-accent-red"
                                            >
                                                Repository ↗
                                            </a>
                                        )}

                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="text-sm text-neutral-500 transition-colors hover:text-white"
                                        >
                                            View Project →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects