import { useState, useCallback } from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import Alert from '../../ui/Alert/Alert'
import { Carousel } from '../../ui/Carousel'
import { ShowcaseCardItem } from './ShowcaseItems/ShowcaseItems'
import ShowcaseLightbox from './ShowcaseLightbox/ShowcaseLightbox'
import { ShowcaseData } from '../../../types/project'
import styles from './Showcase.module.css'

export interface ShowcaseProps {
  showcase: ShowcaseData
  mockupUrl?: string
  label?: string
}

export default function Showcase({
  showcase,
  mockupUrl,
  label = '04 · SHOWCASE'
}: ShowcaseProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items = showcase?.items || []
  const count = items.length
  const type = showcase?.type || 'desktop'
  const isMobile = type === 'mobile'
  const resolvedUrl = showcase?.mockupUrl || mockupUrl || 'yourproduct.com'

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  if (!showcase || count === 0) return null

  const alertText = typeof showcase.alert === 'string'
    ? showcase.alert
    : showcase.alert?.text

  const alertVariant = typeof showcase.alert === 'string'
    ? 'info'
    : showcase.alert?.variant || 'info'

  const carouselThemeClass = isMobile
    ? styles.carouselMobileMockup
    : styles.carouselDesktopMockup

  return (
    <>
      <section id="showcase" className={styles.section}>
        <div className={styles.headerContainer}>
          <SectionHeader
            theme="dark"
            label={label}
            title="Design mockups"
          />
          {showcase.alert && (
            <div className={styles.alertWrap}>
              <Alert
                theme="dark"
                variant={alertVariant}
              >
                {alertText}
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

        <div className={styles.carouselSection}>
          <Carousel
            infinite={false}
            centered={true}
            bleed={false}
            slideWidth="var(--showcase-slide-width)"
            gap="var(--showcase-slide-gap)"
            showController={true}
            controllerVariant="dots-only"
            theme="dark"
            className={carouselThemeClass}
            ariaLabel="Design mockups carousel"
          >
            {items.map((item, index) => (
              <div key={index} className={styles.carouselSlide}>
                <ShowcaseCardItem
                  item={item}
                  index={index}
                  isMobile={isMobile}
                  onItemClick={openLightbox}
                />
              </div>
            ))}
          </Carousel>
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
