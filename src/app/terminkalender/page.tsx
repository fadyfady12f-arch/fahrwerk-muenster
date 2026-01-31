'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Terminkalender() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#12121f] to-[#0a0a12]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#FF6B35]/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              FW
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-bold text-white text-lg">FAHRWERK</div>
              <div className="text-xs text-[#FF6B35]">Münster</div>
            </div>
          </Link>
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.span
              className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold mb-6"
            >
              📅 Kursplan
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Theorie-<span className="text-[#FF6B35]">Blockunterricht</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Wir bieten unseren Theorieunterricht als Blockunterricht an. 
              So kannst du in nur 7 Werktagen alle Theoriestunden absolvieren!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Info Box */}
      <div className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-3xl p-8 border border-[#FF6B35]/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚠️</span>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Wichtiger Hinweis</h2>
                <p className="text-white/70">
                  Die Theoriestunden können nur innerhalb eines kompletten Blocks durchlaufen werden! 
                  Einzelne Stunden auf mehrere Monate verteilt sind leider nicht möglich.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vorteile */}
          <motion.div
            className="mt-12 grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: '⚡', title: '7 Werktage', desc: 'Kompletter Theorieblock' },
              { icon: '📚', title: 'Alle Stunden', desc: 'Am Stück absolvieren' },
              { icon: '✅', title: 'Prüfungsbereit', desc: 'Direkt zur Prüfung' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                whileHover={{ y: -5, borderColor: 'rgba(255,107,53,0.3)' }}
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/60 mb-6">
              Möchtest du dich für einen Kurs anmelden?
            </p>
            <Link
              href="/#kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-bold text-white text-lg shadow-xl shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-shadow"
            >
              Jetzt Kontakt aufnehmen 🚀
            </Link>
          </motion.div>

          {/* Kontakt Info */}
          <motion.div
            className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">📞 Fragen zum Kursplan?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-white/50 mb-2">Telefon</p>
                <a href="tel:+4917682081601" className="text-[#FF6B35] text-xl font-bold hover:underline">
                  0176 - 820 816 01
                </a>
              </div>
              <div className="text-center">
                <p className="text-white/50 mb-2">E-Mail</p>
                <a href="mailto:info@fahrwerk-muenster.de" className="text-[#FF6B35] text-xl font-bold hover:underline">
                  info@fahrwerk-muenster.de
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-white/40">© 2025 Fahrwerk Münster GmbH</span>
            <div className="flex items-center gap-6">
              <Link href="/impressum" className="text-white/40 hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="text-white/40 hover:text-white">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
