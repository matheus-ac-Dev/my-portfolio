import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Meu Portfólio',
    description: 'Projeto pessoal feito com Next.js e Tailwind CSS para exibir meus trabalhos.',
    techs: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://github.com/matheus-ac-Dev/my-portfolio',
  }
]

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
