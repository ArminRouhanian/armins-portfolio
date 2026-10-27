export const pinketDashboardData = {
  id: 'pinket-dashboard',
  thumbnail: null,
  hero: {
    tags: ['Responsive web', 'B2B', 'Case study'],
    title: 'Pinket: Dashboards',
    subtitle: 'Admin, vendor, and organization dashboards',
    mockupUrl: 'panel.pinket.com',
    thumbnail: null,
    mockupGradient: 'linear-gradient(135deg, var(--color-green), var(--color-primary-light))',
    meta: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Timeline', value: 'June 2022 – June 2026' },
      { label: 'Team', value: 'Panels: 9 persons' },
      { label: 'Platform', value: 'Responsive website' }
    ]
  },
  overview: {
    p1: 'Pinket is a B2B2C financial wallet for organizational welfare. It connects organizations, their employees, and retail partners through digital wallets, credit, online shopping, and in-store purchases. It pivoted from an online chain-store to this model, and three large organizations were set to bring about 4 million users, with roughly 2000 billion Toman (about $10M) a month in potential.',
    p2: 'Pinket has three dashboards: one for admins, one for vendors (markets), and one for organizations. The team behind them focused on financial transactions, making them safe, clear, and automatic. I owned the design files and approved internal design decisions, and although I focused mainly on the customer app, I strongly influenced the dashboards’ design systems and overall workflow. My work covered:',
    checklists: [
      {
        bg: 'var(--color-orange)',
        text: 'Update Admin dashboard aligned with technical refactoring, while making sure it is compatible with other operators on other panels.'
      },
      {
        bg: 'var(--color-purple-light)',
        text: "Vendor's Panel: A SaaS for creating and managing orders & stocks for online or in-store shopping via pinket."
      },
      {
        bg: 'var(--color-green)',
        text: 'Organization dashboard: For maintaining Employees & Their credit'
      },
      {
        bg: 'var(--color-primary-light)',
        text: 'Smart contract maker (vendor commission)'
      },
      {
        bg: 'var(--color-orange-light)',
        text: 'Responsive redesign for better moderation'
      },
      {
        bg: 'var(--color-surface-dark)',
        text: 'Updating design system (UntitledUI-based) & For scaling all 3 panels.'
      }
    ]
  },
  impact: {
    intro:
      'I rebuilt the design system behind three dashboards so they could scale, and made them responsive. Components and colors stopped being daily design work, and developers reused elements instead of building new UI each time.',
    metrics: [
      {
        numLabel: 'METRIC 1 OF 4',
        kClass: 'k0',
        title: 'UI implementation cases dropped by 90%',
        desc: 'Having 3 large products with different users could confuse any designer working on task in any of the products. Creating a unified library erased the confusion phase. We no longer needed to look back to previous designs to make sure things are consistent.',
        cardLabel: '● UI implementation',
        cardTagBg: 'var(--color-primary-tint)',
        cardTagColor: 'var(--color-primary-dark)',
        cardPeriod: '[Period]',
        cardValue: '−90%',
        cardValueColor: 'var(--color-primary-dark)',
        cardSub: 'UI implementation cases',
        barColor: 'var(--color-primary)'
      },
      {
        numLabel: 'METRIC 2 OF 4',
        kClass: 'k1',
        title: 'Faster UI implementation Helped us Focus more on UX',
        desc: 'With conducted an inside research, measuring time and effort for delivering high-fidelity design. Same people could do much more and think for better solutions and test it much faster than before.',
        cardLabel: '● Design process',
        cardTagBg: 'var(--color-purple-tint)',
        cardTagColor: 'var(--color-purple)',
        cardPeriod: '[Period]',
        cardValue: '5 times',
        cardValueColor: 'var(--color-purple)',
        cardSub: 'Faster generating a UI for tasks.',
        barColor: 'var(--color-purple-light)'
      },
      {
        numLabel: 'METRIC 3 OF 4',
        kClass: 'k2',
        title: 'Size of the library, its learning curve & its Scalabilty',
        desc: 'With a multi-dimensional design system, switching between sub-brands and themes made one problem go away. Files got lighter, & many of redundant components got dismissed. While also gives us the ability to Finally deliver a responsive view in much faster way than just creating new designs in mobile view.',
        cardLabel: '● Dashboards unified',
        cardTagBg: 'var(--color-green-tint)',
        cardTagColor: 'var(--color-green-dark)',
        cardPeriod: 'Apr – Jun 2025',
        cardValue: '-%67',
        cardValueColor: 'var(--color-green-dark)',
        cardSub: 'Size of library and components.',
        barColor: 'var(--color-green)'
      },
      {
        numLabel: 'METRIC 4 OF 4',
        kClass: 'k3',
        title: 'Task Duration for integrating contracts with vendors',
        desc: 'Reducing integration time from 20 to only 5 days (from dealing to shipping their shopping page) by creating a contract tool that translates complex commission policies into code queries. We studied 20 contracts & managed to model a 5 dimensional model. reducing the time for developing proper queries for each exception and making it fully automatic, covering 95% cases.',
        cardLabel: '● Contract maker',
        cardTagBg: 'var(--color-orange-tint)',
        cardTagColor: 'var(--color-orange-dark)',
        cardPeriod: '[Period]',
        cardValue: '4 times',
        cardValueColor: 'var(--color-orange-dark)',
        cardSub: 'Faster making contracts with new vendors',
        barColor: 'var(--color-orange)'
      }
    ]
  },
  timeline: {
    steps: [
      {
        dotColor: 'var(--color-orange)',
        period: 'June 2021 · Developer',
        title: 'Joined Pinket as a backend and full-stack developer',
        desc: 'Built backend features with Java and PostgreSQL, working with APIs, business logic, and data architecture, then expanded into React.js.'
      },
      {
        dotColor: 'var(--color-purple-light)',
        period: 'June 2022 · Designer',
        title: 'Moved into UI/UX design',
        desc: 'Took over product design across B2B and B2C products and became the owner of all design files and the approver of internal design decisions.'
      },
      {
        dotColor: 'var(--color-green)',
        period: '[Year] · First theme',
        title: 'Updated the first dashboards theme',
        desc: 'Refreshed the original dashboard theme and workflows. [Add what changed and the outcome.]'
      },
      {
        dotColor: 'var(--color-primary-light)',
        period: 'April – June 2025 · Design system',
        title: 'Applied UntitledUI across all dashboards',
        desc: 'Rebuilt the design system for the admin, vendor, and organization dashboards. It made them responsive and easier to scale, and components and colors stopped being daily design work.'
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
        gradient: 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))',
        label: 'Dashboard Overview'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-green), var(--color-primary-light))',
        label: 'Vendor Management'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-orange-light), var(--color-purple-light))',
        label: 'Organization Credit Panel'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-primary-light), var(--color-green))',
        label: 'Smart Contract Tool'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-orange), var(--color-purple-light))',
        label: 'Responsive Tablet View'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-orange), var(--color-orange-light))',
        label: 'Responsive Mobile Moderation'
      }
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
      name: '[Teammate Name]',
      role: 'Frontend Developer',
      quote: '[Replace with a quote about handoff, communication, design system clarity, or edge-case handling.]'
    },
    {
      initials: 'TL',
      avatarBg: 'green',
      name: '[Teammate Name]',
      role: 'Team Lead / Engineering',
      quote: '[Replace with a quote on speed, initiative, business impact, or how the work moved the team forward.]'
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
