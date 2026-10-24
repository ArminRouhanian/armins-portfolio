import React from 'react'

export default function ProjectDescription() {
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
        <p style={{ fontSize: '13px', fontWeight: '700', color: '#0C7BD1' }}>
          01 · OVERVIEW
        </p>
        <h2 style={{ marginTop: '8px', fontSize: '36px', lineHeight: '1.15' }}>
          About the business
        </h2>
      </div>
      <div style={{ gridColumn: 'span 2', minWidth: '0' }}>
        <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#222' }}>
          Pinket is a B2B2C financial wallet for organizational welfare. It
          connects organizations, their employees, and retail partners through
          digital wallets, credit, online shopping, and in-store purchases. It
          pivoted from an online chain-store to this model, and three large
          organizations were set to bring about 4 million users, with roughly
          2000 billion Toman (about $10M) a month in potential.
        </p>
        <p
          style={{
            marginTop: '20px',
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#444'
          }}
        >
          I joined Pinket in 2021 as a backend developer and moved into UI/UX
          design in June 2022. I owned all design files and approved internal
          design decisions, working mainly on the customer app: a React web app
          for employees and customers, designed for mobile only. The team had
          one PM, one APM, one or two frontend developers, and two to four
          backend developers. Product direction came mainly from product
          management, with limited data behind decisions, so I used usability
          tests and phone interviews to ground design choices in user evidence
          wherever the process allowed. My work covered:
        </p>
        <div
          style={{
            marginTop: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: '12px'
          }}
        >
          <div className="ch">
            <b style={{ background: 'rgb(242, 78, 30)' }}>1</b>Digital wallet
            for customers
          </div>
          <div className="ch">
            <b style={{ background: 'rgb(162, 89, 255)' }}>2</b>Modeling BNPL
            &amp; Credits
          </div>
          <div className="ch">
            <b style={{ background: '#0ACF83' }}>3</b>Online shopping
          </div>
          <div className="ch">
            <b style={{ background: 'rgb(26, 188, 254)' }}>
              <br />
            </b>
            In-store purchase Journey
          </div>
          <div className="ch">
            <b style={{ background: 'rgb(255, 114, 98)' }}>5</b>Online &amp;
            In-store payment
          </div>
          <div className="ch">
            <b style={{ background: '#1E1E1E' }}>6</b>Pivot redesign (old UI kit
            to new)
          </div>
        </div>
      </div>
    </section>
  )
}
