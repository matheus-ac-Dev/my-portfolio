type Project = {
  title: string
  description: string
  techs: string[]
  link: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-zinc-300 dark:border-zinc-700 p-4 rounded-xl hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-blue-600 dark:text-blue-400">
        {project.techs.map((tech) => (
          <span key={tech} className="bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}
