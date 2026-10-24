import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectHero({ hero }) {
  if (!hero) return null

  return (
    <section
      id="preview"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '48px 32px 0'
      }}
    >
      <Link
        to="/"
        className="back-link"
        style={{ fontWeight: '500' }}
      >
        ← Back to home
      </Link>
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}
      >
        {hero.tags.map(tag => (
          <span
            key={tag}
            className="tg"
            style={{
              background: '#fff',
              border: '1px solid #E5E5E5'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h1
        style={{
          marginTop: '16px',
          fontSize: 'clamp(44px,8vw,96px)',
          lineHeight: '1',
          fontWeight: '700',
          letterSpacing: '-.02em'
        }}
      >
        {hero.title}
      </h1>
      <p
        style={{
          marginTop: '16px',
          fontSize: '24px',
          color: '#444'
        }}
      >
        {hero.subtitle}
      </p>
      <div
        style={{
          marginTop: '40px',
          borderRadius: '24px',
          padding: 'clamp(16px,4vw,56px)',
          background: hero.mockupGradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)'
        }}
      >
        <div
          className="fr"
          data-i="0"
          style={{
            boxShadow: '0 32px 64px rgba(30,30,30,.35)'
          }}
        >
          <div className="bar">
            <i></i>
            <i></i>
            <i></i>
            <span>{hero.mockupUrl || 'yourproduct.com'}</span>
          </div>
          <div
            style={{
              height: 'clamp(220px,40vw,460px)',
              background: hero.mockupImage
                ? `url("${hero.mockupImage}") center / cover no-repeat`
                : hero.mockupGradient || 'linear-gradient(135deg,#F24E1E,#FF7262)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: '500'
            }}
          >
            {hero.mockupContent || null}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          background: '#fff',
          border: '1px solid #E5E5E5',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      >
        {hero.meta.map(item => (
          <div
            key={item.label}
            style={{ padding: '20px 24px' }}
          >
            <p
              style={{
                fontSize: '13px',
                color: '#555'
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontWeight: '700',
                fontSize: '18px',
                marginTop: '4px'
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
