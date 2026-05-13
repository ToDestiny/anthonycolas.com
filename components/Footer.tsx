const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#workshops', label: 'Workshops' },
  { href: '#building', label: 'Building' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">AC</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-300">Anthony Colas</p>
              <p className="text-xs text-zinc-600">AI Strategy · Tokyo</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Anthony Colas
          </p>
        </div>
      </div>
    </footer>
  );
};
