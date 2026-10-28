import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ProjectLayout from '../components/project/ProjectLayout/ProjectLayout'
import { projectsData } from '../data/projectsData'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? (projectsData as Record<string, any>)[slug] : null

  if (!project) {
    return <Navigate to="/" replace />
  }

  return <ProjectLayout project={project} />
}
