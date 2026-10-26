export const pinketCustomerData = {
  id: 'pinket-customer',
  thumbnail: '/assets/projects/pinket-customer/thumbnail.png',
  hero: {
    tags: ['Mobile web', 'Research', 'Case study'],
    title: 'Pinket: Customer App',
    subtitle: 'B2B2C financial wallet for organizational welfare',
    mockupUrl: 'yourproduct.com',
    thumbnail: '/assets/projects/pinket-customer/thumbnail.png',
    mockupGradient: 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))',
    meta: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Timeline', value: 'April 2022 – June 2026' },
      { label: 'Team', value: '7 people' },
      { label: 'Platform', value: 'Mobile web app' }
    ]
  },
  overview: {
    p1: 'Pinket is a B2B2C financial wallet for organizational welfare. It connects organizations, their employees, and retail partners through digital wallets, credit, online shopping, and in-store purchases. It pivoted from an online chain-store to this model, and three large organizations were set to bring about 4 million users.',
    p2: 'I joined Pinket in 2021 as a backend developer and moved into UI/UX design in April 2022. I owned all design files and approved internal design decisions, working mainly on the customer app: a React web app for employees and customers, designed for mobile only. The team had one PM, one APM, one or two frontend developers, and two to four backend developers. Product direction came mainly from product management, with limited data behind decisions, so I used usability tests and phone interviews to ground design choices in user evidence wherever the process allowed. My work covered:',
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
      'Pinket changed from an online chain-store to a B2B2C financial platform, so the customer app’s personas, journeys, and UI all had to change. By unifying design and making clear path for desired features based on new users, Here are few cases we achieved:',
    metrics: [
      {
        numLabel: 'METRIC 1 OF 4',
        kClass: 'k0',
        title: 'Increase of order count by focusing on in-store journey',
        desc: 'We found users tend to buy groceries in-person. To improve users access to their credit, we conducted a full in-store payment journey, tripling orders count per month.',
        cardLabel: '● Potential reach',
        cardTagBg: 'var(--color-primary-tint)',
        cardTagColor: 'var(--color-primary-dark)',
        cardPeriod: 'Business case',
        cardValue: '4M',
        cardValueColor: 'var(--color-primary-dark)',
        cardSub: 'Potential users with at least one purchace per month across 5 large organizations',
        barColor: 'var(--color-primary)'
      },
      {
        numLabel: 'METRIC 2 OF 4',
        kClass: 'k1',
        title: 'Interviewed about 80 users to learn why purchases were not finished',
        desc: 'Most problems came from vendors’ delivery range, users not finding the right vendor, and inconsistent data across market branches. This resulted an update in our in-store journey to fix the issue.',
        cardLabel: '● User research',
        cardTagBg: 'var(--color-purple-tint)',
        cardTagColor: 'var(--color-purple)',
        cardPeriod: 'April 2023',
        cardValue: '~80',
        cardValueColor: 'var(--color-purple)',
        cardSub: 'Phone interviews on purchase drop-off',
        barColor: 'var(--color-purple-light)'
      },
      {
        numLabel: 'METRIC 3 OF 4',
        kClass: 'k2',
        title: 'One unified UI with Personalization for Organizations.',
        desc: 'Most of the organizations we work with needed a personalized version of pinket for their brand. We updated our design system to be able to inherit themes without losing Identity.',
        cardLabel: '● Unified UI',
        cardTagBg: 'var(--color-green-tint)',
        cardTagColor: 'var(--color-green-dark)',
        cardPeriod: '2024-2025',
        cardValue: '12',
        cardValueColor: 'var(--color-green-dark)',
        cardSub: 'Single UI adapting 12 brands (so far)',
        barColor: 'var(--color-green)'
      },
      {
        numLabel: 'METRIC 4 OF 4',
        kClass: 'k3',
        title: 'From FMCG to 17 Categories & Services',
        desc: 'Organizations demanded more diversity for how to use credits. The journey had to adapt new cases, shopping, entertainment, and a lot more.',
        cardLabel: '● [Metric name]',
        cardTagBg: 'var(--color-orange-tint)',
        cardTagColor: 'var(--color-orange-dark)',
        cardPeriod: 'Jan 2024 - Mar 2026',
        cardValue: '+5000',
        cardValueColor: 'var(--color-orange-dark)',
        cardSub: 'added market branches & services across 17 different categories',
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
        period: '[Year] · Customer app',
        title: 'Evolved the app through repeated product changes',
        desc: 'The app and the idea changed many times over the years, so the design evolved continuously while staying unified.'
      },
      {
        dotColor: 'var(--color-primary-light)',
        period: '[Year] · Pivot',
        title: 'Unified the UI after the B2B2C pivot',
        desc: 'Moved away from the older UI kit, updated journeys based on new competitors, and brought new values to the app.'
      }
    ]
  },
  showcase: {
    type: 'mobile',
    items: [
      {
        gradient: 'linear-gradient(135deg, var(--color-orange), var(--color-orange-light))',
        label: 'Customer Wallet'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-purple-light), var(--color-primary-light))',
        label: 'BNPL Checkout'
      },
      {
        bg: '/assets/projects/pinket-customer/mockups/showcase-online-explore-translated.png',
        label: 'Marketplace Explore (Translated)'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-orange-light), var(--color-purple-light))',
        label: 'In-Store Purchase Flow'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-primary-light), var(--color-green))',
        label: 'Payment Gateway'
      },
      {
        gradient: 'linear-gradient(135deg, var(--color-orange), var(--color-purple-light))',
        label: 'Order Confirmation'
      }
    ]
  },
  comments: [
    {
      initials: 'PM',
      avatarBg: 'primary',
      name: '[Teammate Name]',
      role: 'Product Manager',
      quote: '[Replace with a short, honest quote from a colleague about how it was to work with you on this project.]'
    },
    {
      initials: 'FE',
      avatarBg: 'purple',
      name: 'Alireza Khosrojerdi',
      role: 'Frontend Developer',
      quote: 'Armin has always paid close attention to detail and made collaboration between design and frontend teams a priority, doing both exceptionally well.\n His designs are always clear and well-documented, allowing frontend developers to start implementation with confidence and without ambiguity.'
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
    next: {
      to: '/works/pinket-dashboard',
      label: 'Next work',
      title: 'Pinket: Dashboards'
    }
  }
}
