import React from 'react'
import SectionHeader from '../common/SectionHeader/SectionHeader'
import CommentCard from '../common/CommentCard/CommentCard'

export default function ProjectComments({ comments }) {
  if (!comments || comments.length === 0) return null

  return (
    <section
      id="comments"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '96px 32px 120px'
      }}
    >
      <SectionHeader
        label="05 · FEEDBACK"
        title="What the team says"
        style={{ marginBottom: '40px' }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '24px'
        }}
      >
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
