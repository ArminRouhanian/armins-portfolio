import React from 'react'
import ProjectLayout from '../../components/project/ProjectLayout/ProjectLayout'
import { projectsData } from '../../data/projectsData'

export default function MetaMondial3D() {
  return <ProjectLayout project={projectsData['metamondial3d']} />
}
