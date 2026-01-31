'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// ═══════════════════════════════════════════════════════════════
//                    ANIMATED BACKGROUND
// ═══════════════════════════════════════════════════════════════

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating orbs */}
      <motion.div
        className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute top-[40%] -left-[200px] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            background: ['#FF6B35', '#8B5CF6', '#10B981', '#F59E0B'][i % 4],
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    NAVIGATION
// ═══════════════════════════════════════════════════════════════

function Navigation({ currentPage }: { currentPage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Startseite' },
    { href: '/team', label: 'Team' },
    { href: '/terminkalender', label: 'Terminkalender' },
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 shadow-2xl shadow-black/50' : 'bg-black/60'
        }`}
        style={{ backdropFilter: 'blur(20px)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-black text-white text-xl shadow-xl shadow-[#FF6B35]/40"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                boxShadow: ['0 0 20px rgba(255,107,53,0.3)', '0 0 40px rgba(255,107,53,0.5)', '0 0 20px rgba(255,107,53,0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FW
            </motion.div>
            <div className="hidden sm:block">
              <motion.div className="font-black text-white text-xl tracking-tight">
                FAHRWERK
              </motion.div>
              <motion.div className="text-sm text-[#FF6B35] font-medium">
                Münster
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium py-2 transition-colors group ${
                    currentPage === link.href ? 'text-[#FF6B35]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FFB366]"
                    initial={{ width: currentPage === link.href ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="tel:+4917682081601"
              className="hidden md:flex items-center gap-2 text-sm text-white/70 hover:text-[#FF6B35] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                className="text-xl"
              >
                📞
              </motion.span>
              <span>0176-82081601</span>
            </motion.a>

            <motion.button
              className="lg:hidden w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-white/5 rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span className="w-6 h-0.5 bg-white rounded" animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} />
              <motion.span className="w-6 h-0.5 bg-white rounded" animate={{ opacity: mobileOpen ? 0 : 1 }} />
              <motion.span className="w-6 h-0.5 bg-white rounded" animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl pt-28 px-8 lg:hidden"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-black transition-colors ${
                      currentPage === link.href ? 'text-[#FF6B35]' : 'text-white hover:text-[#FF6B35]'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    FOOTER
// ═══════════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-black text-white"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                FW
              </motion.div>
              <div>
                <div className="font-black text-white">FAHRWERK</div>
                <div className="text-xs text-[#FF6B35]">Münster</div>
              </div>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed">
              Deine moderne Fahrschule in Münster. Schnell, kompetent und zum fairen Preis zum Führerschein.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: '/', label: 'Startseite' },
                { href: '/team', label: 'Team' },
                { href: '/terminkalender', label: 'Kurse' },
                { href: '/impressum', label: 'Impressum' },
                { href: '/datenschutz', label: 'Datenschutz' },
              ].map((link) => (
                <motion.div key={link.href} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-white/50 hover:text-[#FF6B35] text-sm transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <motion.a 
                href="tel:+4917682081601" 
                className="flex items-center gap-3 text-white/50 hover:text-[#FF6B35] transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>📞</span> 0176 - 820 816 01
              </motion.a>
              <motion.a 
                href="mailto:info@fahrwerk-muenster.de" 
                className="flex items-center gap-3 text-white/50 hover:text-[#FF6B35] transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>✉️</span> info@fahrwerk-muenster.de
              </motion.a>
              <motion.a 
                href="https://wa.me/4917682081601" 
                className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>💬</span> WhatsApp
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/40 text-sm">© 2025 Fahrwerk Münster GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="text-white/40 hover:text-white text-sm transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-white/40 hover:text-white text-sm transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    MAIN LAYOUT EXPORT
// ═══════════════════════════════════════════════════════════════

interface SubPageLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function SubPageLayout({ children, currentPage }: SubPageLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#12121f] to-[#0a0a12] relative">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} />
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}
