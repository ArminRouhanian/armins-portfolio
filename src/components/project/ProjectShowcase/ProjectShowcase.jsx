import React, { useState, useCallback, useRef } from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import Alert from '../../ui/Alert/Alert'
import ShowcaseItems from './ShowcaseItems/ShowcaseItems'
import ShowcaseLightbox from './ShowcaseLightbox/ShowcaseLightbox'
import styles from './ProjectShowcase.module.css'

export default function ProjectShowcase({ showcase, mockupUrl, label = '04 · SHOWCASE' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [listActiveIdx, setListActiveIdx] = useState(0)
  const listTrackRef = useRef(null)

  const items = showcase?.items || []
  const count = items.length
  const type = showcase?.type || 'desktop'
  const isMobile = type === 'mobile'
  const resolvedUrl = showcase?.mockupUrl || mockupUrl || 'yourproduct.com'

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  // Track horizontal scroll of showcase list on mobile
  const handleListScroll = useCallback(() => {
    const el = listTrackRef.current
    if (!el) return
    const firstChild = el.firstElementChild
    if (!firstChild) return
    const itemWidth = firstChild.offsetWidth
    const gap = 16
    const totalItemWidth = itemWidth + gap
    const scrollPos = el.scrollLeft
    const idx = Math.round(scrollPos / totalItemWidth)
    setListActiveIdx(Math.max(0, Math.min(count - 1, idx)))
  }, [count])

  const scrollToListSlide = (index) => {
    const el = listTrackRef.current
    if (!el) return
    const firstChild = el.firstElementChild
    if (!firstChild) return
    const itemWidth = firstChild.offsetWidth
    const gap = 16
    const targetLeft = index * (itemWidth + gap)
    el.scrollTo({ left: targetLeft, behavior: 'smooth' })
    setListActiveIdx(index)
  }

  if (!showcase || count === 0) return null

  return (
    <>
      <section id="showcase" className={styles.section}>
        <div className={styles.headerContainer}>
          <SectionHeader
            dark
            label={label}
            title="Design mockups"
          />
          {showcase.alert && (
            <div className={styles.alertWrap}>
              <Alert
                dark
                variant={showcase.alert.variant || 'info'}
              >
                {showcase.alert.text || showcase.alert}
              </Alert>
            </div>
          )}
          <p className={styles.subtitleDesktop}>
            Click any mockup to open the viewer. Use arrow keys to step through.
          </p>
          <p className={styles.subtitleMobile}>
            Tap any mockup to open viewer. Swipe to browse.
          </p>
        </div>
        <ShowcaseItems
          ref={listTrackRef}
          items={items}
          type={type}
          onItemClick={openLightbox}
          onScroll={handleListScroll}
        />
        <div className={styles.dots} aria-label="Mockup pagination">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot}${index === listActiveIdx ? ` ${styles.dotActive}` : ''}`}
              aria-label={`Go to mockup ${index + 1}`}
              onClick={() => scrollToListSlide(index)}
            />
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <ShowcaseLightbox
          items={items}
          initialIndex={lightboxIndex}
          isMobile={isMobile}
          resolvedUrl={resolvedUrl}
          onClose={closeLightbox}
        />
      )}
    </>
  )
}
