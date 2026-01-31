'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Impressum() {
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

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-12">Impressum</h1>

            <div className="space-y-10 text-white/70">
              {/* Kontaktdaten */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Kontaktdaten nach § 5 DDG</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="font-bold text-white text-lg mb-2">Fahrwerk Münster GmbH</p>
                  <p>Bremer Platz 5</p>
                  <p className="mb-4">48155 Münster</p>
                  <p>Telefon: 0173 / 6522872</p>
                  <p>E-Mail: <a href="mailto:info@fahrwerk-muenster.de" className="text-[#FF6B35] hover:underline">info@fahrwerk-muenster.de</a></p>
                </div>
              </section>

              {/* Geschäftsführer */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Geschäftsführung</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p><strong className="text-white">Geschäftsführer (angestellt):</strong> Schero Hajo</p>
                  <p><strong className="text-white">Berufsbezeichnung:</strong> Fahrlehrer</p>
                </div>
              </section>

              {/* Erlaubnis */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Erlaubnis</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Erlaubnis nach §§ 10, 11 Fahrlehrergesetz</p>
                  <p className="mt-2"><strong className="text-white">Zuständige Behörde:</strong></p>
                  <p>Ordnungsamt</p>
                  <p>Fahrerlaubnis / Fahrschulen</p>
                  <p>Tel.: 0251 / 49 23 503</p>
                </div>
              </section>

              {/* Handelsregister */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Handelsregister</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Handelsregister: HRB 20069</p>
                  <p>Registergericht: Amtsgericht Münster</p>
                </div>
              </section>

              {/* Urheberrechte */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Urheberrechte</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Das Copyright für von der Fahrwerk Münster GmbH selbst erstellte Bildern und Texten bleibt allein bei uns. Eine Vervielfältigung oder Verwendung solcher Fotos und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung von uns nicht gestattet. Das Copyright für die anderen verwendeten Fotos bleibt bei deren Urhebern.</p>
                </div>
              </section>

              {/* Verbraucher-Streitbeilegung */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Verbraucher-Streitbeilegung</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </section>
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
              <Link href="/impressum" className="text-[#FF6B35]">Impressum</Link>
              <Link href="/datenschutz" className="text-white/40 hover:text-white">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
