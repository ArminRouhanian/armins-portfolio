import { useParams, Navigate } from 'react-router-dom'
import ProjectLayout from '../components/project/ProjectLayout/ProjectLayout'
import { getProjectBySlug } from '../data/projectsData'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <ProjectLayout project={project} />
  )
}
