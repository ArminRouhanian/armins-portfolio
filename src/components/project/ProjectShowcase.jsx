import React from 'react'

export default function ProjectShowcase({ showcase }) {
  if (!showcase) return null

  return (
    <>
      <section
        id="showcase"
        style={{
          scrollMarginTop: '0px',
          backgroundColor: '#1E1E1E',
          backgroundImage: 'radial-gradient(#3A3A3A 1px,transparent 1px)',
          backgroundSize: '24px 24px',
          padding: '96px 0 120px',
          color: '#fff',
          marginTop: '48px'
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '0 32px 32px'
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#1ABCFE'
            }}
          >
            04 · SHOWCASE
          </p>
          <h2
            style={{
              marginTop: '8px',
              fontSize: '36px'
            }}
          >
            Design mockups
          </h2>
          <p
            style={{
              marginTop: '8px',
              color: '#888',
              fontSize: '15px'
            }}
          >
            Click any mockup to open the viewer. Use arrow keys to step
            through.
          </p>
        </div>
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '24px'
          }}
        >
          {showcase.items.map((item, index) => (
            <div
              key={index}
              className="fr"
              data-i={String(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div
                style={{
                  height: '240px',
                  background: item.image
                    ? `url("${item.image}") center / cover no-repeat`
                    : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '500'
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <div
        id="lb"
        className="lb"
      >
        <div className="lbs">
          {showcase.items.map((item, index) => (
            <div
              key={index}
              className={`sl${index === 0 ? ' on' : ''}`}
              data-n={item.label}
            >
              <div className="fr">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>yourproduct.com</span>
                </div>
                <div
                  style={{
                    height: 'clamp(280px,50vh,620px)',
                    background: item.image
                      ? `url("${item.image}") center / cover no-repeat`
                      : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '500',
                    fontSize: '20px'
                  }}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lbn">
          <button
            type="button"
            className="lbp"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <span className="lbc">
            1 / {showcase.items.length} · {showcase.items[0]?.label || ''}
          </span>
          <button
            type="button"
            className="lbq"
            aria-label="Next slide"
          >
            ›
          </button>
          <button
            type="button"
            className="lbx"
            aria-label="Close viewer"
          >
            ✕
          </button>
        </div>
        <div className="lbt">
          {showcase.items.map((item, index) => (
            <div
              key={index}
              className={`th${index === 0 ? ' on' : ''}`}
              data-k={String(index)}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: item.image
                    ? `url("${item.image}") center / cover no-repeat`
                    : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
