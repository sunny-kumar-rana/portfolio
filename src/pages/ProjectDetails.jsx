import { Link, useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
    const { projectId } = useParams()
    const navigate = useNavigate()

    const project = projects.find(
        (item) => item.id === projectId
    )

    if (!project) {
        return (
            <main className="min-h-screen bg-black px-6 py-32 text-white lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="font-mono text-xs tracking-[0.25em] text-accent-red">
                        404
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold">
                        Project not found.
                    </h1>

                    <Link
                        to="/"
                        className="mt-8 inline-block text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        ← Back to portfolio
                    </Link>
                </div>
            </main>
        )
    }

    const accentClass =
        project.accent === 'red'
            ? 'text-accent-red'
            : 'text-accent-blue'

    return (
        <main className="min-h-screen bg-black px-6 py-32 text-white lg:px-8">
            <div className="mx-auto max-w-5xl">
                <button
                    type="button"
                    onClick={() => navigate('/#projects')}
                    className="font-mono text-xs tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
                >
                    ← BACK TO PROJECTS
                </button>

                {/* Header */}
                <header className="mt-16">
                    <p
                        className={`font-mono text-xs tracking-[0.25em] ${accentClass}`}
                    >
                        PROJECT {project.number}
                    </p>

                    <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
                        {project.title}
                    </h1>

                    <p className="mt-3 text-lg text-neutral-500">
                        {project.subtitle}
                    </p>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
                        {project.description}
                    </p>
                </header>

                {/* Project visual placeholder */}
                <div className="mt-16 flex min-h-80 items-center justify-center border border-white/10 bg-neutral-950">
                    <div
                        className={`font-mono text-xs tracking-[0.3em] text-neutral-700`}
                    >
                        PROJECT {project.number}
                    </div>
                </div>

                {/* Status */}
                <section className="mt-16 border-t border-white/10 pt-12">
                    <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        STATUS
                    </p>

                    <p className="mt-4 text-neutral-300">
                        {project.status}
                    </p>
                </section>

                {/* Features */}
                {project.features && (
                    <section className="mt-16 border-t border-white/10 pt-12">
                        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            KEY FEATURES
                        </p>

                        <div className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex gap-3 text-sm leading-6 text-neutral-400"
                                >
                                    <span className={accentClass}>—</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Architecture */}
                {project.architecture && (
                    <section className="mt-16 border-t border-white/10 pt-12">
                        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            ARCHITECTURE
                        </p>

                        <div className="mt-8 overflow-x-auto border border-white/10 bg-neutral-950 px-6 py-8">
                            <p className="whitespace-nowrap text-center font-mono text-sm text-neutral-400">
                                {project.architecture}
                            </p>
                        </div>
                    </section>
                )}

                {/* Technical highlights */}
                {project.technicalHighlights && (
                    <section className="mt-16 border-t border-white/10 pt-12">
                        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            TECHNICAL HIGHLIGHTS
                        </p>

                        <div className="mt-8 space-y-4">
                            {project.technicalHighlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="border-l border-white/10 pl-5 text-sm leading-7 text-neutral-400"
                                >
                                    {highlight}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Technology */}
                <section className="mt-16 border-t border-white/10 pt-12">
                    <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        TECHNOLOGY
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="border border-white/10 px-4 py-2 font-mono text-xs text-neutral-400"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Repositories */}
                <section className="mt-16 border-t border-white/10 pt-12">
                    <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        REPOSITORIES
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6">
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
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ProjectDetails