export const BOOKING_URL = 'https://cal.eu/velithicai/30min'

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'The system', href: '#system' },
  { label: 'Principles', href: '#principles' },
  { label: 'About', href: '#about' },
]

export const services = [
  {
    number: '01',
    title: 'Applied AI training',
    description:
      'Role-specific workshops that turn AI curiosity into safe, repeatable habits for engineering, product, delivery, and leadership teams.',
    outcome: 'Your teams leave with workflows they can use the next morning.',
    details: ['Hands-on exercises', 'Team playbooks', 'Adoption roadmaps'],
  },
  {
    number: '02',
    title: 'Custom agent harnesses',
    description:
      'Purpose-built agents that understand your domain, use your tools, and coordinate complex work with explicit control points.',
    outcome: 'Automate the handoffs around expert work—not the judgment inside it.',
    details: ['Multi-agent orchestration', 'Human approvals', 'Enterprise integrations'],
    featured: true,
  },
  {
    number: '03',
    title: 'RAG & conversational AI',
    description:
      'Knowledge applications that connect scattered internal sources and return useful, permission-aware answers with traceable evidence.',
    outcome: 'Make organizational knowledge accessible, grounded, and actionable.',
    details: ['Hybrid retrieval', 'Source citations', 'Quality evaluation'],
  },
  {
    number: '04',
    title: 'POC to production',
    description:
      'A rigorous assessment and engineering path for AI prototypes that need to become dependable internal or customer-facing systems.',
    outcome: 'Know what is ready to scale, what must change, and how quality is proven.',
    details: ['Evaluations & guardrails', 'Security & privacy', 'Observability & cost'],
  },
]

export const sources = ['Product docs', 'Tickets & roadmaps', 'Code & decisions', 'Operational data']

export const lifecycleAgents = [
  'Discover',
  'Plan',
  'Refine',
  'Build',
  'Review',
  'Test',
  'Release',
  'Learn',
]

export const principles = [
  {
    number: '01',
    title: 'Workflow before model',
    text: 'Start with the decision, handoff, or repeated task that needs to improve—not with a fashionable model.',
  },
  {
    number: '02',
    title: 'Evidence over confidence',
    text: 'Ground outputs in trusted sources, trace what happened, and evaluate the behavior that matters.',
  },
  {
    number: '03',
    title: 'Control where it counts',
    text: 'Use permissions, guardrails, and human approval whenever an agent can change important state.',
  },
  {
    number: '04',
    title: 'Built to be operated',
    text: 'Treat prompts, workflows, data, latency, and cost as maintainable parts of a real software system.',
  },
]

export const founder = {
  name: 'Ivan Kirchev',
  role: 'Founder & Lead AI Engineer',
  initials: 'IK',
  image: '/ivan-kirchev.png',
  bio: [
    'I have spent more than seven years building enterprise software across Java microservices, fintech, and applied AI.',
    'Today, I design agentic applications, RAG platforms, evaluation systems, and AI initiatives from roadmap to reliable delivery—working with a trusted network of specialists when a project calls for a broader team.',
  ],
}
