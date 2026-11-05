import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import CommentCard, { CommentCardProps } from './CommentCard/CommentCard'
import { Carousel } from '../../ui/Carousel'
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
  if (!comments || comments.length === 0) return null

  const cards = comments.map((item, index) => (
    <div
      key={item.name ? `${item.name}-${index}` : index}
      className={styles.cardSlide}
    >
      <CommentCard
        {...item}
        className={styles.commentCard}
      />
    </div>
  ))

  return (
    <section
      id="comments"
      className={styles.section}
    >
      <SectionHeader
        label={label}
        title="What the team says"
        className={styles.header}
      />

      {/* Desktop layout: multi-column grid with equal heights */}
      <div className={styles.desktopGrid}>
        {cards}
      </div>

      {/* Mobile layout: reusable centered peek carousel */}
      <div className={styles.mobileCarousel}>
        <Carousel
          infinite={false}
          centered={true}
          bleed={true}
          slideWidth="calc(100% - 56px)"
          gap="16px"
          items={cards}
          ariaLabel="Team feedback comments"
        />
      </div>
    </section>
  )
}
