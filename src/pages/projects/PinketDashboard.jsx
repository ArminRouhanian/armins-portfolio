import React from 'react'
import ProjectLayout from '../../components/project/ProjectLayout/ProjectLayout'
import { projectsData } from '../../data/projectsData'

export default function PinketDashboard() {
  return <ProjectLayout project={projectsData['pinket-dashboard']} />
}
