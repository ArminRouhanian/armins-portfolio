export const projectsData = {
  'pinket-dashboard': {
    id: 'pinket-dashboard',
    hero: {
      tags: ['Responsive web', 'B2B', 'Case study'],
      title: 'Pinket: Dashboards',
      subtitle: 'Admin, vendor, and organization dashboards',
      mockupUrl: 'yourproduct.com',
      mockupImage: '/assets/pinket-dashboard-b5e58b75-2dbd-4c87-87af-efe40ed76f30.png',
      mockupGradient: 'linear-gradient(135deg,#0ACF83,#1ABCFE)',
      meta: [
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Timeline', value: 'June 2022 – June 2026' },
        { label: 'Team', value: 'Squad of 6–9 people' },
        { label: 'Platform', value: 'Responsive website' }
      ]
    },
    overview: {
      p1: 'Pinket is a B2B2C financial wallet for organizational welfare. It connects organizations, their employees, and retail partners through digital wallets, credit, online shopping, and in-store purchases. It pivoted from an online chain-store to this model, and three large organizations were set to bring about 4 million users, with roughly 2000 billion Toman (about $10M) a month in potential.',
      p2: 'Pinket has three dashboards: one for admins, one for vendors (markets), and one for organizations. The team behind them focused on financial transactions, making them safe, clear, and automatic. I owned the design files and approved internal design decisions, and although I focused mainly on the customer app, I strongly influenced the dashboards’ design systems and overall workflow. My work covered:',
      checklists: [
        {
          num: '1',
          bg: 'rgb(242, 78, 30)',
          text: 'Update Admin dashboard aligned with technical refactoring, while making sure it is compatible with other operators on other panels.'
        },
        {
          num: '2',
          bg: 'rgb(162, 89, 255)',
          text: "Vendor's Panel: A SaaS for creating and managing orders & stocks for online or in-store shopping via pinket."
        },
        {
          num: '3',
          bg: 'rgb(10, 207, 131)',
          text: 'Organization dashboard: For maintaining Employees & Their credit'
        },
        {
          num: '4',
          bg: '#1ABCFE',
          text: 'Smart contract maker (vendor commission)'
        },
        {
          num: '5',
          bg: 'rgb(255, 114, 98)',
          text: 'Responsive redesign for better moderation'
        },
        {
          num: '6',
          bg: 'rgb(30, 30, 30)',
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
          cardTagBg: '#0D99FF26',
          cardTagColor: '#0C7BD1',
          cardPeriod: '[Period]',
          cardValue: '−90%',
          cardValueColor: '#0C7BD1',
          cardSub: 'UI implementation cases',
          barColor: '#0D99FF'
        },
        {
          numLabel: 'METRIC 2 OF 4',
          kClass: 'k1',
          title: 'Faster UI implementation Helped us Focus more on UX',
          desc: 'With conducted an inside research, measuring time and effort for delivering high-fidelity design. Same people could do much more and think for better solutions and test it much faster than before.',
          cardLabel: '● Design process',
          cardTagBg: '#A259FF26',
          cardTagColor: '#8A3FF0',
          cardPeriod: '[Period]',
          cardValue: '5 times',
          cardValueColor: '#8A3FF0',
          cardSub: 'Faster generating a UI for tasks.',
          barColor: '#A259FF'
        },
        {
          numLabel: 'METRIC 3 OF 4',
          kClass: 'k2',
          title: 'Size of the library, its learning curve & its Scalabilty',
          desc: 'With a multi-dimensional design system, switching between sub-brands and themes made one problem go away. Files got lighter, & many of redundant components got dismissed. While also gives us the ability to Finally deliver a responsive view in much faster way than just creating new designs in mobile view.',
          cardLabel: '● Dashboards unified',
          cardTagBg: '#0ACF8326',
          cardTagColor: '#07875A',
          cardPeriod: 'Apr – Jun 2025',
          cardValue: '-%67',
          cardValueColor: '#07875A',
          cardSub: 'Size of library and components.',
          barColor: '#0ACF83'
        },
        {
          numLabel: 'METRIC 4 OF 4',
          kClass: 'k3',
          title: 'Task Duration for integrating contracts with vendors',
          desc: 'Reducing integration time from 20 to only 5 days (from dealing to shipping their shopping page) by creating a contract tool that translates complex commission policies into code queries. We studied 20 contracts & managed to model a 5 dimensional model. reducing the time for developing proper queries for each exception and making it fully automatic, covering 95% cases.',
          cardLabel: '● Contract maker',
          cardTagBg: '#F24E1E26',
          cardTagColor: '#E03E12',
          cardPeriod: '[Period]',
          cardValue: '4 times',
          cardValueColor: '#E03E12',
          cardSub: 'Faster making contracts with new vendors',
          barColor: '#F24E1E'
        }
      ]
    },
    timeline: {
      steps: [
        {
          dotColor: '#F24E1E',
          period: 'June 2021 · Developer',
          title: 'Joined Pinket as a backend and full-stack developer',
          desc: 'Built backend features with Java and PostgreSQL, working with APIs, business logic, and data architecture, then expanded into React.js.'
        },
        {
          dotColor: '#A259FF',
          period: 'June 2022 · Designer',
          title: 'Moved into UI/UX design',
          desc: 'Took over product design across B2B and B2C products and became the owner of all design files and the approver of internal design decisions.'
        },
        {
          dotColor: '#0ACF83',
          period: '[Year] · First theme',
          title: 'Updated the first dashboards theme',
          desc: 'Refreshed the original dashboard theme and workflows. [Add what changed and the outcome.]'
        },
        {
          dotColor: '#1ABCFE',
          period: 'April – June 2025 · Design system',
          title: 'Applied UntitledUI across all dashboards',
          desc: 'Rebuilt the design system for the admin, vendor, and organization dashboards. It made them responsive and easier to scale, and components and colors stopped being daily design work.'
        }
      ]
    },
    showcase: {
      items: [
        {
          gradient: 'linear-gradient(135deg,#A259FF,#1ABCFE)',
          label: 'Dashboard Overview'
        },
        {
          gradient: 'linear-gradient(135deg,#0ACF83,#1ABCFE)',
          label: 'Vendor Management'
        },
        {
          gradient: 'linear-gradient(135deg,#FF7262,#A259FF)',
          label: 'Organization Credit Panel'
        },
        {
          gradient: 'linear-gradient(135deg,#1ABCFE,#0ACF83)',
          label: 'Smart Contract Tool'
        },
        {
          gradient: 'linear-gradient(135deg,#F24E1E,#A259FF)',
          label: 'Responsive Tablet View'
        },
        {
          gradient: 'linear-gradient(135deg,#F24E1E,#FF7262)',
          label: 'Responsive Mobile Moderation'
        }
      ]
    },
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
  },

  'pinket-customer': {
    id: 'pinket-customer',
    hero: {
      tags: ['Mobile web', 'Research', 'Case study'],
      title: 'Pinket: Customer App',
      subtitle: 'B2B2C financial wallet for organizational welfare',
      mockupUrl: 'yourproduct.com',
      mockupGradient: 'linear-gradient(135deg,#A259FF,#1ABCFE)',
      mockupContent: 'Add mockup',
      meta: [
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Timeline', value: 'June 2022 – June 2026' },
        { label: 'Team', value: 'Squad of 6–9 people' },
        { label: 'Platform', value: 'Mobile web app (React)' }
      ]
    },
    overview: {
      p1: 'Pinket is a B2B2C financial wallet for organizational welfare. It connects organizations, their employees, and retail partners through digital wallets, credit, online shopping, and in-store purchases. It pivoted from an online chain-store to this model, and three large organizations were set to bring about 4 million users, with roughly 2000 billion Toman (about $10M) a month in potential.',
      p2: 'I joined Pinket in 2021 as a backend developer and moved into UI/UX design in June 2022. I owned all design files and approved internal design decisions, working mainly on the customer app: a React web app for employees and customers, designed for mobile only. The team had one PM, one APM, one or two frontend developers, and two to four backend developers. Product direction came mainly from product management, with limited data behind decisions, so I used usability tests and phone interviews to ground design choices in user evidence wherever the process allowed. My work covered:',
      checklists: [
        {
          num: '1',
          bg: 'rgb(242, 78, 30)',
          text: 'Digital wallet for customers'
        },
        {
          num: '2',
          bg: 'rgb(162, 89, 255)',
          text: 'Modeling BNPL & Credits'
        },
        {
          num: '3',
          bg: '#0ACF83',
          text: 'Online shopping'
        },
        {
          num: '4',
          bg: 'rgb(26, 188, 254)',
          text: 'In-store purchase Journey'
        },
        {
          num: '5',
          bg: 'rgb(255, 114, 98)',
          text: 'Online & In-store payment'
        },
        {
          num: '6',
          bg: '#1E1E1E',
          text: 'Pivot redesign (old UI kit to new)'
        }
      ]
    },
    impact: {
      intro:
        'Pinket changed from an online chain-store to a B2B2C financial platform, so the customer app’s personas, journeys, and UI all had to change. I unified the design away from the older UI kit, updated journeys based on new competitors, and brought new values to the app.',
      metrics: [
        {
          numLabel: 'METRIC 1 OF 4',
          kClass: 'k0',
          title: 'Designing for a platform that could reach 4 million users',
          desc: 'Three large organizations were set to bring about 4 million users, with roughly 10 billion Toman (about $100K) a month in potential. [Add whether this is revenue or transaction volume.]',
          cardLabel: '● Potential reach',
          cardTagBg: '#0D99FF26',
          cardTagColor: '#0C7BD1',
          cardPeriod: 'Business case',
          cardValue: '4M',
          cardValueColor: '#0C7BD1',
          cardSub: 'Potential users across 3 large organizations',
          barColor: '#0D99FF'
        },
        {
          numLabel: 'METRIC 2 OF 4',
          kClass: 'k1',
          title: 'Interviewed about 80 users to learn why purchases were not finished',
          desc: 'Most problems came from vendors’ delivery range, users not finding the right vendor, and inconsistent data across market branches.',
          cardLabel: '● User research',
          cardTagBg: '#A259FF26',
          cardTagColor: '#8A3FF0',
          cardPeriod: '[Period]',
          cardValue: '~80',
          cardValueColor: '#8A3FF0',
          cardSub: 'Phone interviews on purchase drop-off',
          barColor: '#A259FF'
        },
        {
          numLabel: 'METRIC 3 OF 4',
          kClass: 'k2',
          title: 'One unified UI after the pivot',
          desc: 'Personas and journeys changed with the pivot, so I updated the older UI and journeys and tried to bring new values to the app. [Add the outcome.]',
          cardLabel: '● Unified UI',
          cardTagBg: '#0ACF8326',
          cardTagColor: '#07875A',
          cardPeriod: '[Period]',
          cardValue: '1',
          cardValueColor: '#07875A',
          cardSub: 'Single UI after the pivot',
          barColor: '#0ACF83'
        },
        {
          numLabel: 'METRIC 4 OF 4',
          kClass: 'k3',
          title: '[One-line headline about this result]',
          desc: '[Explain how it was measured, the time period, and what drove the change.]',
          cardLabel: '● [Metric name]',
          cardTagBg: '#F24E1E26',
          cardTagColor: '#E03E12',
          cardPeriod: '[Period]',
          cardValue: '[00]',
          cardValueColor: '#E03E12',
          cardSub: '[Another outcome]',
          barColor: '#F24E1E'
        }
      ]
    },
    timeline: {
      steps: [
        {
          dotColor: '#F24E1E',
          period: 'June 2021 · Developer',
          title: 'Joined Pinket as a backend and full-stack developer',
          desc: 'Built backend features with Java and PostgreSQL, working with APIs, business logic, and data architecture, then expanded into React.js.'
        },
        {
          dotColor: '#A259FF',
          period: 'June 2022 · Designer',
          title: 'Moved into UI/UX design',
          desc: 'Took over product design across B2B and B2C products and became the owner of all design files and the approver of internal design decisions.'
        },
        {
          dotColor: '#0ACF83',
          period: '[Year] · Customer app',
          title: 'Evolved the app through repeated product changes',
          desc: 'The app and the idea changed many times over the years, so the design evolved continuously while staying unified.'
        },
        {
          dotColor: '#1ABCFE',
          period: '[Year] · Pivot',
          title: 'Unified the UI after the B2B2C pivot',
          desc: 'Moved away from the older UI kit, updated journeys based on new competitors, and brought new values to the app.'
        }
      ]
    },
    showcase: {
      items: [
        {
          gradient: 'linear-gradient(135deg,#F24E1E,#FF7262)',
          label: 'Customer Wallet'
        },
        {
          gradient: 'linear-gradient(135deg,#A259FF,#1ABCFE)',
          label: 'BNPL Checkout'
        },
        {
          gradient: 'linear-gradient(135deg,#0ACF83,#1ABCFE)',
          label: 'Marketplace Navigation'
        },
        {
          gradient: 'linear-gradient(135deg,#FF7262,#A259FF)',
          label: 'In-Store Purchase Flow'
        },
        {
          gradient: 'linear-gradient(135deg,#1ABCFE,#0ACF83)',
          label: 'Payment Gateway'
        },
        {
          gradient: 'linear-gradient(135deg,#F24E1E,#A259FF)',
          label: 'Order Confirmation'
        }
      ]
    },
    nav: {
      next: {
        to: '/works/pinket-dashboard',
        label: 'Next work',
        title: 'Pinket: Dashboards'
      }
    }
  },

  metamondial3d: {
    id: 'metamondial3d',
    hero: {
      tags: ['Redesign', 'Responsive', 'Case study'],
      title: 'MetaMondial3D',
      subtitle: 'Metaverse & NFT Market',
      mockupUrl: 'metamondial3d.com',
      mockupImage: '/assets/metamondial3d-dd748f47-82ad-4f06-89c7-89f18b64fa1e.png',
      mockupGradient: 'linear-gradient(135deg,#A259FF,#1ABCFE)',
      meta: [
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Timeline', value: 'June - July 2022' },
        { label: 'Team', value: 'Lone Freelancer :)' },
        { label: 'Platform', value: 'Desktop' }
      ]
    },
    overview: {
      p1: 'I redesign their main products: Landing page, NFT market, Profile pages (individaul / school / studios), NFT preview and Metaverse explore, to be modern and ready to build. and prepared a design system to help developer implement it easier.',
      p2: 'Client brief is simple: they want to have a website, similiar to other 3D asset markets, while also have other features like Metaverse and NFT capabilities. It should look modern and easy to build. My work covered:',
      checklists: [
        { num: '1', bg: 'rgb(242, 78, 30)', text: 'Landing Page' },
        { num: '2', bg: 'rgb(162, 89, 255)', text: 'NFT Market' },
        { num: '3', bg: '#0ACF83', text: 'NFT Preview' },
        {
          num: '4',
          bg: 'rgb(26, 188, 254)',
          text: 'Profiles (Individual / School / Studio)'
        },
        { num: '5', bg: 'rgb(255, 114, 98)', text: 'Auction / Bidding states' },
        { num: '6', bg: '#1E1E1E', text: 'Metaverse Explore' }
      ]
    },
    impact: {
      intro:
        '[Summarize the outcome in two or three sentences: who it helped and what changed.]',
      metrics: [
        {
          numLabel: 'METRIC 1 OF 4',
          kClass: 'k0',
          title: '[One-line headline about this result]',
          desc: '[Explain how it was measured, the time period, and what drove the change.]',
          cardLabel: '● [Metric name]',
          cardTagBg: '#0D99FF26',
          cardTagColor: '#0C7BD1',
          cardPeriod: '[Period]',
          cardValue: '[+00%]',
          cardValueColor: '#0C7BD1',
          cardSub: '[Key metric, e.g. activation]',
          barColor: '#0D99FF'
        },
        {
          numLabel: 'METRIC 2 OF 4',
          kClass: 'k1',
          title: '[One-line headline about this result]',
          desc: '[Explain how it was measured, the time period, and what drove the change.]',
          cardLabel: '● [Metric name]',
          cardTagBg: '#A259FF26',
          cardTagColor: '#8A3FF0',
          cardPeriod: '[Period]',
          cardValue: '[−00%]',
          cardValueColor: '#8A3FF0',
          cardSub: '[Key metric, e.g. time to complete a task]',
          barColor: '#A259FF'
        },
        {
          numLabel: 'METRIC 3 OF 4',
          kClass: 'k2',
          title: '[One-line headline about this result]',
          desc: '[Explain how it was measured, the time period, and what drove the change.]',
          cardLabel: '● [Metric name]',
          cardTagBg: '#0ACF8326',
          cardTagColor: '#07875A',
          cardPeriod: '[Period]',
          cardValue: '[00]',
          cardValueColor: '#07875A',
          cardSub: '[Screens or flows delivered]',
          barColor: '#0ACF83'
        },
        {
          numLabel: 'METRIC 4 OF 4',
          kClass: 'k3',
          title: '[One-line headline about this result]',
          desc: '[Explain how it was measured, the time period, and what drove the change.]',
          cardLabel: '● [Metric name]',
          cardTagBg: '#F24E1E26',
          cardTagColor: '#E03E12',
          cardPeriod: '[Period]',
          cardValue: '[00]',
          cardValueColor: '#E03E12',
          cardSub: '[Another outcome]',
          barColor: '#F24E1E'
        }
      ]
    },
    timeline: {
      steps: [
        {
          dotColor: '#F24E1E',
          period: '[Phase 1] · Discovery',
          title: 'Competitor Analysis & Foundation',
          desc: "I've spent 4 days to check competitors & Ideas given to me. My Client wanted to have something similar to ArtStation, but focus on AI, NFT & Metaverse. In this phase, I managed to analyze 4 similar companies related to metaverse to learn how they behave and what do they target. [Add the outcome in one line.]"
        },
        {
          dotColor: '#A259FF',
          period: '[Phase 2] · Design',
          title: 'Sketching & Wireframing',
          desc: '[What happened in this phase]. [Add the outcome in one line.]'
        },
        {
          dotColor: '#0ACF83',
          period: '[Phase 3] · Delivery',
          title: 'Revision & Implementation',
          desc: '[What happened in this phase]. [Add the outcome in one line.]'
        },
        {
          dotColor: '#1ABCFE',
          period: '[Phase 4] · Outcome',
          title: 'Mistakes, Lessons & Reflections',
          desc: '[What happened in this phase]. [Add the outcome in one line.]'
        }
      ]
    },
    showcase: {
      items: [
        {
          image: '/assets/metamondial3d-dd748f47-82ad-4f06-89c7-89f18b64fa1e.png',
          label: 'NFT Marketplace Preview'
        },
        {
          gradient: 'linear-gradient(135deg,#F24E1E,#FF7262)',
          label: 'Metaverse Explore'
        },
        {
          gradient: 'linear-gradient(135deg,#A259FF,#1ABCFE)',
          label: 'Artist Profile'
        },
        {
          gradient: 'linear-gradient(135deg,#0ACF83,#1ABCFE)',
          label: 'Bidding System'
        },
        {
          gradient: 'linear-gradient(135deg,#FF7262,#A259FF)',
          label: 'Auction Details'
        },
        {
          gradient: 'linear-gradient(135deg,#1ABCFE,#0ACF83)',
          label: 'Asset Library'
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
}
