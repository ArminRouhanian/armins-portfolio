export const metamondial3dData = {
  id: 'metamondial3d',
  thumbnail: '/assets/projects/metamondial3d/thumbnail.webp',
  navItems: [
    { href: '#preview', label: 'Preview' },
    { href: '#description', label: 'Description' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#impact', label: 'Impact' }
  ],
  sectionOrder: ['hero', 'description', 'showcase', 'timeline', 'impact'],
  hero: {
    tags: ['Web3 Design', 'Design system', 'B2C'],
    title: 'MetaMondial3D',
    subtitle: 'Metaverse & NFT Platform',
    mockupUrl: 'metamondial3d.com',
    thumbnail: '/assets/projects/metamondial3d/thumbnail.webp',
    mockupGradient: 'linear-gradient(135deg, #E22469, #2c5de5)',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: 'June - July 2022' },
      { label: 'Team', value: 'Freelancer' },
      { label: 'Platform', value: 'Desktop' }
    ]
  },
  overview: {
    p1: 'Meta Mondial 3D is an online 3D modeling tool specialized for creating NFT and metaverse-Friendly assets in an online platform. At the moment of project, the tool was in the beta version and my responsiblity was to create landings and platform pages for the fund-raising stage.',
    p2: 'The brief called for a modern, scalable platform combining the familiarity of established 3D asset marketplaces with Web3, NFT, and metaverse capabilities. The interface needed to feel contemporary and visually engaging while remaining straightforward for engineering to implement during early-stage development. Key deliverables included:',
    checklists: [
      { bg: 'var(--color-orange)', text: 'Landing Page' },
      { bg: 'var(--color-purple-light)', text: 'NFT Market' },
      { bg: 'var(--color-green)', text: 'NFT Preview' },
      {
        bg: 'var(--color-primary-light)',
        text: 'Profiles (Individual / School / Studio)'
      },
      { bg: 'var(--color-orange-light)', text: 'Auction / Bidding states' },
      { bg: 'var(--color-surface-dark)', text: 'Metaverse Explore' }
    ],
    alert: {
      variant: 'info',
      text: 'Following the market shift away from the metaverse trend, the company has ceased operations and its domain is no longer active. Archival information about the tool remains accessible online, though the live product and platform are no longer hosted.'
    }
  },
  impact: {
    intro:
      'Navigating this fast-paced engagement highlighted key operational gaps in early-stage freelance projects. I channeled the experience into overhauling my workflow—transforming loose scoping and design handoffs into a structured, automated delivery system.',
    hint: 'Keep scrolling to move through deliverables and process outcomes.',
    metrics: [
      {
        kClass: 'k0',
        title: 'Pitch-Ready Platform Deliverables',
        desc: 'Designed 6 core modules—Landing, 3D Preview, NFT Marketplace, Artist Profiles, Bidding System, and Metaverse Explore—packaged into high-fidelity desktop prototypes for early fundraising.',
        cardLabel: '● Deliverables',
        cardTagBg: 'var(--color-primary-tint)',
        cardTagColor: 'var(--color-primary-dark)',
        cardPeriod: 'June - July 2022',
        cardValue: '6',
        cardValueColor: 'var(--color-primary-dark)',
        cardSub: 'Core platform modules designed',
        barColor: 'var(--color-primary)'
      },
      {
        kClass: 'k1',
        title: 'Standardized Project Template & Design Ops',
        desc: 'Built a reusable Figma project template with modular page structures, dark-theme tokens, and layout grids to dramatically accelerate future kickoff and developer handoff times.',
        cardLabel: '● Design Ops',
        cardTagBg: 'var(--color-purple-tint)',
        cardTagColor: 'var(--color-purple)',
        cardPeriod: 'Workflow template',
        cardValue: '1',
        cardValueColor: 'var(--color-purple)',
        cardSub: 'Modular Figma project framework',
        barColor: 'var(--color-purple-light)'
      },
      {
        kClass: 'k2',
        title: 'Contract Scoping & Process Automation',
        desc: 'Developed a formal freelance contract and scoping system with automated sprint milestones, explicit scope boundaries, and change-request guidelines to eliminate timeline misalignment.',
        cardLabel: '● Operations',
        cardTagBg: 'var(--color-green-tint)',
        cardTagColor: 'var(--color-green-dark)',
        cardPeriod: 'Client workflow',
        cardValue: '1',
        cardValueColor: 'var(--color-green-dark)',
        cardSub: 'Contract & scoping system established',
        barColor: 'var(--color-green)'
      }
    ]
  },
  timeline: {
    alert: {
      variant: 'warning',
      text: 'In full transparency, this engagement concluded after the first month due to misaligned expectations around project scope, timeline, and compensation. Despite the early conclusion, it served as an invaluable lesson in contract scoping, setting clear boundaries, and managing client expectations—as reflected below.'
    },
    steps: [
      {
        dotColor: 'var(--color-orange)',
        period: 'Phase 1 · Discovery',
        title: 'Competitor Analysis & Foundation',
        desc: 'Analyzed direct competitors and industry benchmarks, evaluating ArtStation for creator showcase flows and asset discovery, alongside metaverse ecosystems like Decentraland for Web3 interaction patterns. Synthesized user mental models and target creator needs into a focused information architecture and MVP product scope.'
      },
      {
        dotColor: 'var(--color-purple-light)',
        period: 'Phase 2 · Design',
        title: 'Sketching & Wireframing',
        desc: 'Translated requirements into low-to-mid-fidelity wireframes across core user journeys, including 3D asset exploration, auction/bidding states, and multi-tier profile layouts. Iterated rapidly with the client through weekly design syncs to align on visual hierarchy and interaction models before committing to high-fidelity styling.'
      },
      {
        dotColor: 'var(--color-green)',
        period: 'Phase 3 · Delivery',
        title: 'Revision & Implementation',
        desc: 'Delivered high-fidelity UI screens and interactive desktop prototypes, establishing an exploratory dark-theme visual language suited for Web3 and 3D creators. Conducted feedback revisions and packaged developer-ready design specs, component styles, and asset exports to support engineering during the fundraising stage.'
      },
      {
        dotColor: 'var(--color-primary-light)',
        period: 'Phase 4 · Outcome',
        title: 'Mistakes, Lessons & Reflections',
        desc: 'This engagement provided crucial freelance takeaways on project scoping, change management, and commercial alignment. As feature requests quickly expanded beyond initial timelines, it reinforced the necessity of establishing clear scope boundaries, written sign-offs, and staged sprint deliverables when navigating fast-paced client contracts.'
      }
    ]
  },
  showcase: {
    type: 'desktop',
    items: [
      {
        bg: '/assets/projects/metamondial3d/mockups/showcase-landing-part-1.webp',
        label: 'Landing Part 1'
      },
      {
        bg: '/assets/projects/metamondial3d/mockups/showcase-landing-part-2.webp',
        label: 'Landing Part 2'
      },
      {
        bg: '/assets/projects/metamondial3d/mockups/showcase-metaverse-explore.webp',
        label: 'Metaverse Explore'
      },
      {
        bg: '/assets/projects/metamondial3d/mockups/showcase-collection-explore.webp',
        label: 'NFT Marketplace'
      },
      {
        bg: '/assets/projects/metamondial3d/mockups/showcase-profile-page.webp',
        label: 'Artist Profile'
      },
      {
        bg: '/assets/projects/metamondial3d/mockups/showcase-nft-page.webp',
        label: 'NFT Page'
      }
    ]
  },
  nav: {
    prev: {
      to: '/works/pinket-dashboard',
      label: 'Previous work',
      title: 'Pinket: Dashboards'
    }
  }
}
