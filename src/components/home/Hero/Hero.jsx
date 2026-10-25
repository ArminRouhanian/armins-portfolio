import React from 'react'
import HeroAnimation from './HeroAnimation'
import Button from '../../common/Button/Button'
import Badge from '../../common/Badge/Badge'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section}>
      <HeroAnimation />
      <div className={styles.badgeWrapper}>
        <Badge variant="white">
          Product designer
        </Badge>
      </div>
      <h1 className={styles.title}>
        I bring&nbsp;
        <span className={styles.selectionWrapper}>
          <i className={styles.handle} style={{ left: '-10px', top: '-10px' }} />
          <i className={styles.handle} style={{ right: '-10px', top: '-10px' }} />
          <i className={styles.handle} style={{ left: '-10px', bottom: '-10px' }} />
          <i className={styles.handle} style={{ right: '-10px', bottom: '-10px' }} />
          <span className={styles.cyclingText}>
            <span>
              <b className={styles.cycleClarity}>
                Clarity
              </b>
              <b className={styles.cycleStructure}>
                Structure
              </b>
              <b className={styles.cycleValue}>
                Value
              </b>
              <b className={styles.cycleDesign}>
                Design
              </b>
              <b className={styles.cycleClarity}>
                Clarity
              </b>
            </span>
          </span>
        </span>{' '}
        <br />
        to your product
      </h1>
      <p className={styles.subtitle}>
        Hi, I am Armin. I turn fuzzy ideas into products people understand and
        want to use.
      </p>
      <div className={styles.actions}>
        <Button variant="primary" href="#work">
          View work
        </Button>
        <Button variant="secondary" href="#contact">
          Contact me
        </Button>
      </div>
    </section>
  )
}
