export const pinketDashboardData = {
  id: 'pinket-dashboard',
  thumbnail: '/assets/projects/pinket-dashboard/thumbnail.webp',
  hero: {
    tags: ['B2B', 'Responsive', 'Design System'],
    title: 'Pinket: Dashboards',
    subtitle: 'Admin, Vendor, & Organization Panels',
    mockupUrl: 'panel.pinket.com',
    thumbnail: '/assets/projects/pinket-dashboard/thumbnail.webp',
    mockupGradient: 'linear-gradient(135deg, var(--color-green), var(--color-primary-light))',
    meta: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Timeline', value: '2024 – August 2026' },
      { label: 'Team', value: 'Panels: 9 persons' },
      { label: 'Platform', value: 'Responsive website' }
    ]
  },
  overview: {
    p1: 'Pinket is a B2B2C financial wallet for corporate welfare, connecting organizations, employees, and retail networks through digital credit, e-commerce, and in-store payments for over 4 million potential users. Originally an online chain-store marketplace, it completed two strategic business pivots to reach this enterprise model.',
    p2: 'To support this enterprise ecosystem, Pinket required three core web portals: an Internal Admin Panel for operations and financial auditing, a Merchant SaaS for catalog and order fulfillment, and an Organization Dashboard for corporate credit management. Following the 2024 wallet pivot, I expanded my scope from the customer app to establish the initial MVP design structure across all three panels. Once a dedicated dashboard designer joined the team in Spring 2025, we partnered to architect an UntitledUI-based design system and responsive layouts, unifying components and accelerating cross-platform engineering handoffs. Key deliverables included:',
    checklists: [
      {
        bg: 'var(--color-orange)',
        text: 'Admin portal refactoring & operator workflows'
      },
      {
        bg: 'var(--color-purple-light)',
        text: 'Merchant SaaS portal for inventory & orders'
      },
      {
        bg: 'var(--color-green)',
        text: 'Organization portal for employee credit lines'
      },
      {
        bg: 'var(--color-primary-light)',
        text: 'Automated vendor commission contract builder'
      },
      {
        bg: 'var(--color-orange-light)',
        text: 'Responsive layouts for on-the-go moderation'
      },
      {
        bg: 'var(--color-surface-dark)',
        text: 'UntitledUI design system scaling all 3 portals'
      }
    ]
  },
  impact: {
    intro:
      'Unifying our tri-portal architecture under a shared design system eliminated redundant handoffs, accelerated sprint velocity, and streamlined complex enterprise operations.',
    metrics: [
      {
        numLabel: 'METRIC 1 OF 4',
        kClass: 'k0',
        title: 'Drastic Reduction in One-Off UI Requests',
        desc: 'Consolidating three disparate portals into a unified component library removed design ambiguity, eliminating 90% of custom UI rebuilds.',
        cardLabel: '● Handoff Efficiency',
        cardTagBg: 'var(--color-primary-tint)',
        cardTagColor: 'var(--color-primary-dark)',
        cardPeriod: 'Handoff efficiency',
        cardValue: '−90%',
        cardValueColor: 'var(--color-primary-dark)',
        cardSub: 'Reduction in custom one-off UI rebuilds',
        barColor: 'var(--color-primary)'
      },
      {
        numLabel: 'METRIC 2 OF 4',
        kClass: 'k1',
        title: '5x Acceleration in Screen Delivery Velocity',
        desc: 'Pre-built responsive layouts and semantic tokens cut prototyping time fivefold, allowing the team to dedicate more sprint capacity to UX validation.',
        cardLabel: '● Design Velocity',
        cardTagBg: 'var(--color-purple-tint)',
        cardTagColor: 'var(--color-purple)',
        cardPeriod: 'Delivery speed',
        cardValue: '5x',
        cardValueColor: 'var(--color-purple)',
        cardSub: 'Faster delivery from wireframe to developer handoff',
        barColor: 'var(--color-purple-light)'
      },
      {
        numLabel: 'METRIC 3 OF 4',
        kClass: 'k2',
        title: '67% Reduction in Design Debt & Redundant Assets',
        desc: 'Pruned duplicate components into a centralized tokenized system, cutting library bloat by 67% while unlocking native responsive tablet and mobile views.',
        cardLabel: '● Library Optimization',
        cardTagBg: 'var(--color-green-tint)',
        cardTagColor: 'var(--color-green-dark)',
        cardPeriod: 'Apr – Jun 2025',
        cardValue: '−67%',
        cardValueColor: 'var(--color-green-dark)',
        cardSub: 'Pruned component bloat and redundant Figma files',
        barColor: 'var(--color-green)'
      },
      {
        numLabel: 'METRIC 4 OF 4',
        kClass: 'k3',
        title: '75% Faster Merchant Contract & Commission Onboarding',
        desc: 'Designed an automated contract builder that translated 20 legacy commission models into a structured rule engine, cutting partner setup from 20 to 5 days.',
        cardLabel: '● Operations Automation',
        cardTagBg: 'var(--color-orange-tint)',
        cardTagColor: 'var(--color-orange-dark)',
        cardPeriod: 'Merchant onboarding',
        cardValue: '4x',
        cardValueColor: 'var(--color-orange-dark)',
        cardSub: 'Faster partner onboarding (from 20 to 5 days)',
        barColor: 'var(--color-orange)'
      }
    ]
  },
  timeline: {
    steps: [
      {
        dotColor: 'var(--color-orange)',
        period: 'June 2021 · Engineering',
        title: 'Full-Stack Engineering & Data Architecture',
        desc: 'Engineered core backend services and database models using Java and PostgreSQL before expanding into React.js—gaining first-hand mastery of the technical constraints behind high-volume enterprise transactions.'
      },
      {
        dotColor: 'var(--color-purple-light)',
        period: 'June 2022 · Customer App',
        title: 'Transitioned to UI/UX Design on Customer Team',
        desc: 'Shifted focus into product design within the customer team, driving user flows, marketplace interactions, and core customer experience across mobile and web platforms.'
      },
      {
        dotColor: 'var(--color-surface-dark)',
        period: '2024 · B2B2C Pivot',
        title: 'Architected Initial MVP Portals',
        desc: 'Following the corporate wallet pivot, stepped in to establish the baseline MVP information architecture and UI foundation across all 3 portals (Admin, Merchant, and Organization) to unblock early development before a dedicated dashboard designer was hired.'
      },
      {
        dotColor: 'var(--color-primary-light)',
        period: 'Spring 2025 · Collaboration',
        title: 'Unified Design System with UntitledUI',
        desc: 'Partnered with the newly onboarded dashboard designer to rebuild the foundational design system using UntitledUI, standardizing components, typography, and tokens to enable rapid, scalable product iterations across all 3 panels.'
      },
      {
        dotColor: 'var(--color-green)',
        period: 'June 2025 – August 2026 · Responsive Scale',
        title: 'Responsive Dashboards & Operational Hardening',
        desc: 'Engineered adaptive tablet and mobile layouts across all three portals, empowering operators and store managers to conduct on-the-go order moderation, catalog inventory audits, and quota monitoring.'
      },
      {
        dotColor: 'var(--color-orange-light)',
        period: 'Winter 2026 · Automation',
        title: 'Engineered the Vendor Commission Contract Builder',
        desc: 'Mapped 20 legacy vendor contract models into a structured 5-dimensional rule engine, transforming manual financial engineering into an automated UI tool that cut partner onboarding from 20 days to 5 days.'
      }
    ]
  },
  showcase: {
    type: 'desktop',
    alert: {
      variant: 'info',
      text: 'These interfaces were originally designed in the native language for the regional market, following a Right-to-Left (RTL) layout and typographic structure.'
    },
    items: [
      {
        bg: '/assets/projects/pinket-dashboard/mockups/showcase-organization-credits.webp',
        label: 'Organization Dashboard Example'
      },
      {
        bg: '/assets/projects/pinket-dashboard/mockups/showcase-product-information.webp',
        label: 'Vendor Product Management'
      },
      {
        bg: '/assets/projects/pinket-dashboard/mockups/showcase-tokenized-design-system.webp',
        label: 'Token System That Unified Our Design'
      }
      // {
      //   gradient: 'linear-gradient(135deg, var(--color-primary-light), var(--color-green))',
      //   label: 'Smart Contract Tool'
      // },
      // {
      //   gradient: 'linear-gradient(135deg, var(--color-orange), var(--color-purple-light))',
      //   label: 'Responsive Tablet View'
      // },
      // {
      //   gradient: 'linear-gradient(135deg, var(--color-orange), var(--color-orange-light))',
      //   label: 'Responsive Mobile Moderation'
      // }
    ]
  },
  comments: [
    {
      initials: 'APM',
      avatarBg: 'primary',
      name: 'Erfan Zamani',
      role: ' Associate Product Manager',
      quote: 'He keeps users’ needs and feedback at the heart of his work, creating intuitive, easy-to-use experiences. He also has a great eye for visual design, balancing aesthetics with functionality to deliver thoughtful, cohesive solutions.'
    },
    {
      initials: 'FE',
      avatarBg: 'purple',
      name: 'Hossein Yadegari',
      role: 'Frontend Developer',
      quote: 'Working with someone as intelligent, dedicated, and detail-oriented as Armin is both a pleasure and a challenge. A pleasure, because his creativity and attention to detail shine through in the final results, often in ways that make the work genuinely stand out. A challenge, because he cares about every detail, no matter how small, and never settles for overlooking something that could be better. That combination is what makes working with him such a rewarding experience.'
    },
    {
      initials: 'UXD',
      avatarBg: 'green',
      name: 'Amirhossein Karimi',
      role: 'UI/UX Designer',
      quote: 'I worked with Armin for three years across multiple product panels, and he consistently proved to be a reliable, thoughtful teammate. He excels at working with data, gathering targeted stakeholder feedback, and identifying the right people to move projects forward.\nArmin is also great at structuring clear design processes and breaking down next steps in a practical, organized way. I believe any team would benefit from having him on board.'
    }
  ],
  nav: {
    prev: {
      to: '/works/pinket-customer',
      label: 'Previous work',
      title: 'Pinket: Customer App'
    },
    next: {
      to: '/works/metamondial3d',
      label: 'Next work',
      title: 'MetaMondial3D'
    }
  }
}
