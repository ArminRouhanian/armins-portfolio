import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectedWork() {
  return (
    <section
      id="work"
      style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '48px 32px',
        scrollMarginTop: '0px'
      }}
    >
      <p
        style={{
          fontSize: 'var(--font-size-caption)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-primary-dark)'
        }}
      >
        01 · SELECTED WORK
      </p>
      <h2 style={{ margin: '8px 0 24px', fontSize: 'var(--font-size-h1)' }}>
        <p></p>
        <p>Products I've helped shape</p>
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: '24px'
        }}
      >
        <Link
          to="/works/pinket-customer"
          className="cd"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <div style={{ height: '200px', background: '#A259FF' }}></div>
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <h3 style={{ fontSize: '20px' }}>Pinket: Customer App</h3>
            <p style={{ color: '#555' }}>BNPL shopping network</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="tg">Mobile App</span>
              <span className="tg">Research</span>
            </div>
          </div>
        </Link>
        <Link
          to="/works/pinket-dashboard"
          className="cd"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <div style={{ height: '200px', background: '#0ACF83' }}></div>
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <h3 style={{ fontSize: '20px' }}>Pinket: Dashboards</h3>
            <p style={{ color: '#555' }}>[One-line outcome]</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="tg">Desktop</span>
              <span className="tg">B2B</span>
            </div>
          </div>
        </Link>
        <Link
          to="/works/metamondial3d"
          className="cd"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <div style={{ height: '200px', background: '#F24E1E' }}></div>
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <h3 style={{ fontSize: '20px' }}>MetaMondial3D</h3>
            <p style={{ color: '#555' }}>Metaverse &amp; NFT Market</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="tg">Redesign</span>
              <span className="tg">Responsive</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
