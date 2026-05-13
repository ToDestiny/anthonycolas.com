import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const facts = [
  { label: 'Location', value: 'Tokyo, Japan' },
  { label: 'Role', value: 'Pedagogy Director, 42 Tokyo' },
  { label: 'Focus', value: 'AI Operations & Systems' },
  { label: 'Languages', value: 'FR · EN · JP · ZH · ES · TH' },
  { label: 'Workshops', value: 'Enterprise AI, Japan & International' },
  { label: 'Building', value: 'AI-native operational systems' },
];

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative">
      {/* Subtle top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight mb-8"
            >
              From systems thinking
              <br />
              to operational execution.
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m Anthony Colas, an AI systems advisor and operational architect based in Tokyo.
                As Pedagogy Director at 42 Tokyo, I work daily at the intersection of technical
                education and real-world organizational transformation.
              </p>
              <p>
                My work lives in the space between understanding AI deeply and making it work inside
                real organizations — not as a concept or experiment, but as an operational reality.
                I design enterprise workshops, build AI agent systems, automate operational
                workflows, and help leadership teams move from AI curiosity to AI implementation.
              </p>
              <p>
                What I care about is the gap between what AI can do and what organizations actually
                need — and building bridges across it with practical systems, clear thinking, and
                sustainable adoption frameworks.
              </p>
              <p className="text-zinc-300">
                Multilingual across French, English, Japanese, Chinese, Spanish, and Thai, I operate
                comfortably in international and cross-cultural environments. Tokyo is my base;
                the world is the context.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Facts grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pt-16"
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={fadeUp}
                className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.03] transition-all duration-300"
              >
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1.5">{fact.label}</p>
                <p className="text-sm font-semibold text-zinc-200">{fact.value}</p>
              </motion.div>
            ))}

            {/* Quote callout */}
            <motion.div
              variants={fadeUp}
              className="sm:col-span-2 p-5 rounded-xl border-gradient bg-white/[0.02]"
            >
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;Not just talking about AI — actively building the systems that make
                it real inside organizations.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
