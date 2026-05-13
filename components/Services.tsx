import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Enterprise AI Workshops',
    description:
      'Bridging the gap between AI potential and organizational reality. Executive-focused workshops that build genuine understanding and translate it into operational strategy.',
    points: [
      'AI literacy for leadership teams',
      'Practical adoption frameworks',
      'Use-case identification and prioritization',
      'From experimentation to implementation',
    ],
    accent: 'from-blue-500/20 to-blue-500/5',
    dot: 'bg-blue-400',
  },
  {
    num: '02',
    title: 'AI Operational Systems',
    description:
      'Building the AI infrastructure modern organizations need. End-to-end operational system design — from agent architectures to automated workflows and internal intelligence.',
    points: [
      'AI agent design and deployment',
      'Workflow automation engineering',
      'Internal tooling and operational intelligence',
      'MCP infrastructure implementation',
    ],
    accent: 'from-violet-500/20 to-violet-500/5',
    dot: 'bg-violet-400',
  },
  {
    num: '03',
    title: 'Strategic AI Advisory',
    description:
      'Clear-eyed AI strategy for leadership teams navigating real implementation. Cutting through hype to identify where AI creates durable value — and how to get there.',
    points: [
      'AI transformation roadmapping',
      'Integration and adoption strategy',
      'Organizational enablement',
      'Implementation leadership',
    ],
    accent: 'from-indigo-500/20 to-indigo-500/5',
    dot: 'bg-indigo-400',
  },
  {
    num: '04',
    title: 'Innovation & Ecosystem',
    description:
      'Connecting people, organizations, and ideas at the frontier of AI and technology. Building bridges between education, industry, and international AI ecosystems.',
    points: [
      'Technology community leadership',
      'Future workforce development',
      'International ecosystem connections',
      'Cross-cultural technology partnerships',
    ],
    accent: 'from-cyan-500/20 to-cyan-500/5',
    dot: 'bg-cyan-400',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
            Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight max-w-2xl"
          >
            Where I create
            <br />
            the most impact.
          </motion.h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.num}
              variants={fadeUp}
              className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.03] transition-all duration-300"
            >
              {/* Number + dot */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-zinc-600">{service.num}</span>
                <span className={`w-2 h-2 rounded-full ${service.dot}`} />
              </div>

              <h3 className="text-lg font-bold text-zinc-100 mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
