import React from 'react'

export default function ProjectDescription({ overview }) {
  if (!overview) return null

  return (
    <section
      id="description"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '96px 32px',
        scrollMarginTop: '0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: '32px 64px'
      }}
    >
      <div>
        <p
          style={{
            fontSize: '13px',
            fontWeight: '700',
            color: '#0C7BD1'
          }}
        >
          01 · OVERVIEW
        </p>
        <h2
          style={{
            marginTop: '8px',
            fontSize: '36px',
            lineHeight: '1.15'
          }}
        >
          About the business
        </h2>
      </div>
      <div
        style={{
          gridColumn: 'span 2',
          minWidth: '0'
        }}
      >
        <p
          style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#222'
          }}
        >
          {overview.p1}
        </p>
        {overview.p2 && (
          <p
            style={{
              marginTop: '20px',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#444'
            }}
          >
            {overview.p2}
          </p>
        )}
        {overview.checklists && overview.checklists.length > 0 && (
          <div
            style={{
              marginTop: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: '12px'
            }}
          >
            {overview.checklists.map(item => (
              <div
                key={item.num}
                className="ch"
              >
                <b
                  style={{
                    background: item.bg || '#1E1E1E',
                    minWidth: '24px'
                  }}
                >
                  {item.num}
                </b>
                {item.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
