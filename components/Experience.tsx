import { motion } from 'framer-motion';

const timeline = [
  {
    period: '2024 – Present',
    title: 'Pedagogy Director',
    org: '42 Tokyo',
    location: 'Tokyo, Japan',
    description:
      'Leading AI integration in a world-class technical education environment. Designing curriculum at the intersection of technical mastery and operational thinking. Building AI-native educational frameworks for the next generation of builders.',
    tags: ['AI Education', 'Curriculum Design', 'Technical Leadership'],
  },
  {
    period: '2023 – Present',
    title: 'Enterprise AI Workshop Facilitator',
    org: 'Independent',
    location: 'Japan & International',
    description:
      'Designing and delivering AI literacy and operational AI workshops for enterprise teams across Japan and internationally. Helping organizations build genuine AI understanding and move from experimentation to real implementation.',
    tags: ['Enterprise', 'AI Workshops', 'Organizational Change'],
  },
  {
    period: '2022 – 2023',
    title: 'AI Systems Developer',
    org: 'International',
    location: 'Remote / Global',
    description:
      'Building operational AI systems, automation workflows, and full-stack applications. Implementing AI tools from prototype to production across diverse technical and organizational environments.',
    tags: ['AI Systems', 'Automation', 'Full-Stack'],
  },
  {
    period: '2020 – 2022',
    title: 'Frontend Engineer',
    org: 'International',
    location: 'Multi-market',
    description:
      'Full-stack development across international markets, including Web3 applications and decentralized systems. Building scalable technical foundations and developing deep technical intuition across stacks.',
    tags: ['React', 'TypeScript', 'Web3'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
              Experience
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight mb-6"
            >
              Ecosystem
              <br />
              & background.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-zinc-500 leading-relaxed">
              Built across education, industry, and technology — with a consistent thread of operational systems thinking.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-8 relative"
          >
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/30 via-white/[0.06] to-transparent" />

            <div className="space-y-10 pl-8">
              {timeline.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full border border-blue-500/40 bg-[#09090b]">
                    <div className="absolute inset-0.5 rounded-full bg-blue-500/40" />
                  </div>

                  <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-zinc-100 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-500 mt-0.5">
                          {item.org} · {item.location}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-mono text-zinc-600 mt-0.5">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs text-zinc-500 bg-white/[0.03] border border-white/[0.05] rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
