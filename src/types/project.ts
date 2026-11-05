export interface ProjectMetaItem {
  label: string
  value: string
}

export interface ProjectHeroData {
  tags: string[]
  title: string
  subtitle: string
  mockupUrl: string
  thumbnail: string
  mockupGradient: string
  meta: ProjectMetaItem[]
}

export interface ProjectChecklistItem {
  bg: string
  text: string
}

export interface ProjectAlertData {
  variant?: 'info' | 'warning'
  text: string
}

export interface ProjectOverviewData {
  p1: string
  p2: string
  checklists: ProjectChecklistItem[]
  alert?: ProjectAlertData
}

export interface ProjectImpactMetric {
  kClass: string
  title: string
  desc: string
  cardLabel: string
  cardTagBg: string
  cardTagColor: string
  cardPeriod: string
  cardValue: string
  cardValueColor: string
  cardSub: string
  barColor: string
}

export interface ProjectImpactData {
  intro: string
  hint?: string
  metrics: ProjectImpactMetric[]
}

export interface ProjectTimelineStep {
  dotColor: string
  period: string
  title: string
  desc: string
}

export interface ProjectTimelineData {
  alert?: ProjectAlertData
  steps: ProjectTimelineStep[]
}

export interface ShowcaseItem {
  bg?: string
  gradient?: string
  label: string
  image?: string
  src?: string
}

export interface ShowcaseData {
  type: 'desktop' | 'mobile' | string
  mockupUrl?: string
  alert?: ProjectAlertData | string
  items: ShowcaseItem[]
}

export interface CommentItem {
  initials: string
  avatarBg: string
  name: string
  role: string
  quote: string
}

export interface ProjectPaginationTarget {
  to: string
  label: string
  title: string
}

export interface ProjectNavData {
  prev?: ProjectPaginationTarget
  next?: ProjectPaginationTarget
}

export interface SectionNavItem {
  href: string
  label: string
}

export interface ProjectData {
  id: string
  thumbnail: string
  navItems?: SectionNavItem[]
  sectionOrder?: string[]
  hero: ProjectHeroData
  overview: ProjectOverviewData
  impact?: ProjectImpactData
  timeline?: ProjectTimelineData
  showcase?: ShowcaseData
  comments?: CommentItem[]
  nav?: ProjectNavData
}

export type ProjectsMap = Record<string, ProjectData>
