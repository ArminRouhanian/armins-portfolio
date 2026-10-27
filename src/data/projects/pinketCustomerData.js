export const pinketCustomerData = {
  id: 'pinket-customer',
  thumbnail: '/assets/projects/pinket-customer/thumbnail.webp',
  hero: {
    tags: ['Mobile web', 'Research', 'Case study'],
    title: 'Pinket: Customer App',
    subtitle: 'B2B2C financial wallet for organizational welfare',
    mockupUrl: 'yourproduct.com',
    thumbnail: '/assets/projects/pinket-customer/thumbnail.webp',
    mockupGradient: 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))',
    meta: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Timeline', value: 'April 2022 – June 2026' },
      { label: 'Team', value: 'Exp: 7 persons' },
      { label: 'Platform', value: 'Mobile web app' }
    ]
  },
  overview: {
    p1: 'Pinket is a B2B2C financial wallet for corporate welfare, connecting organizations, employees, and retail networks through digital credit, e-commerce, and in-store payments for over 4 million potential users. Originally an online chain-store marketplace, it completed two strategic business pivots to reach this enterprise model.',
    p2: 'Transitioning from backend engineering to UI/UX design in April 2022, I took end-to-end ownership of the customer-facing mobile web application across cross-functional sprints. Because dedicated research budget was unavailable, I adopted lean, pragmatic discovery methods—conducting targeted guerrilla interviews and remote usability walkthroughs to ground design decisions in user evidence. Concurrently, I resolved years of design debt by restructuring chaotic Figma workspaces, consolidating disconnected local files, and creating Pinket’s first cohesive design system, color palette, and reusable UI kit to establish a sustainable foundation for current and future design teams. Key areas of ownership included:',
    checklists: [
      {
        bg: 'var(--color-orange)',
        text: 'Digital wallet for customers'
      },
      {
        bg: 'var(--color-purple-light)',
        text: 'Modeling BNPL & Credits'
      },
      {
        bg: 'var(--color-green)',
        text: 'Online shopping'
      },
      {
        bg: 'var(--color-primary-light)',
        text: 'In-store purchase Journey'
      },
      {
        bg: 'var(--color-orange-light)',
        text: 'Online & In-store payment'
      },
      {
        bg: 'var(--color-surface-dark)',
        text: 'Pivot redesign (old UI kit to new)'
      }
    ]
  },
  impact: {
    intro:
      'Re-architecting the customer app across Pinket’s business pivots required aligning core flows with enterprise employee habits while scaling our interface to support diverse retail models.',
    metrics: [
      {
        numLabel: 'METRIC 1 OF 4',
        kClass: 'k0',
        title: 'Unlocking High-Volume In-Store Redemptions',
        desc: 'Recognizing that employees preferred in-person grocery redemption, we designed an intuitive in-store barcode/QR payment flow, tripling monthly transaction volumes.',
        cardLabel: '● Scaled Reach',
        cardTagBg: 'var(--color-primary-tint)',
        cardTagColor: 'var(--color-primary-dark)',
        cardPeriod: 'Enterprise scale',
        cardValue: '4M',
        cardValueColor: 'var(--color-primary-dark)',
        cardSub: 'Prospective employees across 5 anchor enterprise networks',
        barColor: 'var(--color-primary)'
      },
      {
        numLabel: 'METRIC 2 OF 4',
        kClass: 'k1',
        title: 'Pragmatic Discovery to Diagnose Drop-Off',
        desc: 'Conducted in-depth phone interviews with drop-off users, uncovering critical friction in branch delivery radius and vendor matching that led to an overhauled purchase journey.',
        cardLabel: '● Lean Discovery',
        cardTagBg: 'var(--color-purple-tint)',
        cardTagColor: 'var(--color-purple)',
        cardPeriod: 'April 2023',
        cardValue: '~80',
        cardValueColor: 'var(--color-purple)',
        cardSub: 'Qualitative user interviews resolving purchase abandonment',
        barColor: 'var(--color-purple-light)'
      },
      {
        numLabel: 'METRIC 3 OF 4',
        kClass: 'k2',
        title: 'Multi-Tenant Theming on One Shared System',
        desc: 'Engineered a semantic design token hierarchy allowing our React web app to dynamically adopt corporate partner branding while maintaining usability consistency.',
        cardLabel: '● Multi-Tenancy',
        cardTagBg: 'var(--color-green-tint)',
        cardTagColor: 'var(--color-green-dark)',
        cardPeriod: '2024 - 2025',
        cardValue: '12',
        cardValueColor: 'var(--color-green-dark)',
        cardSub: 'Enterprise client brands supported by one dynamic UI codebase',
        barColor: 'var(--color-green)'
      },
      {
        numLabel: 'METRIC 4 OF 4',
        kClass: 'k3',
        title: 'Scaling from FMCG to 17 Service Sectors',
        desc: 'Expanded information architecture and credit allocation flows beyond grocery into comprehensive organizational welfare, encompassing retail, dining, and wellness.',
        cardLabel: '● Ecosystem Growth',
        cardTagBg: 'var(--color-orange-tint)',
        cardTagColor: 'var(--color-orange-dark)',
        cardPeriod: '2024 - 2026',
        cardValue: '+5K',
        cardValueColor: 'var(--color-orange-dark)',
        cardSub: 'Merchant locations and welfare services integrated across 17 categories',
        barColor: 'var(--color-orange)'
      }
    ]
  },
  timeline: {
    steps: [
      {
        dotColor: 'var(--color-orange)',
        period: 'June 2021 · Engineering',
        title: 'Joined Pinket as a Backend & Full-Stack Developer',
        desc: 'Built core backend services with Java and PostgreSQL, architecting API contracts and data models before expanding into React.js—establishing deep empathy for developer handoff constraints.'
      },
      {
        dotColor: 'var(--color-purple-light)',
        period: 'April 2022 · Design Ops',
        title: 'Transitioned to UI/UX & Resolved Design Debt',
        desc: 'Took full ownership of product design, restructuring disorganized Figma workspaces, recovering scattered local files, and creating Pinket’s first cohesive component library, color tokens, and style guide.'
      },
      {
        dotColor: 'var(--color-primary-light)',
        period: 'April 2023 · Lean Discovery',
        title: 'Diagnosed Drop-Off & Launched In-Store Payments',
        desc: 'With zero research budget, conducted ~80 phone interviews to uncover delivery radius barriers. Designed and rolled out a barcode-based in-store redemption flow that tripled monthly order volumes.'
      },
      {
        dotColor: 'var(--color-green)',
        period: '2024 · Strategic Pivot',
        title: 'Architected B2B2C Welfare Wallet & Multi-Tenant Theming',
        desc: 'Redesigned the customer experience for the enterprise welfare pivot, modeling corporate quota wallets and BNPL systems while implementing dynamic theming for 12 corporate client identities.'
      },
      {
        dotColor: 'var(--color-orange-light)',
        period: '2025 – 2026 · Ecosystem Scale',
        title: 'Multi-Category Expansion & Enterprise Hardening',
        desc: 'Scaled user journeys beyond FMCG into 17 distinct service sectors spanning +5,000 merchant branches, continuously refining mobile performance, edge cases, and cross-functional design handoffs.'
      }
    ]
  },
  showcase: {
    type: 'mobile',
    alert: {
      variant: 'info',
      text: 'These interfaces were originally designed in the native language for the regional market, following a Right-to-Left (RTL) layout and typographic structure.'
    },
    items: [
      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-online-explore-translated.webp',
        label: 'Marketplace Explore (Translated)'
      },
      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-online-product-page.webp',
        label: 'Product Page'
      },
      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-online-explore.webp',
        label: 'Marketplace Explore (Native)'
      },

      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-map-store.webp',
        label: 'Finding Vendors by Maps'
      },
      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-bnpl-payment.webp',
        label: 'Payment Gateway'
      },
      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-update-visual-identity-example.webp',
        label: 'Visual Identity (From PopArt to Flat-Vector)'
      }
    ]
  },
  comments: [
    // {
    //   initials: 'PM',
    //   avatarBg: 'primary',
    //   name: '[Teammate Name]',
    //   role: 'Product Manager',
    //   quote: '[Replace with a short, honest quote from a colleague about how it was to work with you on this project.]'
    // },
    {
      initials: 'FE',
      avatarBg: 'purple',
      name: 'Alireza Khosrojerdi',
      role: 'Frontend Developer',
      quote: 'Armin has always paid close attention to detail and made collaboration between design and frontend teams a priority, doing both exceptionally well.\n His designs are always clear and well-documented, allowing frontend developers to start implementation with confidence and without ambiguity.'
    },
    {
      initials: 'BE',
      avatarBg: 'green',
      name: 'Amirhossein Sheikh',
      role: 'Senior Backend Developer',
      quote: 'Armin combines strong design expertise with an exceptional product mindset, contributing to product decisions and balancing user needs, business goals, and technical constraints. His attention to detail and commitment to quality consistently stand out.\n What truly sets Armin apart is his sense of ownership, leadership, and collaborative spirit. His dedication and genuine care for the product and the people behind it make him an invaluable teammate.'
    }
  ],
  nav: {
    next: {
      to: '/works/pinket-dashboard',
      label: 'Next work',
      title: 'Pinket: Dashboards'
    }
  }
}
