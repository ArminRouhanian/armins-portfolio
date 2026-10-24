import React from 'react'

export default function ProjectComments() {
  return (
    <section
      id="comments"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '96px 32px 120px'
      }}
    >
      <p
        style={{
          fontSize: '13px',
          fontWeight: '700',
          color: '#0ACF83'
        }}
      >
        05 · FEEDBACK
      </p>
      <h2
        style={{
          margin: '8px 0 40px',
          fontSize: '36px'
        }}
      >
        What the team says
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '24px'
        }}
      >
        <div
          className="cd"
          style={{
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#0D99FF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                color: '#fff'
              }}
            >
              PM
            </span>
            <div>
              <p style={{ fontWeight: '700' }}>[Teammate Name]</p>
              <p
                style={{
                  fontSize: '13px',
                  color: '#666'
                }}
              >
                Product Manager
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333'
            }}
          >
            &quot;[Replace with a short, honest quote from a colleague about
            how it was to work with you on this project.]&quot;
          </p>
        </div>
        <div
          className="cd"
          style={{
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#A259FF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                color: '#fff'
              }}
            >
              FE
            </span>
            <div>
              <p style={{ fontWeight: '700' }}>[Teammate Name]</p>
              <p
                style={{
                  fontSize: '13px',
                  color: '#666'
                }}
              >
                Frontend Developer
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333'
            }}
          >
            &quot;[Replace with a quote about handoff, communication, design
            system clarity, or edge-case handling.]&quot;
          </p>
        </div>
        <div
          className="cd"
          style={{
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#0ACF83',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                color: '#fff'
              }}
            >
              TL
            </span>
            <div>
              <p style={{ fontWeight: '700' }}>[Teammate Name]</p>
              <p
                style={{
                  fontSize: '13px',
                  color: '#666'
                }}
              >
                Team Lead / Engineering
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333'
            }}
          >
            &quot;[Replace with a quote on speed, initiative, business impact,
            or how the work moved the team forward.]&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
