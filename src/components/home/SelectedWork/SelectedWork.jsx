import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../../common/Badge/Badge'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import { projectsData } from '../../../data/projectsData'
import styles from './SelectedWork.module.css'

export default function SelectedWork() {
  const customerThumbnail = projectsData['pinket-customer']?.thumbnail
  const dashboardThumbnail = projectsData['pinket-dashboard']?.thumbnail
  const metamondialThumbnail = projectsData['metamondial3d']?.thumbnail

  return (
    <section id="work" className={styles.section}>
      <SectionHeader
        label="01 · SELECTED WORK"
        title="Products I've helped shape"
        className={styles.header}
      />
      <div className={styles.grid}>
        <Link to="/works/pinket-customer" className={styles.card}>
          <div
            className={styles.cardBanner}
            style={{
              background: customerThumbnail
                ? `url("${customerThumbnail}") center / cover no-repeat`
                : 'var(--color-purple-light)'
            }}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>
              Pinket: Customer App
            </h3>
            <p className={styles.cardDescription}>
              BNPL shopping network
            </p>
            <div className={styles.badgeRow}>
              <Badge variant="grey">
                Mobile App
              </Badge>
              <Badge variant="grey">
                Research
              </Badge>
            </div>
          </div>
        </Link>
        <Link to="/works/pinket-dashboard" className={styles.card}>
          <div
            className={styles.cardBanner}
            style={{
              background: dashboardThumbnail
                ? `url("${dashboardThumbnail}") center / cover no-repeat`
                : 'var(--color-green)'
            }}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>
              Pinket: Dashboards
            </h3>
            <p className={styles.cardDescription}>
              [One-line outcome]
            </p>
            <div className={styles.badgeRow}>
              <Badge variant="grey">
                Desktop
              </Badge>
              <Badge variant="grey">
                B2B
              </Badge>
            </div>
          </div>
        </Link>
        <Link to="/works/metamondial3d" className={styles.card}>
          <div
            className={styles.cardBanner}
            style={{
              background: metamondialThumbnail
                ? `url("${metamondialThumbnail}") center / cover no-repeat`
                : 'var(--color-orange)'
            }}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>
              MetaMondial3D
            </h3>
            <p className={styles.cardDescription}>
              Metaverse &amp; NFT Market
            </p>
            <div className={styles.badgeRow}>
              <Badge variant="grey">
                Redesign
              </Badge>
              <Badge variant="grey">
                Responsive
              </Badge>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
