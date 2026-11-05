import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useFooterCtaNudge } from '../../../hooks/useFooterCtaNudge'
import styles from './MainLayout.module.css'

export interface MainLayoutProps {
  children: React.ReactNode
  enableFooterNudge?: boolean
  className?: string
  mainClassName?: string
}

export default function MainLayout({
  children,
  enableFooterNudge = true,
  className = '',
  mainClassName = ''
}: MainLayoutProps) {
  useFooterCtaNudge(enableFooterNudge)

  const containerClasses = className
    ? `${styles.pageContainer} ${className}`
    : styles.pageContainer

  const mainClasses = mainClassName
    ? `${styles.mainContent} ${mainClassName} pgs`
    : `${styles.mainContent} pgs`

  return (
    <div
      id="top"
      className={containerClasses}
    >
      <Header />
      <main
        id="pgs"
        className={mainClasses}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
