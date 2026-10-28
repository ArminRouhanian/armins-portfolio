import React, { useState, useRef, useCallback } from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import CommentCard, { CommentCardProps } from './CommentCard/CommentCard'
import styles from './Comments.module.css'

export type CommentItem = CommentCardProps

export interface CommentsProps {
  comments?: CommentItem[]
  label?: string
}

export default function Comments({
  comments,
  label = '05 · FEEDBACK'
}: CommentsProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const getSlideStride = (): number => {
    const el = trackRef.current
    if (!el || el.children.length === 0) return 1

    const first = el.children[0] as HTMLElement | undefined
    const second = el.children[1] as HTMLElement | undefined

    if (first && second) {
      return second.offsetLeft - first.offsetLeft
    }
    return first?.offsetWidth || 1
  }

  const handleScroll = useCallback(() => {
    const el = trackRef.current
    if (!el || !comments || comments.length === 0) return

    const stride = getSlideStride()
    const idx = Math.round(el.scrollLeft / stride)
    setActiveIdx(Math.max(0, Math.min(comments.length - 1, idx)))
  }, [comments])

  const scrollToSlide = (index: number) => {
    const el = trackRef.current
    if (!el) return

    const stride = getSlideStride()
    el.scrollTo({
      left: index * stride,
      behavior: 'smooth'
    })
    setActiveIdx(index)
  }

  if (!comments || comments.length === 0) return null

  return (
    <section id="comments" className={styles.section}>
      <SectionHeader
        label={label}
        title="What the team says"
        className={styles.header}
      />
      <div
        ref={trackRef}
        className={styles.carouselTrack}
        onScroll={handleScroll}
      >
        {comments.map((item, index) => (
          <div
            key={item.name ? `${item.name}-${index}` : index}
            className={styles.cardSlide}
          >
            <CommentCard
              {...item}
              className={styles.commentCard}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.dots}
        aria-label="Comment pagination"
      >
        {comments.map((item, index) => (
          <button
            key={item.name ? `dot-${item.name}-${index}` : index}
            type="button"
            className={`${styles.dot}${index === activeIdx ? ` ${styles.dotActive}` : ''}`}
            aria-label={`Go to comment ${index + 1}`}
            aria-current={index === activeIdx ? 'true' : undefined}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
