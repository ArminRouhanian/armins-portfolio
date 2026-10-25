import React from 'react'
import styles from './ProjectFloatingNav.module.css'

const defaultItems = [
  { href: '#preview', label: 'Preview' },
  { href: '#description', label: 'Description' },
  { href: '#impact', label: 'Impact' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#comments', label: 'Comments' }
]

export default function ProjectFloatingNav({ items = defaultItems }) {
  return (
    <nav
      className={`${styles.nav} tb`}
      aria-label="Sections"
    >
      <i aria-hidden="true" />
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}
