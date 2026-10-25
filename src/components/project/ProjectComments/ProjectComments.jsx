import React, { useState, useRef, useCallback } from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import CommentCard from '../../common/CommentCard/CommentCard'
import styles from './ProjectComments.module.css'

export default function ProjectComments({ comments }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef(null)

  const handleScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth || 1
    const gap = 16
    const totalItemWidth = cardWidth + gap
    const scrollPos = el.scrollLeft
    const idx = Math.round(scrollPos / totalItemWidth)
    setActiveIdx(Math.max(0, Math.min(comments.length - 1, idx)))
  }, [comments?.length])

  const scrollToSlide = (index) => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth || 1
    const gap = 16
    const targetLeft = index * (cardWidth + gap)
    el.scrollTo({ left: targetLeft, behavior: 'smooth' })
    setActiveIdx(index)
  }

  if (!comments || comments.length === 0) return null

  return (
    <section id="comments" className={styles.section}>
      <SectionHeader
        label="05 · FEEDBACK"
        title="What the team says"
        className={styles.header}
      />
      <div
        ref={trackRef}
        className={styles.carouselTrack}
        onScroll={handleScroll}
      >
        {comments.map((item, index) => (
          <div key={index} className={styles.cardSlide}>
            <CommentCard
              initials={item.initials}
              avatarBg={item.avatarBg}
              name={item.name}
              role={item.role}
              quote={item.quote}
              className={styles.commentCard}
            />
          </div>
        ))}
      </div>
      <div className={styles.dots} aria-label="Comment pagination">
        {comments.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.dot}${index === activeIdx ? ` ${styles.dotActive}` : ''}`}
            aria-label={`Go to comment ${index + 1}`}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
