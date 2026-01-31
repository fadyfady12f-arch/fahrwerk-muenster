'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// ═══════════════════════════════════════════════════════════════
//                    NAVIGATION
// ═══════════════════════════════════════════════════════════════

function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-bold text-white">
            FW
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-white">FAHRWERK</div>
            <div className="text-xs text-[#FF6B35]">Münster</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {['Kurse', 'Klassen', 'Team', 'Preise', 'Kontakt'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/70 hover:text-[#FF6B35] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+4917682081601"
            className="hidden sm:flex items-center gap-2 text-sm text-white/70"
          >
            <span>📞</span>
            <span>0176-82081601</span>
          </a>
          <Link
            href="#kontakt"
            className="px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Jetzt anmelden
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    HERO SECTION
// ═══════════════════════════════════════════════════════════════

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 mb-6"
            >
              <span className="text-[#FF6B35]">🚗</span>
              <span className="text-sm text-white/80">Führerschein in 10 Tagen möglich!</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">FAHRWERK.</span>
              <br />
              <span className="text-gradient">Die Fahrschule</span>
              <br />
              <span className="text-white">in Münster</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/60 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Schnell. Schneller. FAHRWERK. Mit unserer Intensivausbildung 
              erreichst du deinen Führerschein in Rekordzeit – kompetent, 
              vertrauensvoll und zum fairen Preis.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#kontakt"
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-xl font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2 glow-orange"
              >
                <span>Jetzt starten</span>
                <span>→</span>
              </Link>
              <Link
                href="#kurse"
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-white hover:bg-white/10 transition-colors"
              >
                Kurse entdecken
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: '10', label: 'Tage Express', suffix: '' },
                { value: '5.0', label: 'Google Rating', suffix: '⭐' },
                { value: '2', label: 'Standorte', suffix: '' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B35]">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Feature Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚗', title: 'PKW', desc: 'Klasse B/B197', color: '#FF6B35' },
                { icon: '🏍️', title: 'Motorrad', desc: 'Klasse A', color: '#8B5CF6' },
                { icon: '🚐', title: 'Anhänger', desc: 'Klasse BE', color: '#10B981' },
                { icon: '⚡', title: 'Express', desc: '10 Tage', color: '#F59E0B' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `${item.color}20` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#FF6B35] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    KURSE SECTION
// ═══════════════════════════════════════════════════════════════

function KurseSection() {
  const kurse = [
    {
      title: 'Klassisch',
      duration: '3-6 Monate',
      icon: '📚',
      color: '#10B981',
      features: ['Flexibles Lerntempo', 'Persönliche Betreuung', 'Easy Ausbildung'],
      popular: false,
    },
    {
      title: 'Intensiv',
      duration: '4-6 Wochen',
      icon: '🚀',
      color: '#FF6B35',
      features: ['Theorie + Praxis verzahnt', 'Hoher Lerneffekt', 'Bevorzugte Antragstellung'],
      popular: true,
    },
    {
      title: 'Express',
      duration: '10 Tage',
      icon: '⚡',
      color: '#8B5CF6',
      features: ['Maximale Geschwindigkeit', 'Sofortige Prüfungen', 'Bevorzugte Antragstellung'],
      popular: false,
    },
  ];

  return (
    <section id="kurse" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-4">
            Von Standard bis Express
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            In deinem Tempo zum Führerschein
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Wähle das Ausbildungsmodell, das zu dir passt. 
            Ob klassisch, intensiv oder blitzschnell – wir bringen dich ans Ziel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {kurse.map((kurs, i) => (
            <motion.div
              key={i}
              className={`relative p-6 rounded-2xl border card-hover ${
                kurs.popular
                  ? 'bg-gradient-to-b from-[#FF6B35]/20 to-transparent border-[#FF6B35]/50'
                  : 'bg-white/5 border-white/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {kurs.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF6B35] rounded-full text-xs font-bold text-white">
                  BELIEBT
                </div>
              )}

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: `${kurs.color}20` }}
              >
                {kurs.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{kurs.title}</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold" style={{ color: kurs.color }}>
                  {kurs.duration}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {kurs.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                    <span style={{ color: kurs.color }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#kontakt"
                className={`block text-center py-3 rounded-xl font-medium transition-colors ${
                  kurs.popular
                    ? 'bg-[#FF6B35] text-white hover:bg-[#E55A25]'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Kurs wählen
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    TEAM SECTION
// ═══════════════════════════════════════════════════════════════

function TeamSection() {
  const team = [
    {
      name: 'Schero',
      role: 'Inhaber & Fahrlehrer',
      image: '/assets/team/schero.webp',
      klassen: 'B / BE',
      sprachen: 'Deutsch, Englisch, Kurdisch',
      desc: 'Gebürtiger Münsteraner, leidenschaftlicher Fußballer',
    },
    {
      name: 'Nils',
      role: 'Fahrlehrer',
      image: '/assets/team/nils.webp',
      klassen: 'B / BE',
      sprachen: 'Deutsch',
      desc: 'Souverän, strukturiert, sympathisch',
    },
    {
      name: 'Alan',
      role: 'Fahrlehrer',
      image: '/assets/team/alan.webp',
      klassen: 'B / BE',
      sprachen: 'Deutsch, Englisch, Kurdisch',
      desc: 'Mit Humor und fachlicher Kompetenz',
    },
    {
      name: 'Saad',
      role: 'Fahrlehrer',
      image: '/assets/team/saad.webp',
      klassen: 'B / BE',
      sprachen: 'Deutsch, Englisch',
      desc: 'Geduld und Empathie zeichnen ihn aus',
    },
    {
      name: 'Idris',
      role: 'Fahrlehrer',
      image: '/assets/team/idris.webp',
      klassen: 'B / BE',
      sprachen: 'Deutsch, Afghanisch',
      desc: 'Mit Humor und Klarheit zum Führerschein',
    },
  ];

  return (
    <section id="team" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-4">
            Mit uns zum Führerschein!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Das Team vom FAHRWERK Münster
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Von der Erstberatung bis zur bestandenen Prüfung – wir stehen dir jederzeit zur Seite!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="group p-4 rounded-2xl bg-white/5 border border-white/10 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#FF6B35]/20 to-transparent">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-white text-lg">{member.name}</h3>
              <p className="text-[#FF6B35] text-sm mb-2">{member.role}</p>
              <p className="text-white/50 text-xs mb-3">{member.desc}</p>
              <div className="space-y-1 text-xs text-white/40">
                <p>📋 Klassen: {member.klassen}</p>
                <p>🗣️ {member.sprachen}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    KONTAKT SECTION
// ═══════════════════════════════════════════════════════════════

function KontaktSection() {
  const standorte = [
    {
      name: 'Bremer Platz',
      address: 'Bremer Platz 5, 48155 Münster',
      hint: '4 Min vom Hbf',
    },
    {
      name: 'Metzer Straße',
      address: 'Metzer Str. 73, 48151 Münster',
      hint: '8 Min von Haltestelle Inselbogen',
    },
  ];

  return (
    <section id="kontakt" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-4">
              Schreib uns!
            </span>
            <h2 className="text-3xl font-bold text-white mb-6">
              Wir sind für dich da!
            </h2>
            <p className="text-white/60 mb-8">
              Du möchtest mehr über unsere Kurse erfahren? Schick uns eine Nachricht – 
              wir melden uns schnellstmöglich bei dir.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Dein Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50"
                />
                <input
                  type="email"
                  placeholder="Deine E-Mail"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50"
                />
              </div>
              <input
                type="tel"
                placeholder="Deine Telefonnummer"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50"
              />
              <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 focus:outline-none focus:border-[#FF6B35]/50">
                <option value="">Kurs wählen...</option>
                <option value="klassisch">Klassisch (3-6 Monate)</option>
                <option value="intensiv">Intensiv (4-6 Wochen)</option>
                <option value="express">Express (10 Tage)</option>
              </select>
              <textarea
                placeholder="Deine Nachricht"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
              >
                Nachricht senden 🚀
              </button>
            </form>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Standorte */}
              {standorte.map((standort, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span>📍</span>
                    {standort.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-2">{standort.address}</p>
                  <p className="text-[#FF6B35] text-xs">{standort.hint}</p>
                </div>
              ))}

              {/* Öffnungszeiten */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span>🕐</span>
                  Öffnungszeiten
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Mo - Do</span>
                    <span className="text-white">14:30 - 19:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Fr - So</span>
                    <span className="text-white/40">geschlossen</span>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-transparent border border-[#FF6B35]/30">
                <h3 className="font-bold text-white mb-4">Direkter Kontakt</h3>
                <div className="space-y-3">
                  <a href="tel:+4917682081601" className="flex items-center gap-3 text-white/80 hover:text-[#FF6B35]">
                    <span>📞</span>
                    <span>0176 - 820 816 01</span>
                  </a>
                  <a href="mailto:info@fahrwerk-muenster.de" className="flex items-center gap-3 text-white/80 hover:text-[#FF6B35]">
                    <span>✉️</span>
                    <span>info@fahrwerk-muenster.de</span>
                  </a>
                  <a href="https://wa.me/4917682081601" className="flex items-center gap-3 text-white/80 hover:text-[#25D366]">
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    FOOTER
// ═══════════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-bold text-white text-sm">
              FW
            </div>
            <span className="text-white/60 text-sm">© 2025 Fahrwerk Münster GmbH</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/fahrwerkms" target="_blank" className="text-white/40 hover:text-[#FF6B35]">
              Instagram
            </a>
            <a href="https://facebook.com/FahrwerkMS" target="_blank" className="text-white/40 hover:text-[#FF6B35]">
              Facebook
            </a>
            <a href="/impressum" className="text-white/40 hover:text-white">
              Impressum
            </a>
            <a href="/datenschutz" className="text-white/40 hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    MAIN PAGE
// ═══════════════════════════════════════════════════════════════

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <KurseSection />
      <TeamSection />
      <KontaktSection />
      <Footer />
    </main>
  );
}
