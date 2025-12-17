import ProjectDetails from '../../components/ProjectDetails'

// Generate static params for static export (projects 1-6)
export function generateStaticParams() {
  return Array.from({ length: 6 }, (_, i) => ({
    id: String(i + 1),
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ProjectDetails id={id} />
}

