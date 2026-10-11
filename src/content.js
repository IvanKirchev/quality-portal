export const BOOKING_URL = 'https://cal.eu/velithicai/30min'

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Principles', href: '#principles' },
  { label: 'About', href: '#about' },
]

export const services = [
  {
    title: 'AI Agents',
    subtitle: 'Custom agents designed for dependable production use',
    description:
      'We build AI agents around your workflows, systems, and domain knowledge. Every solution includes the engineering needed to understand how the agent behaves, measure its quality, control its actions, and operate it sustainably.',
    supportingText:
      'Our agent harnesses combine evaluation, observability, guardrails, human approval, and cost controls—so agents remain transparent, resilient, and reliable as models, data, and business requirements evolve.',
    examples: [
      {
        title: 'Conversational AI',
        description: 'Assistants grounded in internal documentation for employee enablement, customer support, and client assistance.',
      },
      {
        title: 'Mobile and web automation',
        description: 'In-house agent technology that transforms natural-language instructions into reproducible UI tests and automation flows.',
      },
      {
        title: 'Context-aware coding agents',
        description: 'Securely connect coding agents to internal systems, architecture, and engineering knowledge, with support for SQL, Java, TypeScript, and Python.',
      },
    ],
    capabilities: [
      'Custom agent harnesses and orchestration',
      'Automated and human-led evaluations',
      'Tracing, monitoring, and observability',
      'Guardrails and human approval workflows',
      'Quality, latency, and cost optimization',
      'Resilience to model, data, and workflow changes',
    ],
    featured: true,
  },
  {
    title: 'RAG and Knowledge Systems',
    subtitle: 'Trusted organizational knowledge for agents and applications',
    description:
      'We design versioned and validated data pipelines that transform fragmented organizational information into reliable, permission-aware knowledge for AI systems.',
    supportingText:
      'Velithic integrates documents, databases, APIs, source code, and operational platforms into vector, graph, or hybrid retrieval architectures. Each system is designed to improve answer quality, reduce hallucinations, and avoid unnecessary context and token consumption.',
    note:
      'Knowledge graphs are used where relationships, traceability, and multi-step retrieval create measurable value—including GraphRAG architectures—rather than being treated as a standalone objective.',
    capabilities: [
      'Versioned ingestion and transformation pipelines',
      'Data validation and quality monitoring',
      'Vector, graph, and hybrid retrieval',
      'Multi-source knowledge integration',
      'Permission-aware retrieval',
      'Source attribution and traceable answers',
      'Retrieval and answer-quality evaluation',
      'Context and token optimization',
    ],
  },
  {
    title: 'MCP and Agent Integrations',
    subtitle: 'Secure tools that connect agents to real systems',
    description:
      'We build custom Model Context Protocol servers that give AI agents controlled access to business APIs, data, and operational tools.',
    supportingText:
      'Each integration is designed with authentication, authorization, auditability, and clear tool boundaries. Role-based access ensures that agents—and the people using them—can reach only the capabilities and information they are permitted to use.',
    capabilities: [
      'Custom MCP server development',
      'Secure API and data integrations',
      'Authentication and authorization',
      'Role-based access control',
      'Tool-level permissions and validation',
      'Audit logs and operational visibility',
      'Safe read and write operations',
      'Integration testing and evaluation',
    ],
    featured: true,
  },
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
