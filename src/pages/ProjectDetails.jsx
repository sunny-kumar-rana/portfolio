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

                <div className="mt-16">
                    <p
                        className={
                            project.accent === 'red'
                                ? 'font-mono text-xs tracking-[0.25em] text-accent-red'
                                : 'font-mono text-xs tracking-[0.25em] text-accent-blue'
                        }
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
                </div>

                <div className="mt-20 border-t border-white/10 pt-12">
                    <h2 className="text-sm font-medium tracking-wide text-white">
                        Technology
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="border border-white/10 px-4 py-2 font-mono text-xs text-neutral-400"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-12">
                    <h2 className="text-sm font-medium tracking-wide text-white">
                        Status
                    </h2>

                    <p className="mt-4 text-neutral-500">
                        {project.status}
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap gap-6 border-t border-white/10 pt-12">
                    {project.github.backend && (
                        <a
                            href={project.github.backend}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-neutral-300 transition-colors hover:text-accent-red"
                        >
                            Backend Repository ↗
                        </a>
                    )}

                    {project.github.frontend && (
                        <a
                            href={project.github.frontend}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-neutral-300 transition-colors hover:text-accent-blue"
                        >
                            Frontend Repository ↗
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
            </div>
        </main>
    )
}

export default ProjectDetails