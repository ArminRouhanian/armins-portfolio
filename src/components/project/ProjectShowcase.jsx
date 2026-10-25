import React, { useState, useEffect, useCallback } from 'react'
import SectionHeader from '../common/SectionHeader/SectionHeader'
import Button from '../common/Button/Button'
import ShowcaseItems from './ShowcaseItems/ShowcaseItems'

export default function ProjectShowcase({ showcase }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const items = showcase?.items || []
  const count = items.length
  const type = showcase?.type || 'desktop'
  const isMobile = type === 'mobile'

  const openLightbox = useCallback((index) => {
    setActiveIdx(index)
    setIsOpen(true)
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    document.documentElement.style.overflow = ''
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % count)
  }, [count])

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') nextSlide()
      else if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeLightbox, nextSlide, prevSlide])

  if (!showcase || count === 0) return null

  return (
    <>
      <section
        id="showcase"
        style={{
          backgroundColor: '#1E1E1E',
          backgroundImage: 'radial-gradient(#3A3A3A 1px,transparent 1px)',
          backgroundSize: '24px 24px',
          padding: '96px 0 120px',
          color: 'var(--color-text-light)',
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
          <SectionHeader
            dark
            label="04 · SHOWCASE"
            title="Design mockups"
          />
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
        <ShowcaseItems
          items={items}
          type={type}
          onItemClick={openLightbox}
        />
      </section>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          id="lb"
          className="lb open"
          role="dialog"
          aria-modal="true"
          aria-label="Mockup viewer"
          style={{ zIndex: 1000 }}
          onClick={(e) => {
            if (e.target.id === 'lb') closeLightbox()
          }}
        >
          <Button
            variant="iconOnly"
            aria-label="Close"
            icon="/assets/icons/close.svg"
            iconSize={20}
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              zIndex: 1010
            }}
          />

          <Button
            variant="iconOnly"
            aria-label="Previous"
            icon="/assets/icons/chevron-left.svg"
            iconSize={22}
            onClick={prevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: '24px',
              transform: 'translateY(-50%)',
              zIndex: 1010
            }}
          />

          <Button
            variant="iconOnly"
            aria-label="Next"
            icon="/assets/icons/chevron-right.svg"
            iconSize={22}
            onClick={nextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: '24px',
              transform: 'translateY(-50%)',
              zIndex: 1010
            }}
          />

          <div className="lbs">
            {items.map((item, index) => (
              <div
                key={index}
                className={`sl${index === activeIdx ? ' on' : ''}`}
                data-n={item.label}
              >
                {isMobile ? (
                  <div
                    style={{
                      height: 'min(72vh, 660px)',
                      aspectRatio: '9 / 19.5',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 32px 64px rgba(0,0,0,0.6)',
                      background: item.image
                        ? `url("${item.image}") center / cover no-repeat`
                        : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)',
                      margin: '0 auto'
                    }}
                  />
                ) : (
                  <div
                    className="fr"
                    style={{ boxShadow: '0 32px 64px rgba(0,0,0,.5)' }}
                  >
                    <div className="bar">
                      <i></i>
                      <i></i>
                      <i></i>
                      <span>yourproduct.com</span>
                    </div>
                    <div
                      style={{
                        height: 'min(58vh,620px)',
                        background: item.image
                          ? `url("${item.image}") center / cover no-repeat`
                          : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="lbc">
            {activeIdx + 1} / {count} · {items[activeIdx]?.label || ''}
          </p>

          <div className="lbt">
            {items.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`th${index === activeIdx ? ' on' : ''}`}
                aria-label={item.label}
                onClick={() => setActiveIdx(index)}
                style={{
                  width: isMobile ? '38px' : '96px',
                  height: '60px',
                  background: item.image
                    ? `url("${item.image}") center / cover no-repeat`
                    : item.gradient || 'linear-gradient(135deg,#A259FF,#1ABCFE)'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
