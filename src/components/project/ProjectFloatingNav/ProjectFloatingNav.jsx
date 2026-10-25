import React from 'react'
import styles from './ProjectFloatingNav.module.css'

export default function ProjectFloatingNav() {
  return (
    <nav
      className={`${styles.nav} tb`}
      aria-label="Sections"
    >
      <i aria-hidden="true" />
      <a href="#preview">
        Preview
      </a>
      <a href="#description">
        Description
      </a>
      <a href="#impact">
        Impact
      </a>
      <a href="#timeline">
        Timeline
      </a>
      <a href="#showcase">
        Showcase
      </a>
      <a href="#comments">
        Comments
      </a>
    </nav>
  )
}
