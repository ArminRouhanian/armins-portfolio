import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import CommentCard from '../../common/CommentCard/CommentCard'
import styles from './ProjectComments.module.css'

export default function ProjectComments({ comments }) {
  if (!comments || comments.length === 0) return null

  return (
    <section id="comments" className={styles.section}>
      <SectionHeader
        label="05 · FEEDBACK"
        title="What the team says"
        className={styles.header}
      />
      <div className={styles.grid}>
        {comments.map((item, index) => (
          <CommentCard
            key={index}
            initials={item.initials}
            avatarBg={item.avatarBg}
            name={item.name}
            role={item.role}
            quote={item.quote}
          />
        ))}
      </div>
    </section>
  )
}
