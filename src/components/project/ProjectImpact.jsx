import React from 'react'

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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <p
                className="i-lb"
                style={{ fontSize: '13px', fontWeight: '700' }}
              >
                02 · IMPACT
              </p>
            </div>
            <h2
              className="i-t1"
              style={{ marginTop: '8px', fontSize: '36px' }}
            >
              Impact at a glance
            </h2>
            <p
              className="i-t2"
              style={{
                marginTop: '12px',
                fontSize: '18px',
                lineHeight: '1.55'
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
                    background: '#fff',
                    borderRadius: '16px',
                    border: '1px solid #E5E5E5',
                    boxShadow: '0 24px 48px rgba(0,0,0,.12)',
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
                      background: m.barColor || '#0D99FF'
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      className="tg"
                      style={{
                        background: m.cardTagBg || '#0D99FF26',
                        color: m.cardTagColor || '#0C7BD1'
                      }}
                    >
                      {m.cardLabel}
                    </span>
                    <span style={{ fontSize: '13px', color: '#777' }}>
                      {m.cardPeriod}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 'auto 0 0',
                      fontSize: 'clamp(72px,10vw,120px)',
                      fontWeight: '700',
                      lineHeight: '1',
                      letterSpacing: '-.03em',
                      color: m.cardValueColor || '#0C7BD1'
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
