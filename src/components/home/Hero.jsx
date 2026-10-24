import React from 'react'
import { Link } from 'react-router-dom'
import HeroAnimation from './HeroAnimation'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '96px 32px 72px'
      }}
    >
      <span
        className="tg"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)'
        }}
      >
        Product designer
      </span>
      <h1
        style={{
          marginTop: '24px',
          fontSize: 'clamp(40px,7vw,84px)',
          lineHeight: '1.15',
          fontWeight: 'var(--font-weight-bold)'
        }}
      >
        I bring&nbsp;
        <span className="sel">
          <i className="hn" style={{ left: '-10px', top: '-10px' }}></i>
          <i className="hn" style={{ right: '-10px', top: '-10px' }}></i>
          <i className="hn" style={{ left: '-10px', bottom: '-10px' }}></i>
          <i className="hn" style={{ right: '-10px', bottom: '-10px' }}></i>
          <span className="cyc">
            <span>
              <b style={{ color: 'rgb(12, 123, 209)' }}>Clarity</b>
              <b style={{ color: 'rgb(138, 63, 240)' }}>Structure</b>
              <b style={{ color: 'rgb(7, 135, 90)' }}>Value</b>
              <b style={{ color: 'rgb(224, 62, 18)' }}>Design</b>
            </span>
          </span>
        </span>{' '}
        <br />
        to your product
      </h1>
      <p
        style={{
          marginTop: '24px',
          maxWidth: '560px',
          fontSize: '20px',
          lineHeight: '1.5',
          color: '#444',
          fontWeight: '500'
        }}
      >
        Hi, I am Armin. I turn fuzzy ideas into products people understand and
        want to use.
      </p>
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          position: 'relative'
        }}
      >
        <a href="#work" className="bt dk">
          View work
        </a>
        <a href="#contact" className="bt">
          Contact me
        </a>
      </div>
      <HeroAnimation />
    </section>
  )
}
