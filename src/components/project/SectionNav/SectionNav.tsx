import React from 'react'
import styles from './SectionNav.module.css'

export interface SectionNavItem {
  href: string
  label: string
}

export interface SectionNavProps {
  items?: SectionNavItem[]
}

const DEFAULT_ITEMS: SectionNavItem[] = [
  { href: '#preview', label: 'Preview' },
  { href: '#description', label: 'Description' },
  { href: '#impact', label: 'Impact' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#comments', label: 'Comments' }
]

export default function SectionNav({ items = DEFAULT_ITEMS }: SectionNavProps) {
  return (
    <div className={styles.wrapper}>
      <nav
        className={`${styles.nav} tb`}
        aria-label="Sections"
      >
        <i aria-hidden="true" />
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
