import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Anthony brings something rare — he understands AI technically, but speaks the language of operations and business reality. The workshop changed how our entire leadership team thinks about AI adoption.',
    name: 'Head of Operations',
    org: 'Enterprise Technology Company, Tokyo',
  },
  {
    quote:
      'Working with Anthony on our AI implementation roadmap gave us clarity we hadn\'t found anywhere else. His framework is practical, not theoretical — which is exactly what we needed.',
    name: 'Director of Digital Transformation',
    org: 'Financial Services, Japan',
  },
  {
    quote:
      'The AI systems Anthony designed didn\'t just work — they changed how our organization operates. He builds for real environments, not ideal conditions. That\'s the difference.',
    name: 'COO',
    org: 'Professional Services Firm, International',
  },
];

const ecosystemItems = [
  { label: '42 Tokyo', sub: 'Education' },
  { label: 'Enterprise Workshops', sub: 'Japan & International' },
  { label: 'AI Systems', sub: 'Operational Architecture' },
  { label: 'Innovation Events', sub: 'Tokyo Tech Community' },
  { label: 'Cross-cultural', sub: '6 Languages' },
  { label: 'Global Network', sub: 'Multi-market' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Testimonials = () => {
  return (
    <section id="social-proof" className="py-28 md:py-36 relative">
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
            Reception
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight"
          >
            Credible by proximity
            <br />
            and execution.
          </motion.h2>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] transition-all duration-300 flex flex-col gap-4"
            >
              {/* Quote mark */}
              <div className="text-3xl text-zinc-700 leading-none font-serif select-none">&ldquo;</div>
              <p className="text-sm text-zinc-300 leading-relaxed flex-1 italic">{t.quote}</p>
              <div className="pt-4 border-t border-white/[0.05]">
                <p className="text-xs font-semibold text-zinc-300">{t.name}</p>
                <p className="text-xs text-zinc-600 mt-0.5">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ecosystem badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {ecosystemItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center"
            >
              <p className="text-xs font-semibold text-zinc-300">{item.label}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
