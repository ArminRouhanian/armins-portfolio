import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import { getMailtoHref } from '../../../utils/contact'
import styles from './AboutCtaBanner.module.css'

export default function AboutCtaBanner() {
  return (
    <div className={styles.ctaBanner}>
      <div className={styles.ctaText}>
        <h2 className={styles.ctaTitle}>
          Let's build something clear and impactful
        </h2>
        <p className={styles.ctaDescription}>
          Looking for a product designer to elevate your team, build your
          design system, or tackle your next complex product?
        </p>
      </div>
      <div className={styles.ctaActions}>
        <Button
          as="a"
          variant="primary"
          href={getMailtoHref()}
        >
          Get in touch
        </Button>
        <Button
          as={Link}
          to="/#work"
          variant="secondary"
        >
          View selected work
        </Button>
      </div>
    </div>
  )
}
