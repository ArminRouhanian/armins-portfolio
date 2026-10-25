import React from 'react'
import Badge from '../common/Badge/Badge'
import SectionHeader from '../common/SectionHeader/SectionHeader'

export default function ProjectImpact({ impact }) {
  if (!impact) return null

  return (
    <div className="iw">
      <div className="ibw">
        <div className="ib"></div>
      </div>
      <section
        id="impact"
        style={{
          position: 'relative',
          zIndex: '1',
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '96px 32px'
        }}
      >
        <div className="stk">
          <div>
            <SectionHeader
              dark
              label="02 · IMPACT"
              title="Impact at a glance"
              titleClassName="i-t1"
            />
            <p
              className="i-t2"
              style={{
                marginTop: '12px',
                fontSize: 'var(--font-size-body-lg)',
                lineHeight: 'var(--line-height-body-lg)'
              }}
            >
              {impact.intro}
            </p>
            <div
              className="ims"
              style={{ marginTop: '32px' }}
            >
              {impact.metrics.map(m => (
                <div
                  key={m.numLabel + m.title}
                  className="is-desc"
                >
                  <p
                    className={m.kClass}
                    style={{ fontSize: '13px', fontWeight: '700' }}
                  >
                    {m.numLabel}
                  </p>
                  <h3
                    className="i-t1"
                    style={{
                      marginTop: '8px',
                      fontSize: '28px',
                      lineHeight: '1.2'
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="i-t2"
                    style={{
                      marginTop: '12px',
                      fontSize: '17px',
                      lineHeight: '1.6'
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="pgrail"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '8px'
              }}
            >
              <div style={{ flex: '1', display: 'flex', gap: '6px' }}>
                {impact.metrics.map((_, i) => (
                  <i
                    key={i}
                    className="pg"
                  ></i>
                ))}
              </div>
              <span
                className="pgc i-t3"
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  fontVariantNumeric: 'tabular-nums'
                }}
              >
                01 / 0{impact.metrics.length}
              </span>
            </div>
            <p
              className="pgrail i-t3"
              style={{ marginTop: '16px', fontSize: '13px' }}
            >
              Example metrics. Replace with your own. Keep scrolling to move
              through them.
            </p>
          </div>
          <div className="cms">
            {impact.metrics.map((m, i) => (
              <div
                key={i}
                className="im"
              >
                <p className="fl i-t3">Metric {i + 1}</p>
                <div
                  style={{
                    position: 'relative',
                    background: 'var(--color-surface)',
                    borderRadius: '16px',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)',
                    overflow: 'hidden',
                    padding: '36px 28px 28px',
                    height: '300px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      top: '0',
                      height: '16px',
                      background: m.barColor || 'var(--color-primary)'
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Badge
                      style={{
                        background: m.cardTagBg || 'var(--color-primary-tint)',
                        color: m.cardTagColor || 'var(--color-primary-dark)'
                      }}
                    >
                      {m.cardLabel}
                    </Badge>
                    <span
                      style={{
                        fontSize: 'var(--font-size-caption)',
                        color: 'var(--color-text-caption)'
                      }}
                    >
                      {m.cardPeriod}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 'auto 0 0',
                      fontSize: 'var(--font-size-stat)',
                      fontWeight: 'var(--font-weight-bold)',
                      lineHeight: 'var(--line-height-stat)',
                      letterSpacing: '-.03em',
                      color: m.cardValueColor || 'var(--color-primary-dark)'
                    }}
                  >
                    {m.cardValue}
                  </p>
                  <p style={{ marginTop: '8px', color: '#444' }}>
                    {m.cardSub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="spc"
          style={{ height: '1380px' }}
        ></div>
      </section>
    </div>
  )
}
