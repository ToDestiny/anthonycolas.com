import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/motion';

const contexts = [
  {
    label: 'Position',
    statement:
      "Most AI advisory stops at the strategy deck. The systems I build don’t live in slide decks — they go into production.",
  },
  {
    label: 'Context',
    statement:
      'Operating at the intersection of 42 Tokyo’s technical education ecosystem and enterprise AI implementation means I see both ends: the people building AI and the organizations trying to use it.',
  },
  {
    label: 'Approach',
    statement:
      'Six languages, three continents, one consistent question: what does it actually take to make AI operational inside a real organization?',
  },
];

export const Context = () => {
  return (
    <section id="context" className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-20"
        >
          <motion.p variants={fadeUp} className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4">
            Context
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-[52px] font-bold text-zinc-50 tracking-[-0.03em] leading-[1.08] max-w-lg"
          >
            Why it matters
            <br />
            where I stand.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          className="divide-y divide-white/[0.05]"
        >
          {contexts.map((ctx, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="grid grid-cols-12 gap-8 py-12 items-start"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-[0.15em]">
                  {ctx.label}
                </span>
              </div>
              <div className="col-span-12 md:col-span-10 lg:col-span-7">
                <p className="text-xl md:text-2xl text-zinc-200 leading-[1.6] tracking-[-0.01em] font-light">
                  {ctx.statement}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
