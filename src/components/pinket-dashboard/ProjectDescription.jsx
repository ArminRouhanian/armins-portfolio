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
          Pinket has three dashboards: one for admins, one for vendors
          (markets), and one for organizations. The team behind them focused on
          financial transactions, making them safe, clear, and automatic. I
          owned the design files and approved internal design decisions, and
          although I focused mainly on the customer app, I strongly influenced
          the dashboards’ design systems and overall workflow. My work covered:
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
            <b
              style={{
                background: 'rgb(242, 78, 30)',
                width: '24px',
                minWidth: '24px'
              }}
            >
              1
            </b>
            Update Admin dashboard aligned with technical refactoring, while
            making sure it is compatible with other operators on other panels.
          </div>
          <div className="ch">
            <b
              style={{
                background: 'rgb(162, 89, 255)',
                width: '24px',
                minWidth: '24px'
              }}
            >
              2
            </b>
            Vendor's Panel: A SaaS for creating and managing orders &amp; stocks
            for online or in-store shopping via pinket.
          </div>
          <div className="ch">
            <b style={{ background: 'rgb(10, 207, 131)', minWidth: '24px' }}>
              3
            </b>
            Organization dashboard: For maintaining Employees &amp; Their credit
          </div>
          <div className="ch">
            <b
              style={{
                background: '#1ABCFE',
                width: '24px',
                flexDirection: 'row',
                minWidth: '24px'
              }}
            >
              4
            </b>
            Smart contract maker (vendor commission)
          </div>
          <div className="ch">
            <b style={{ background: 'rgb(255, 114, 98)', minWidth: '24px' }}>
              5
            </b>
            Responsive redesign for better moderation
          </div>
          <div className="ch">
            <b style={{ background: 'rgb(30, 30, 30)', minWidth: '24px' }}>6</b>
            Updating design system (UntitledUI-based) &amp; For scaling all 3
            panels.
          </div>
        </div>
      </div>
    </section>
  )
}
