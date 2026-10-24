import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectHero() {
  return (
    <>
      <section
        style={{ maxWidth: '1120px', margin: '0 auto', padding: '48px 32px 0' }}
      >
        <Link to="/" style={{ fontWeight: '500' }}>
          ← Back to work
        </Link>
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <span
            className="tg"
            style={{ background: '#fff', border: '1px solid #E5E5E5' }}
          >
            Redesign
          </span>
          <span
            className="tg"
            style={{ background: '#fff', border: '1px solid #E5E5E5' }}
          >
            Responsive
          </span>
          <span
            className="tg"
            style={{ background: '#fff', border: '1px solid #E5E5E5' }}
          >
            Case study
          </span>
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
          MetaMondial3D
        </h1>
        <p style={{ marginTop: '16px', fontSize: '24px', color: '#444' }}>
          Metaverse &amp; NFT Market
        </p>
        <div
          style={{
            marginTop: '40px',
            borderRadius: '24px',
            padding: 'clamp(16px,4vw,56px)',
            background: 'linear-gradient(135deg,#A259FF,#1ABCFE)'
          }}
        >
          <div
            className="fr"
            data-i="0"
            style={{ boxShadow: '0 32px 64px rgba(30,30,30,.35)' }}
          >
            <div className="bar">
              <i></i>
              <i></i>
              <i></i>
              <span>metamondial3d.com</span>
            </div>
            <div
              style={{
                height: 'clamp(220px,40vw,460px)',
                background: 'url(&quot'
              }}
            ></div>
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
          <div style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '13px', color: '#555' }}>Role</p>
            <p
              style={{ fontWeight: '700', fontSize: '18px', marginTop: '4px' }}
            >
              UI/UX Designer
            </p>
          </div>
          <div style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '13px', color: '#555' }}>Timeline</p>
            <p
              style={{ fontWeight: '700', fontSize: '18px', marginTop: '4px' }}
            >
              June - July 2022
            </p>
          </div>
          <div style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '13px', color: '#555' }}>Team</p>
            <p
              style={{ fontWeight: '700', fontSize: '18px', marginTop: '4px' }}
            >
              Lone Freelancer :)
            </p>
          </div>
          <div style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '13px', color: '#555' }}>Platform</p>
            <p
              style={{ fontWeight: '700', fontSize: '18px', marginTop: '4px' }}
            >
              Desktop
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
