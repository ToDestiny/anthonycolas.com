import { motion } from 'framer-motion';

const workshops = [
  {
    id: 'genai',
    tag: 'Half-day · Full-day',
    title: 'Generative AI for Business Leaders',
    description:
      'Strategic AI literacy for executives and senior leadership. Not a tech briefing — a practical framework for understanding AI impact and building a real adoption path.',
    audience: 'C-suite, department heads, senior management',
    outcomes: [
      'Understand real AI capabilities and limitations',
      'Identify high-impact use cases for your organization',
      'Build a practical AI adoption framework',
      'Move from experimentation to operational implementation',
    ],
    languages: ['English', 'French', 'Japanese'],
    format: 'In-person · Hybrid available',
    accentClass: 'border-blue-500/20 bg-blue-500/[0.03]',
    tagClass: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  {
    id: 'agents',
    tag: 'Full-day',
    title: 'AI Agents & Operational Systems',
    description:
      'A technical and strategic deep dive into AI agent architectures for operational teams. Understand how multi-agent systems work and how to deploy them in real business environments.',
    audience: 'CTOs, COOs, operations directors, technical leadership',
    outcomes: [
      'Understand AI agent architectures',
      'Design multi-agent workflows for real operations',
      'Build internal automation pipelines',
      'Deploy practical agent systems',
    ],
    languages: ['English', 'French', 'Japanese'],
    format: 'In-person · Hands-on sessions',
    accentClass: 'border-violet-500/20 bg-violet-500/[0.03]',
    tagClass: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
  {
    id: 'automation',
    tag: 'Half-day Intensive',
    title: 'AI Workflow Automation',
    description:
      'Hands-on workshop for teams ready to start automating. Map your operational processes, identify automation opportunities, and build your first AI-powered workflows.',
    audience: 'Operations teams, founders, department leads',
    outcomes: [
      'Map and identify automation opportunities',
      'Build AI-powered workflow prototypes',
      'Connect AI tools to existing systems',
      'Reduce operational overhead with practical AI',
    ],
    languages: ['English', 'French'],
    format: 'In-person · Hands-on',
    accentClass: 'border-indigo-500/20 bg-indigo-500/[0.03]',
    tagClass: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  },
  {
    id: 'enterprise',
    tag: '2-Day Program',
    title: 'Enterprise AI Adoption Accelerator',
    description:
      'A comprehensive, structured engagement for enterprise teams ready to move on AI seriously. Assessment, strategy, champion training, and implementation roadmap — in two focused days.',
    audience: 'Enterprise leadership and transformation teams',
    outcomes: [
      'Complete AI readiness assessment',
      'Build organizational AI strategy',
      'Train internal AI champions',
      'Define a concrete implementation roadmap',
    ],
    languages: ['English', 'French', 'Japanese'],
    format: 'Executive workshop · Follow-up included',
    accentClass: 'border-cyan-500/20 bg-cyan-500/[0.03]',
    tagClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Workshops = () => {
  return (
    <section id="workshops" className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-4"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
            Workshops
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight max-w-xl"
            >
              Executive-grade
              <br />
              AI education.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-zinc-500 max-w-xs leading-relaxed md:text-right">
              Delivered in English, French, and Japanese. In-person across Japan and internationally.
            </motion.p>
          </div>
        </motion.div>

        {/* Workshop cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {workshops.map((workshop) => (
            <motion.div
              key={workshop.id}
              variants={fadeUp}
              className={`p-8 rounded-2xl border ${workshop.accentClass} hover:border-white/[0.12] transition-all duration-300 flex flex-col gap-6`}
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-zinc-100 tracking-tight leading-snug flex-1">
                  {workshop.title}
                </h3>
                <span className={`shrink-0 px-2.5 py-1 text-xs font-medium rounded-full border ${workshop.tagClass}`}>
                  {workshop.tag}
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">{workshop.description}</p>

              {/* Outcomes */}
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                  Key Outcomes
                </p>
                <ul className="space-y-2">
                  {workshop.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <svg className="mt-0.5 shrink-0 w-3.5 h-3.5 text-blue-400" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-zinc-600 mb-1">Target</p>
                  <p className="text-xs text-zinc-400">{workshop.audience}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-1">Languages</p>
                  <p className="text-xs text-zinc-400">{workshop.languages.join(' · ')}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-zinc-600 mb-1">Format</p>
                  <p className="text-xs text-zinc-400">{workshop.format}</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Workshop Inquiry
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
