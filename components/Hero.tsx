import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 bg-dot-grid opacity-100" />

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(99,102,241,0.07), transparent 70%)' }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl animate-float-slow pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-3xl animate-float-slower pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      <div
        className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.08] blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Location badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
              AI Strategy · Tokyo · Pedagogy Director at 42 Tokyo
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-tight leading-[1.05] text-zinc-50 mb-6"
          >
            Operational
            <br />
            Intelligence{' '}
            <span className="text-gradient">
              for the
              <br />
              AI Era.
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10"
          >
            Anthony Colas — AI systems advisor and operational architect based in Tokyo.
            Working at the intersection of AI, operations, education, and organizational
            transformation. Building systems that make AI real inside organizations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Work With Me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#workshops"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-300 rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200 hover:bg-white/[0.03]"
            >
              Explore Workshops
            </a>
            <a
              href="#building"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-all duration-200"
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap gap-8"
          >
            {[
              { value: '6', label: 'Languages spoken' },
              { value: '42', label: 'Tokyo pedagogy director' },
              { value: 'JP · FR · EN', label: 'Workshop delivery' },
              { value: '∞', label: 'Systems perspective' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-zinc-100 tracking-tight">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
};
