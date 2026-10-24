import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectNav({ nav }) {
  if (!nav) return null

  return (
    <section
      className="projnav"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '0 32px 96px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        {nav.prev && (
          <Link
            to={nav.prev.to}
            className="cd pn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 24px',
              flex: nav.next ? '1 1 240px' : '1 1 100%'
            }}
          >
            <span
              style={{
                flex: '0 0 auto',
                display: 'flex'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </span>
            <span
              style={{
                flex: '1 1 0%',
                minWidth: '0px'
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgb(85, 85, 85)'
                }}
              >
                {nav.prev.label}
              </span>
              <br />
              <b
                style={{
                  fontSize: '24px'
                }}
              >
                {nav.prev.title}
              </b>
            </span>
          </Link>
        )}
        {nav.next && (
          <Link
            to={nav.next.to}
            className="cd pn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 24px',
              flex: nav.prev ? '1 1 240px' : '1 1 100%'
            }}
          >
            <span
              style={{
                flex: '1 1 0%',
                minWidth: '0px'
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgb(85, 85, 85)'
                }}
              >
                {nav.next.label}
              </span>
              <br />
              <b
                style={{
                  fontSize: '24px'
                }}
              >
                {nav.next.title}
              </b>
            </span>
            <span
              style={{
                flex: '0 0 auto',
                display: 'flex'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
