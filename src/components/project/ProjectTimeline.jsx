import React from 'react'
import SectionHeader from '../common/SectionHeader/SectionHeader'

export default function ProjectTimeline({ timeline }) {
  if (!timeline) return null

  return (
    <section
      id="timeline"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '96px 32px'
      }}
    >
      <SectionHeader
        label="03 · TIMELINE"
        title="How the work evolved"
        style={{ marginBottom: '40px' }}
      />
      <div
        style={{
          marginLeft: '8px',
          paddingLeft: '32px',
          borderLeft: '2px solid var(--color-border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}
      >
        {timeline.steps.map((step, index) => (
          <div
            key={index}
            style={{ position: 'relative' }}
          >
            <i
              style={{
                position: 'absolute',
                left: '-41px',
                top: '4px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: step.dotColor || '#A259FF',
                border: '3px solid #F5F5F5'
              }}
            ></i>
            <p
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#555'
              }}
            >
              {step.period}
            </p>
            <h3
              style={{
                marginTop: '4px',
                fontSize: '24px'
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                marginTop: '8px',
                fontSize: '17px',
                lineHeight: '1.55',
                color: '#444',
                maxWidth: '640px'
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
