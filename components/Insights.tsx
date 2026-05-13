import { motion } from 'framer-motion';

const articles = [
  {
    category: 'AI Operations',
    readTime: '8 min',
    title: 'Why Most AI Implementations Fail — And What Operational Teams Do Differently',
    excerpt:
      'The gap between AI potential and organizational reality isn\'t technical. It\'s architectural. Organizations that succeed with AI don\'t start with the model — they start with the system.',
    date: 'Coming soon',
    href: '#insights',
  },
  {
    category: 'AI Systems',
    readTime: '6 min',
    title: 'From Prompt Engineering to System Design: The Shift Nobody Is Talking About',
    excerpt:
      'There\'s a moment in every organization\'s AI journey when prompts stop being the answer. That\'s when the real work — and the real value — begins. Building systems, not just interfaces.',
    date: 'Coming soon',
    href: '#insights',
  },
  {
    category: 'AI Infrastructure',
    readTime: '10 min',
    title: 'Building AI-Native Operations: The Infrastructure Behind the Intelligence',
    excerpt:
      'Most organizations approach AI adoption backward — starting with the model and ending with the use case. Here\'s the operational architecture that makes AI actually stick.',
    date: 'Coming soon',
    href: '#insights',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Insights = () => {
  return (
    <section id="insights" className="py-28 md:py-36 relative">
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
            Insights
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight leading-tight"
            >
              Field notes on
              <br />
              AI & operations.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-zinc-500 md:text-right max-w-xs leading-relaxed">
              Practical thinking from someone building AI systems in the real world — not theorizing about them.
            </motion.p>
          </div>
        </motion.div>

        {/* Articles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={fadeUp}
              className="group flex flex-col p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
            >
              {/* Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-zinc-500 px-2 py-0.5 bg-white/[0.03] rounded-md border border-white/[0.05]">
                  {article.category}
                </span>
                <span className="text-xs text-zinc-600">{article.readTime} read</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-zinc-100 leading-snug tracking-tight mb-3 group-hover:text-white transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-zinc-500 leading-relaxed flex-1">{article.excerpt}</p>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-xs text-zinc-600">{article.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 group-hover:text-blue-400 transition-colors">
                  Read
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
