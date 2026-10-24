import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectShowcase() {
  return (
    <>
      <section
        id="showcase"
        style={{
          scrollMarginTop: '0px',
          backgroundColor: '#1E1E1E',
          backgroundImage: 'radial-gradient(#3A3A3A 1px,transparent 1px)',
          backgroundSize: '24px 24px',
          padding: '96px 0 120px'
        }}
      >
        <div
          style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}
        >
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#1ABCFE' }}>
            04 · SHOWCASE
          </p>
          <h2 style={{ margin: '8px 0 40px', fontSize: '36px', color: '#fff' }}>
            Design mockups
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '40px 32px'
            }}
          >
            <div style={{ gridColumn: '1/-1' }}>
              <div>
                <p className="fl">Screen 1</p>
                <div className="fr" data-i="0">
                  <div className="bar">
                    <i></i>
                    <i></i>
                    <i></i>
                    <span>yourproduct.com</span>
                  </div>
                  <div
                    style={{
                      height: '420px',
                      background: 'linear-gradient(135deg,#A259FF,#1ABCFE)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: '500'
                    }}
                  >
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="fl">Screen 2</p>
              <div className="fr" data-i="1">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>yourproduct.com</span>
                </div>
                <div
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg,#0ACF83,#1ABCFE)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '500'
                  }}
                >
                  Add mockup
                </div>
              </div>
            </div>
            <div>
              <p className="fl">Screen 3</p>
              <div className="fr" data-i="2">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>yourproduct.com</span>
                </div>
                <div
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg,#FF7262,#A259FF)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '500'
                  }}
                >
                  Add mockup
                </div>
              </div>
            </div>
            <div>
              <p className="fl">Screen 4</p>
              <div className="fr" data-i="3">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>yourproduct.com</span>
                </div>
                <div
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg,#1ABCFE,#0ACF83)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '500'
                  }}
                >
                  Add mockup
                </div>
              </div>
            </div>
            <div>
              <p className="fl">Screen 5</p>
              <div className="fr" data-i="4">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>yourproduct.com</span>
                </div>
                <div
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg,#F24E1E,#A259FF)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '500'
                  }}
                >
                  Add mockup
                </div>
              </div>
            </div>
            <div>
              <p className="fl">Screen 6</p>
              <div className="fr" data-i="5">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>yourproduct.com</span>
                </div>
                <div
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg,#F24E1E,#FF7262)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '500'
                  }}
                >
                  Add mockup
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
