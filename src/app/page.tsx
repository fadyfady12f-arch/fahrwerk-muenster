'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// ═══════════════════════════════════════════════════════════════
//                    ANIMATED COUNTER
// ═══════════════════════════════════════════════════════════════

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = value;
    const stepTime = (duration * 1000) / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ═══════════════════════════════════════════════════════════════
//                    FLOATING PARTICLES
// ═══════════════════════════════════════════════════════════════

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FF6B35]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
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

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#FF6B35]/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              FW
            </motion.div>
            <div className="hidden sm:block">
              <motion.div
                className="font-bold text-white text-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                FAHRWERK
              </motion.div>
              <motion.div
                className="text-xs text-[#FF6B35]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Münster
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Kurse', 'Klassen', 'Team', 'FAQ', 'Kontakt'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm text-white/70 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <motion.a
              href="tel:+4917682081601"
              className="hidden lg:flex items-center gap-2 text-sm text-white/70 hover:text-[#FF6B35] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
              >
                📞
              </motion.span>
              <span>0176-82081601</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#kontakt"
                className="px-5 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-shadow"
              >
                Jetzt anmelden
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-white rounded"
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded"
                animate={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded"
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="flex flex-col gap-6">
              {['Kurse', 'Klassen', 'Team', 'FAQ', 'Kontakt'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-bold text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
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
//                    HERO SECTION
// ═══════════════════════════════════════════════════════════════

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF6B35]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </motion.div>

      <FloatingParticles />

      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/5 border border-[#FF6B35]/30 mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-xl"
              >
                🚗
              </motion.span>
              <span className="text-sm font-medium text-white/90">Führerschein in 10 Tagen möglich!</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                →
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                FAHRWERK.
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-[#FF6B35] via-[#FFB366] to-[#FF6B35] bg-clip-text text-transparent bg-[length:200%_auto] block"
                animate={{ backgroundPosition: ['0%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                Die Fahrschule
              </motion.span>
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                in Münster
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Schnell. Schneller. <span className="text-[#FF6B35] font-semibold">FAHRWERK.</span> Mit unserer 
              Intensivausbildung erreichst du deinen Führerschein in Rekordzeit.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#kontakt"
                  className="group px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-bold text-white flex items-center gap-3 shadow-2xl shadow-[#FF6B35]/40 hover:shadow-[#FF6B35]/60 transition-shadow"
                >
                  <span>Jetzt starten</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#kurse"
                  className="px-8 py-4 bg-white/5 border border-white/20 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Kurse entdecken
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { value: 10, label: 'Tage Express', suffix: '' },
                { value: 5, label: 'Google Rating', suffix: '.0 ⭐' },
                { value: 1000, label: 'Fahrschüler', suffix: '+' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className="text-3xl font-black text-[#FF6B35]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - 3D Card Grid */}
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, rotateY: -30 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: '🚗', title: 'PKW', desc: 'Klasse B/B197', color: '#FF6B35', delay: 0.6 },
                { icon: '🏍️', title: 'Motorrad', desc: 'Klasse A', color: '#8B5CF6', delay: 0.7 },
                { icon: '🚐', title: 'Anhänger', desc: 'Klasse BE', color: '#10B981', delay: 0.8 },
                { icon: '⚡', title: 'Express', desc: '10 Tage!', color: '#F59E0B', delay: 0.9 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateX: 20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: item.delay, type: 'spring' }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: `0 25px 50px -12px ${item.color}40`,
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${item.color}30 0%, transparent 70%)`,
                    }}
                  />
                  
                  <motion.div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-5"
                    style={{ background: `${item.color}20` }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="relative font-bold text-white text-xl mb-2">{item.title}</h3>
                  <p className="relative text-white/50">{item.desc}</p>
                  
                  {/* Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: item.color }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white">→</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold text-white shadow-lg"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: 'spring' }}
              whileHover={{ scale: 1.1 }}
            >
              ⭐ Top bewertet!
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-3">
          <motion.div
            className="w-2 h-3 bg-[#FF6B35] rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
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
      gradient: 'from-emerald-500/20 to-emerald-500/5',
      features: ['Flexibles Lerntempo', 'Persönliche Betreuung', 'Easy Ausbildung', 'Keine Eile'],
      popular: false,
    },
    {
      title: 'Intensiv',
      duration: '4-6 Wochen',
      icon: '🚀',
      color: '#FF6B35',
      gradient: 'from-[#FF6B35]/30 to-[#FF6B35]/5',
      features: ['Theorie + Praxis verzahnt', 'Hoher Lerneffekt', 'Bevorzugte Antragstellung', 'Schneller fertig'],
      popular: true,
    },
    {
      title: 'Express',
      duration: '10 Tage',
      icon: '⚡',
      color: '#8B5CF6',
      gradient: 'from-purple-500/20 to-purple-500/5',
      features: ['Maximale Geschwindigkeit', 'Sofortige Prüfungen', 'Bevorzugte Antragstellung', 'Rekordzeit'],
      popular: false,
    },
  ];

  return (
    <section id="kurse" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            🎓 Von Standard bis Express
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            In deinem Tempo zum{' '}
            <span className="text-[#FF6B35]">Führerschein</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Wähle das Ausbildungsmodell, das zu dir passt. 
            Wir bringen dich ans Ziel! 🎯
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {kurse.map((kurs, i) => (
            <motion.div
              key={i}
              className={`relative group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <motion.div
                className={`relative p-8 rounded-3xl border bg-gradient-to-b ${kurs.gradient} backdrop-blur-sm overflow-hidden h-full ${
                  kurs.popular
                    ? 'border-[#FF6B35]/50 shadow-2xl shadow-[#FF6B35]/20'
                    : 'border-white/10'
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {kurs.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-full text-sm font-bold text-white shadow-lg"
                    initial={{ scale: 0, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    🔥 BELIEBT
                  </motion.div>
                )}

                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-8"
                  style={{ background: `${kurs.color}20` }}
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {kurs.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">{kurs.title}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-black" style={{ color: kurs.color }}>
                    {kurs.duration}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {kurs.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-center gap-3 text-white/70"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.1 }}
                    >
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm" style={{ background: `${kurs.color}30`, color: kurs.color }}>
                        ✓
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#kontakt"
                    className={`block text-center py-4 rounded-2xl font-bold transition-all ${
                      kurs.popular
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A25] text-white shadow-lg shadow-[#FF6B35]/30'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    Kurs wählen →
                  </Link>
                </motion.div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${kurs.color}15 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
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
    { name: 'Schero', role: 'Inhaber & Fahrlehrer', image: '/assets/team/schero.webp', klassen: 'B / BE', sprachen: 'DE, EN, KU', emoji: '⚽' },
    { name: 'Nils', role: 'Fahrlehrer', image: '/assets/team/nils.webp', klassen: 'B / BE', sprachen: 'DE', emoji: '🎖️' },
    { name: 'Alan', role: 'Fahrlehrer', image: '/assets/team/alan.webp', klassen: 'B / BE', sprachen: 'DE, EN, KU', emoji: '😄' },
    { name: 'Saad', role: 'Fahrlehrer', image: '/assets/team/saad.webp', klassen: 'B / BE', sprachen: 'DE, EN', emoji: '🧘' },
    { name: 'Idris', role: 'Fahrlehrer', image: '/assets/team/idris.webp', klassen: 'B / BE', sprachen: 'DE, AF', emoji: '💪' },
  ];

  return (
    <section id="team" className="py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            👨‍🏫 Mit uns zum Führerschein!
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Das <span className="text-[#FF6B35]">FAHRWERK</span> Team
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Kompetent, geduldig und immer gut drauf – wir begleiten dich auf deinem Weg! 🚗
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="relative p-5 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring' }}
              >
                {/* Emoji Badge */}
                <motion.div
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#FF6B35]/20 flex items-center justify-center text-xl z-10"
                  whileHover={{ scale: 1.2, rotate: 20 }}
                >
                  {member.emoji}
                </motion.div>

                {/* Image */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-[#FF6B35]/20 to-purple-500/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-bold text-white text-xl mb-1">{member.name}</h3>
                <p className="text-[#FF6B35] text-sm font-medium mb-4">{member.role}</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">
                    📋 {member.klassen}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">
                    🗣️ {member.sprachen}
                  </span>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-t from-[#FF6B35]/10 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    FAQ SECTION
// ═══════════════════════════════════════════════════════════════

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Was ist an eurer Fahrschule besonders?', a: 'Wir sind Spezialisten für die Intensivausbildung! Bei uns kannst du innerhalb von 10 Tagen zu deinem Führerschein kommen – und das easy!' },
    { q: 'Wie schnell kann ich meinen Führerschein machen?', a: 'Mit unserem Express-Kurs in nur 10 Tagen! Im Intensivkurs 4-6 Wochen, klassisch 3-6 Monate – du entscheidest!' },
    { q: 'Kann ich meine Musik während der Fahrstunden hören?', a: 'Klar! Deine Lieblingsmusik kann dir helfen, entspannt zu sein. Sprich einfach deinen Fahrlehrer an!' },
    { q: 'Welche Sprachen sprecht ihr?', a: 'Deutsch, Englisch, Kurdisch und Afghanisch – wir helfen dir in deiner Sprache!' },
    { q: 'Habt ihr eine App?', a: 'Ja! Mit der drive.buzz App lernst du flexibel für die Theorieprüfung und hast alle Termine im Blick.' },
  ];

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold mb-6">
            ❓ Häufige Fragen
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Noch <span className="text-[#FF6B35]">Fragen?</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.button
                className={`w-full p-6 rounded-2xl text-left transition-all ${
                  openIndex === i
                    ? 'bg-gradient-to-r from-[#FF6B35]/20 to-transparent border-[#FF6B35]/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                } border`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    className="text-[#FF6B35] text-2xl flex-shrink-0"
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-white/60 mt-4 overflow-hidden"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
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
  return (
    <section id="kontakt" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[150px] -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold mb-6">
              ✉️ Schreib uns!
            </span>
            <h2 className="text-4xl font-black text-white mb-4">
              Wir sind <span className="text-[#FF6B35]">für dich da!</span>
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Du möchtest mehr über unsere Kurse erfahren? Schick uns eine Nachricht!
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.input
                  type="text"
                  placeholder="Dein Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Deine E-Mail"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.input
                type="tel"
                placeholder="Deine Telefonnummer"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.select
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="">Kurs wählen...</option>
                <option value="klassisch">📚 Klassisch (3-6 Monate)</option>
                <option value="intensiv">🚀 Intensiv (4-6 Wochen)</option>
                <option value="express">⚡ Express (10 Tage)</option>
              </motion.select>
              <motion.textarea
                placeholder="Deine Nachricht"
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 transition-colors resize-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-bold text-white text-lg shadow-2xl shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nachricht senden 🚀
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Standorte */}
            {[
              { name: 'Bremer Platz', address: 'Bremer Platz 5, 48155 Münster', hint: '🚂 4 Min vom Hbf' },
              { name: 'Metzer Straße', address: 'Metzer Str. 73, 48151 Münster', hint: '🚌 8 Min von Haltestelle Inselbogen' },
            ].map((standort, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                  <span>📍</span>
                  {standort.name}
                </h3>
                <p className="text-white/60 mb-2">{standort.address}</p>
                <p className="text-[#FF6B35] text-sm">{standort.hint}</p>
              </motion.div>
            ))}

            {/* Öffnungszeiten */}
            <motion.div
              className="p-6 rounded-3xl bg-white/5 border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span>🕐</span>
                Öffnungszeiten
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/60">Mo - Do</span>
                  <span className="text-white font-medium">14:30 - 19:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Fr - So</span>
                  <span className="text-white/40">geschlossen</span>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="p-6 rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 to-transparent border border-[#FF6B35]/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-white text-lg mb-4">Direkter Kontakt</h3>
              <div className="space-y-4">
                <motion.a
                  href="tel:+4917682081601"
                  className="flex items-center gap-3 text-white/80 hover:text-[#FF6B35] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl">📞</span>
                  <span>0176 - 820 816 01</span>
                </motion.a>
                <motion.a
                  href="mailto:info@fahrwerk-muenster.de"
                  className="flex items-center gap-3 text-white/80 hover:text-[#FF6B35] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl">✉️</span>
                  <span>info@fahrwerk-muenster.de</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/4917682081601"
                  className="flex items-center gap-3 text-white/80 hover:text-[#25D366] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
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
    <footer className="py-16 border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-bold text-white">
              FW
            </div>
            <span className="text-white/60">© 2025 Fahrwerk Münster GmbH</span>
          </motion.div>

          <div className="flex items-center gap-6">
            {[
              { name: 'Instagram', url: 'https://instagram.com/fahrwerkms' },
              { name: 'Facebook', url: 'https://facebook.com/FahrwerkMS' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                className="text-white/40 hover:text-[#FF6B35] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {social.name}
              </motion.a>
            ))}
            <Link href="/impressum" className="text-white/40 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-white/40 hover:text-white transition-colors">
              Datenschutz
            </Link>
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
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <KurseSection />
      <TeamSection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  );
}
