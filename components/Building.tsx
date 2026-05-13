import { motion } from 'framer-motion';

const projects = [
  {
    id: 'agency-os',
    status: 'Active Development',
    statusColor: 'text-emerald-400',
    statusDot: 'bg-emerald-400',
    title: 'Agency OS',
    description:
      'A complete operational backbone for AI-native service businesses. Unified system combining CRM, project management, client communication, and AI agent automation into a single operational layer.',
    tags: ['AI Agents', 'Automation', 'Operations'],
    terminal: [
      '$ status --verbose',
      '',
      '✓  AI Agent Pipeline      Active (14 tasks)',
      '✓  CRM Sync               Running',
      '✓  Knowledge Graph        3,124 nodes',
      '✓  Workflow Engine         8 active flows',
      '◉  Client Onboarding      Deploying...',
    ],
  },
  {
    id: 'knowledge-engine',
    status: 'Internal Beta',
    statusColor: 'text-blue-400',
    statusDot: 'bg-blue-400',
    title: 'AI Knowledge Engine',
    description:
      'A structured knowledge management and contextual retrieval system that gives AI agents deep organizational memory. Enabling domain-specific AI that understands the business — not just the prompt.',
    tags: ['RAG', 'Knowledge Graphs', 'AI Memory'],
    terminal: [
      '$ query --context org',
      '',
      '◎  Indexing: docs/          100%',
      '◎  Embedding: 2,847 chunks  Complete',
      '→  Retrieval latency:       82ms',
      '→  Context accuracy:        94.2%',
      '→  Ready for agent use',
    ],
  },
  {
    id: 'mcp-framework',
    status: 'Building',
    statusColor: 'text-amber-400',
    statusDot: 'bg-amber-400',
    title: 'Enterprise MCP Framework',
    description:
      'A practical framework for deploying Model Context Protocol integrations in enterprise environments — connecting AI models to real business systems, data sources, and operational workflows.',
    tags: ['MCP', 'Enterprise', 'Infrastructure'],
    terminal: [
      '$ mcp connect --env enterprise',
      '',
      '⟳  Connecting to data sources...',
      '✓  CRM adapter              Linked',
      '✓  Document store           Linked',
      '◉  ERP connector            Building...',
      '◉  Real-time sync           Pending',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Building = () => {
  return (
    <section id="building" className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
            Currently Building
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight"
            >
              Not just talking
              <br />
              about AI.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-zinc-500 max-w-xs leading-relaxed md:text-right">
              Actively building and shipping AI operational systems. Here&apos;s what&apos;s in progress.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.10] transition-all duration-300"
            >
              {/* Card header */}
              <div className="p-6 border-b border-white/[0.05]">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.statusDot} animate-pulse`} />
                  <span className={`text-xs font-medium ${project.statusColor}`}>{project.status}</span>
                </div>
                <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{project.description}</p>
              </div>

              {/* Terminal block */}
              <div className="flex-1 bg-[#0d0d10] p-5 font-mono">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                </div>
                <div className="space-y-1">
                  {project.terminal.map((line, i) => (
                    <div key={i} className="text-xs leading-relaxed">
                      {line === '' ? (
                        <span>&nbsp;</span>
                      ) : line.startsWith('$') ? (
                        <span className="text-zinc-300">{line}</span>
                      ) : line.startsWith('✓') ? (
                        <span className="text-emerald-500/80">{line}</span>
                      ) : line.startsWith('◉') ? (
                        <span className="text-amber-500/80">{line}</span>
                      ) : line.startsWith('⟳') ? (
                        <span className="text-zinc-500">{line}</span>
                      ) : line.startsWith('◎') ? (
                        <span className="text-blue-400/70">{line}</span>
                      ) : line.startsWith('→') ? (
                        <span className="text-zinc-400">{line}</span>
                      ) : (
                        <span className="text-zinc-600">{line}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="px-6 py-4 flex flex-wrap gap-2 border-t border-white/[0.04]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-zinc-500 bg-white/[0.03] border border-white/[0.05] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
