export interface SupportTier {
  id: string
  name: string
  amountUsd: number
  summary: string
  perks: string[]
}

export const supportTiers: SupportTier[] = [
  {
    id: 'signal-boost',
    name: 'Signal Boost',
    amountUsd: 5,
    summary: 'A small one-time push for the project and a clean way to follow along from the beginning.',
    perks: [
      'Support the project directly',
      'Follow campaign-style development updates',
    ],
  },
  {
    id: 'founding-supporter',
    name: 'Founding Supporter',
    amountUsd: 15,
    summary: 'For people who want to help early and be counted among the first visible backers.',
    perks: [
      'Everything in Signal Boost',
      'Optional supporter recognition in a backer roll',
    ],
  },
  {
    id: 'basin-archive-pass',
    name: 'Basin Archive Pass',
    amountUsd: 30,
    summary: 'A tier shaped around development notes, process updates, and the project archive itself.',
    perks: [
      'Everything in Founding Supporter',
      'Backer-oriented process notes and archive-style updates',
    ],
  },
  {
    id: 'confluence-backer',
    name: 'Confluence Backer',
    amountUsd: 50,
    summary: 'A stronger signal of support for the people who want to help make the long build sustainable.',
    perks: [
      'Everything in Basin Archive Pass',
      'Name in project credits',
    ],
  },
  {
    id: 'dispatch-circle',
    name: 'Dispatch Circle',
    amountUsd: 100,
    summary: 'For backers who want to materially improve the project runway and stay close to milestone-level communication.',
    perks: [
      'Everything in Confluence Backer',
      'Periodic backer Q&A updates or development briefings',
    ],
  },
  {
    id: 'institutional-patron',
    name: 'Institutional Patron',
    amountUsd: 250,
    summary: 'A high-trust tier for people who want to give the project serious room to breathe.',
    perks: [
      'Everything in Dispatch Circle',
      'Small-group supporter roundtable access when organized',
    ],
  },
  {
    id: 'anchor-patron',
    name: 'Anchor Patron',
    amountUsd: 500,
    summary: 'The highest public support tier on the page, built for people who want to back the long build in a major way.',
    perks: [
      'Everything in Institutional Patron',
      'Prominent supporter acknowledgment in credits',
    ],
  },
]