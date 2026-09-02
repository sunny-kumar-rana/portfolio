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
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div>
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
                        </div>

                        <span className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            {project.status}
                        </span>
                    </div>

                    <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-400">
                        {project.description}
                    </p>
                </header>

                {/* Project visual */}
                <div className="group relative mt-16 flex min-h-80 items-center justify-center overflow-hidden border border-white/10 bg-neutral-950 transition-all duration-500 hover:border-white/20 lg:min-h-[28rem]">
                    <div
                        className={`absolute h-64 w-64 rounded-full ${project.accent === 'red'
                            ? 'bg-accent-red/10'
                            : 'bg-accent-blue/10'
                            } blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-80`}
                    />

                    <div
                        className={`relative flex h-56 w-56 rotate-45 items-center justify-center border ${project.accent === 'red'
                            ? 'border-accent-red/20'
                            : 'border-accent-blue/20'
                            } transition-transform duration-700 group-hover:rotate-[135deg]`}
                    >
                        <div className="flex h-40 w-40 -rotate-45 items-center justify-center border border-white/10 transition-transform duration-700 group-hover:-rotate-[135deg]">
                            <span
                                className={`font-mono text-5xl font-medium ${accentClass}`}
                            >
                                {project.number}
                            </span>
                        </div>
                    </div>

                    <span className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.25em] text-neutral-700">
                        {project.title.toUpperCase()}
                    </span>

                    <span className="absolute right-6 top-6 font-mono text-[10px] tracking-[0.25em] text-neutral-700">
                        {project.technologies[0]}
                    </span>
                </div>


                {/* Features */}
                {project.features && (
                    <section className="mt-20 border-t border-white/10 pt-12">
                        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            KEY FEATURES
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {project.features.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="group border border-white/10 bg-neutral-950/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
                                >
                                    <div className="flex gap-4">
                                        <span
                                            className={`font-mono text-xs ${project.accent === 'red'
                                                ? 'text-accent-red'
                                                : 'text-accent-blue'
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </span>

                                        <p className="text-sm leading-6 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Architecture */}
                {project.architecture && (
                    <section className="mt-20 border-t border-white/10 pt-12">
                        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            ARCHITECTURE
                        </p>

                        <div className="mt-8 border border-white/10 bg-neutral-950 p-8 sm:p-10">
                            <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
                                {project.architecture
                                    .split('→')
                                    .map((part, index, parts) => (
                                        <div
                                            key={`${part}-${index}`}
                                            className="flex items-center gap-4"
                                        >
                                            <span
                                                className={`border px-4 py-3 font-mono text-xs ${index === 0
                                                    ? project.accent === 'red'
                                                        ? 'border-accent-red/20 text-accent-red'
                                                        : 'border-accent-blue/20 text-accent-blue'
                                                    : 'border-white/10 text-neutral-400'
                                                    }`}
                                            >
                                                {part.trim()}
                                            </span>

                                            {index < parts.length - 1 && (
                                                <span className="hidden text-neutral-700 sm:block">
                                                    →
                                                </span>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Technical highlights */}
                {project.technicalHighlights && (
                    <section className="mt-20 border-t border-white/10 pt-12">
                        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                            TECHNICAL HIGHLIGHTS
                        </p>

                        <div className="mt-8 space-y-3">
                            {project.technicalHighlights.map((highlight, index) => (
                                <div
                                    key={highlight}
                                    className="group flex gap-5 border border-white/10 bg-neutral-950/50 p-6 transition-all duration-300 hover:border-white/20"
                                >
                                    <span
                                        className={`shrink-0 font-mono text-xs ${project.accent === 'red'
                                            ? 'text-accent-red'
                                            : 'text-accent-blue'
                                            }`}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <p className="text-sm leading-7 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                                        {highlight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Technology */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        TECHNOLOGY
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="border border-white/10 px-4 py-2 font-mono text-xs text-neutral-500 transition-all duration-300 hover:border-white/20 hover:text-neutral-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Repositories */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                        REPOSITORIES
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                        {project.github.backend && (
                            <a
                                href={project.github.backend}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link project-link-red text-sm text-neutral-500"
                            >
                                Backend ↗
                            </a>
                        )}

                        {project.github.frontend && (
                            <a
                                href={project.github.frontend}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link project-link-blue text-sm text-neutral-500"
                            >
                                Frontend ↗
                            </a>
                        )}

                        {project.github.repository && (
                            <a
                                href={project.github.repository}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link project-link-red text-sm text-neutral-500"
                            >
                                Repository ↗
                            </a>
                        )}
                    </div>
                </section>
                <div className="h-12" />
            </div>
        </main>
    )
}

export default ProjectDetails