'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════════
//                    HERO VIDEO BACKGROUND
// ═══════════════════════════════════════════════════════════════

function HeroVideoBackground() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.2]);
  const blur = useTransform(scrollY, [0, 300], [0, 10]);
  
  return (
    <motion.div 
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ opacity }}
    >
      {/* Video Container with Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        {/* Animated Gradient Overlay for video effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#FF6B35]/20 z-10" />
        
        {/* Dynamic moving background simulating video */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.1) 0%, transparent 40%),
              radial-gradient(ellipse at 60% 80%, rgba(16,185,129,0.1) 0%, transparent 45%),
              linear-gradient(180deg, #0a0a0a 0%, #111111 100%)
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Animated light streaks like car headlights */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] rounded-full"
            style={{
              width: `${150 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(255,107,53,0.6)' : 'rgba(255,255,255,0.4)'}, transparent)`,
              filter: 'blur(1px)',
            }}
            animate={{
              x: ['-200%', '200%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Road/street effect at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 50%, rgba(255,107,53,0.1) 100%)',
          }}
        />
        
        {/* Speedometer-like animated circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#FF6B35]/10"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    CRAZY BACKGROUND EFFECTS
// ═══════════════════════════════════════════════════════════════

function CrazyBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -800]);
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 3000], [0, -180]);
  const scale1 = useTransform(scrollY, [0, 1500, 3000], [1, 1.5, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Giant rotating gradient orb */}
      <motion.div
        className="absolute -top-[400px] -right-[400px] w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
          y: y1,
          rotate: rotate1,
          scale: scale1,
        }}
      />
      
      {/* Floating blue orb */}
      <motion.div
        className="absolute top-[40%] -left-[200px] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          y: y2,
          rotate: rotate2,
        }}
      />
      
      {/* Purple accent */}
      <motion.div
        className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          y: y3,
        }}
      />

      {/* Grid pattern that moves */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          y: useTransform(scrollY, [0, 3000], [0, 200]),
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    FLOATING 3D SHAPES
// ═══════════════════════════════════════════════════════════════

function Floating3DShapes() {
  const { scrollY } = useScroll();
  
  const shapes = [
    { x: '10%', y: '20%', size: 60, color: '#FF6B35', delay: 0 },
    { x: '85%', y: '15%', size: 40, color: '#8B5CF6', delay: 0.5 },
    { x: '75%', y: '60%', size: 50, color: '#10B981', delay: 1 },
    { x: '15%', y: '70%', size: 35, color: '#F59E0B', delay: 1.5 },
    { x: '50%', y: '40%', size: 25, color: '#EC4899', delay: 2 },
    { x: '90%', y: '80%', size: 45, color: '#06B6D4', delay: 0.3 },
    { x: '5%', y: '50%', size: 30, color: '#FF6B35', delay: 0.8 },
    { x: '60%', y: '85%', size: 55, color: '#8B5CF6', delay: 1.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: shape.delay, duration: 1 }}
        >
          <motion.div
            className="w-full h-full rounded-2xl border-2"
            style={{
              borderColor: shape.color,
              background: `${shape.color}10`,
              y: useTransform(scrollY, [0, 3000], [0, -200 - i * 50]),
              rotate: useTransform(scrollY, [0, 3000], [0, 360 + i * 45]),
            }}
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 15, 0],
              rotateY: [0, 15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    ANIMATED PARTICLES
// ═══════════════════════════════════════════════════════════════

function AnimatedParticles() {
  const { scrollY } = useScroll();
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            background: ['#FF6B35', '#8B5CF6', '#10B981', '#F59E0B'][i % 4],
            y: useTransform(scrollY, [0, 3000], [0, -500 - Math.random() * 500]),
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    ANIMATED COUNTER
// ═══════════════════════════════════════════════════════════════

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
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
    const duration = 2000;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={ref}>{count}{suffix}</span>;
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
        style={{
          backdropFilter: `blur(${scrolled ? 20 : 0}px)`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-black text-white text-xl shadow-xl shadow-[#FF6B35]/40"
              whileHover={{ scale: 1.1, rotate: 10, boxShadow: '0 0 40px rgba(255,107,53,0.6)' }}
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

          <div className="hidden md:flex items-center gap-8">
            {['Kurse', 'Fahrzeuge', 'Team', 'Bewertungen', 'FAQ', 'Kontakt'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group py-2"
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FFB366]"
                    initial={{ width: 0 }}
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
              className="hidden lg:flex items-center gap-2 text-sm text-white/70 hover:text-[#FF6B35] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                className="text-xl"
              >
                📞
              </motion.span>
              <span>0176-82081601</span>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#kontakt"
                className="relative px-6 py-3 rounded-xl text-sm font-bold text-white overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#E55A25]"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFB366] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative">Jetzt anmelden</span>
              </Link>
            </motion.div>

            <motion.button
              className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-white/5 rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span className="w-6 h-0.5 bg-white rounded" animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} />
              <motion.span className="w-6 h-0.5 bg-white rounded" animate={{ opacity: mobileOpen ? 0 : 1, scale: mobileOpen ? 0 : 1 }} />
              <motion.span className="w-6 h-0.5 bg-white rounded" animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl pt-28 px-8"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-8">
              {['Kurse', 'Fahrzeuge', 'Team', 'Bewertungen', 'FAQ', 'Kontakt'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -50, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-4xl font-black text-white hover:text-[#FF6B35] transition-colors"
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
//                    HERO SECTION WITH VIDEO BG
// ═══════════════════════════════════════════════════════════════

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 20]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video/Image Background */}
      <HeroVideoBackground />
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale, rotateX, transformPerspective: 1000 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B35]/20 via-[#FF6B35]/10 to-transparent border border-[#FF6B35]/30 mb-10"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-2xl"
              >
                🚗
              </motion.span>
              <span className="text-base font-semibold text-white/90">Führerschein in 10 Tagen möglich!</span>
              <motion.span animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </motion.div>

            <div className="overflow-hidden mb-10">
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <motion.span
                  className="text-white block"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  FAHRWERK.
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-[#FF6B35] via-[#FFB366] to-[#FF6B35] bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ['0%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  Die Fahrschule
                </motion.span>
                <motion.span
                  className="text-white block"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  in Münster
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Schnell. Schneller. <span className="text-[#FF6B35] font-bold">FAHRWERK.</span> Dein 
              Führerschein in Rekordzeit – kompetent, vertrauensvoll, zum fairen Preis.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#kontakt"
                  className="group relative px-10 py-5 rounded-2xl font-bold text-white text-lg overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#E55A25]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#FF6B35]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center gap-3">
                    Jetzt starten
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>🚀</motion.span>
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#kurse"
                  className="px-10 py-5 bg-white/5 border-2 border-white/20 rounded-2xl font-bold text-white text-lg hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm"
                >
                  Kurse entdecken
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: 10, label: 'Tage Express', suffix: '', color: '#FF6B35' },
                { value: 5, label: 'Google Rating', suffix: '.0 ⭐', color: '#F59E0B' },
                { value: 1000, label: 'Fahrschüler', suffix: '+', color: '#10B981' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 30, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15, type: 'spring' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-4xl font-black"
                    style={{ color: stat.color }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-sm text-white/50 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - CRAZY 3D Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring' }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🚗', title: 'PKW', desc: 'Klasse B/B197', color: '#FF6B35', delay: 0.6 },
                { icon: '🏍️', title: 'Motorrad', desc: 'Klasse A', color: '#8B5CF6', delay: 0.7 },
                { icon: '🚐', title: 'Anhänger', desc: 'Klasse BE', color: '#10B981', delay: 0.8 },
                { icon: '⚡', title: 'Express', desc: '10 Tage!', color: '#F59E0B', delay: 0.9 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: 30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: item.delay, type: 'spring' }}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 10,
                    rotateX: -5,
                    z: 50,
                    boxShadow: `0 30px 60px -15px ${item.color}50`,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(45deg, ${item.color}40, transparent, ${item.color}40)`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${item.color}30 0%, transparent 70%)`,
                    }}
                  />
                  
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-6"
                    style={{ background: `${item.color}20`, transform: 'translateZ(20px)' }}
                    whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="relative font-black text-white text-2xl mb-2" style={{ transform: 'translateZ(30px)' }}>
                    {item.title}
                  </h3>
                  <p className="relative text-white/50 text-lg" style={{ transform: 'translateZ(15px)' }}>
                    {item.desc}
                  </p>
                  
                  <motion.div
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                    style={{ background: item.color, transform: 'translateZ(40px)' }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-white text-xl">→</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-6 -right-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl text-base font-black text-white shadow-2xl shadow-green-500/50"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.5, type: 'spring', bounce: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ⭐
              </motion.span>
              {' '}Top bewertet!
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Epic scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-10 h-16 rounded-full border-2 border-white/30 flex justify-center pt-4"
          whileHover={{ borderColor: '#FF6B35', scale: 1.1 }}
        >
          <motion.div
            className="w-3 h-4 bg-gradient-to-b from-[#FF6B35] to-[#E55A25] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
        <motion.p
          className="text-white/30 text-xs mt-3 text-center"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll down
        </motion.p>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    KURSE SECTION WITH EXTREME 3D
// ═══════════════════════════════════════════════════════════════

function KurseSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const kurse = [
    { title: 'Klassisch', duration: '3-6 Monate', icon: '📚', color: '#10B981', features: ['Flexibles Lerntempo', 'Persönliche Betreuung', 'Easy Ausbildung', 'Keine Eile'], popular: false },
    { title: 'Intensiv', duration: '4-6 Wochen', icon: '🚀', color: '#FF6B35', features: ['Theorie + Praxis verzahnt', 'Hoher Lerneffekt', 'Bevorzugte Antragstellung', 'Schneller fertig'], popular: true },
    { title: 'Express', duration: '10 Tage', icon: '⚡', color: '#8B5CF6', features: ['Maximale Geschwindigkeit', 'Sofortige Prüfungen', 'Bevorzugte Antragstellung', 'Rekordzeit'], popular: false },
  ];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  return (
    <section id="kurse" ref={ref} className="py-40 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, rotate }}
      >
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8"
            whileHover={{ scale: 1.1 }}
            animate={{ boxShadow: ['0 0 20px rgba(255,107,53,0)', '0 0 40px rgba(255,107,53,0.3)', '0 0 20px rgba(255,107,53,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎓 Von Standard bis Express
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            In deinem Tempo zum{' '}
            <motion.span
              className="text-[#FF6B35] inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Führerschein
            </motion.span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Wähle das Ausbildungsmodell, das zu dir passt. Wir bringen dich ans Ziel! 🎯
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto perspective-1000">
          {kurse.map((kurs, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 80, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring' }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleMouseMove}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className={`relative p-10 rounded-[2rem] border overflow-hidden h-full ${
                  kurs.popular
                    ? 'bg-gradient-to-b from-[#FF6B35]/20 to-transparent border-[#FF6B35]/50'
                    : 'bg-white/5 border-white/10'
                }`}
                animate={{
                  rotateX: hoveredCard === i ? -5 : 0,
                  rotateY: hoveredCard === i ? 10 : 0,
                  z: hoveredCard === i ? 50 : 0,
                }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  boxShadow: `0 50px 100px -20px ${kurs.color}40, 0 0 40px ${kurs.color}20`,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Holographic shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(
                      105deg, 
                      transparent 40%, 
                      rgba(255,255,255,0.1) 45%, 
                      rgba(255,255,255,0.2) 50%, 
                      rgba(255,255,255,0.1) 55%, 
                      transparent 60%
                    )`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{ backgroundPosition: ['200% 200%', '-100% -100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />

                {/* 3D Floating particles on hover */}
                {hoveredCard === i && [...Array(8)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: kurs.color,
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    initial={{ opacity: 0, scale: 0, z: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      scale: [0, 1.5, 0],
                      y: [0, -50],
                      z: [0, 100, 0],
                    }}
                    transition={{ duration: 1.5, delay: j * 0.1, repeat: Infinity }}
                  />
                ))}

                {kurs.popular && (
                  <motion.div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-full text-sm font-black text-white shadow-xl shadow-[#FF6B35]/40"
                    initial={{ scale: 0, y: 30 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring', bounce: 0.5 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ['0 10px 40px rgba(255,107,53,0.3)', '0 20px 60px rgba(255,107,53,0.5)', '0 10px 40px rgba(255,107,53,0.3)']
                    }}
                    style={{ transform: 'translateZ(60px)' }}
                  >
                    🔥 BELIEBT
                  </motion.div>
                )}

                <motion.div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl mb-10 relative"
                  style={{ 
                    background: `${kurs.color}20`,
                    transform: 'translateZ(40px)',
                    boxShadow: `0 20px 40px ${kurs.color}30`,
                  }}
                  whileHover={{ 
                    rotate: [0, -20, 20, -10, 0], 
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.span
                    animate={{ 
                      y: [0, -5, 0],
                      rotateZ: hoveredCard === i ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {kurs.icon}
                  </motion.span>
                </motion.div>

                <h3 
                  className="text-3xl font-black text-white mb-4"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {kurs.title}
                </h3>
                <motion.div
                  className="text-5xl font-black mb-10"
                  style={{ color: kurs.color, transform: 'translateZ(25px)' }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {kurs.duration}
                </motion.div>

                <ul className="space-y-5 mb-10" style={{ transform: 'translateZ(20px)' }}>
                  {kurs.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-center gap-4 text-white/70 text-lg"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + j * 0.1 }}
                    >
                      <motion.span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                        style={{ background: `${kurs.color}30`, color: kurs.color }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        ✓
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <Link
                    href="#kontakt"
                    className={`block text-center py-5 rounded-2xl font-black text-lg transition-all ${
                      kurs.popular
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A25] text-white shadow-xl shadow-[#FF6B35]/40 hover:shadow-[#FF6B35]/60'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    Kurs wählen →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    FAHRZEUGE / VEHICLES SECTION
// ═══════════════════════════════════════════════════════════════

function FahrzeugeSection() {
  const [activeVehicle, setActiveVehicle] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const vehicles = [
    {
      name: 'VW Golf 8',
      type: 'Schaltung & Automatik',
      image: '🚗',
      color: '#FF6B35',
      features: ['Modernste Technik', 'Assistenzsysteme', 'Perfekt für Anfänger'],
      description: 'Der beliebte Klassiker - ideal für den Führerschein mit seinem übersichtlichen Handling und moderner Ausstattung.',
    },
    {
      name: 'VW Polo',
      type: 'Schaltung',
      image: '🚙',
      color: '#10B981',
      features: ['Kompakt & wendig', 'Sparsam', 'City-freundlich'],
      description: 'Perfekt für das Stadtgebiet - kompakt, wendig und ideal zum Einparken üben!',
    },
    {
      name: 'Anhänger-Kombination',
      type: 'BE-Ausbildung',
      image: '🚐',
      color: '#8B5CF6',
      features: ['Professionell', 'Große Anhänger', 'Sicher trainieren'],
      description: 'Für den BE-Führerschein mit professioneller Anhänger-Kombination zum sicheren Rangieren.',
    },
    {
      name: 'Motorrad',
      type: 'Klasse A',
      image: '🏍️',
      color: '#F59E0B',
      features: ['Honda CB500F', 'Sicher lernen', 'Schutzausrüstung inklusive'],
      description: 'Für alle Zweirad-Fans - sichere Ausbildung auf modernen Maschinen mit kompletter Ausrüstung.',
    },
  ];

  return (
    <section id="fahrzeuge" ref={containerRef} className="py-40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#FF6B35]/5 blur-[120px]"
          style={{ x }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px]"
          style={{ x: useTransform(x, v => `${-parseFloat(v as string)}%`) }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8"
            animate={{ 
              boxShadow: ['0 0 20px rgba(255,107,53,0)', '0 0 40px rgba(255,107,53,0.3)', '0 0 20px rgba(255,107,53,0)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚗 Unsere Flotte
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Unsere <span className="text-[#FF6B35]">Fahrzeuge</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Moderne Fahrzeuge mit neuester Technik für deine sichere Ausbildung!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vehicle Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVehicle}
                className="relative aspect-[4/3] rounded-[3rem] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.5, type: 'spring' }}
                style={{ 
                  background: `linear-gradient(135deg, ${vehicles[activeVehicle].color}20 0%, transparent 50%, ${vehicles[activeVehicle].color}10 100%)`,
                  border: `2px solid ${vehicles[activeVehicle].color}30`,
                }}
              >
                {/* Big emoji as placeholder for actual car images */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-[200px]"
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [0, 2, -2, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {vehicles[activeVehicle].image}
                </motion.div>

                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${vehicles[activeVehicle].color}40 0%, transparent 60%)`,
                  }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Speed lines */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[2px] rounded-full"
                    style={{
                      width: `${80 + Math.random() * 60}px`,
                      left: '-100px',
                      top: `${30 + i * 15}%`,
                      background: `linear-gradient(90deg, transparent, ${vehicles[activeVehicle].color}, transparent)`,
                    }}
                    animate={{ x: ['0%', '500%'], opacity: [0, 1, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                {/* Vehicle info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <motion.h3 
                    className="text-3xl font-black text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {vehicles[activeVehicle].name}
                  </motion.h3>
                  <motion.p 
                    className="text-lg"
                    style={{ color: vehicles[activeVehicle].color }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {vehicles[activeVehicle].type}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {vehicles.map((v, i) => (
                <motion.button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${activeVehicle === i ? 'w-10' : ''}`}
                  style={{ 
                    background: activeVehicle === i ? v.color : 'rgba(255,255,255,0.2)',
                    boxShadow: activeVehicle === i ? `0 0 20px ${v.color}` : 'none',
                  }}
                  onClick={() => setActiveVehicle(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Vehicle Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVehicle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                  {vehicles[activeVehicle].description}
                </p>

                <div className="space-y-4 mb-10">
                  {vehicles[activeVehicle].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        borderColor: vehicles[activeVehicle].color,
                        background: `${vehicles[activeVehicle].color}10`,
                      }}
                    >
                      <motion.span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: `${vehicles[activeVehicle].color}20` }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        ✓
                      </motion.span>
                      <span className="text-white text-lg font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Vehicle selector buttons */}
            <div className="grid grid-cols-2 gap-4">
              {vehicles.map((v, i) => (
                <motion.button
                  key={i}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    activeVehicle === i 
                      ? 'border-[#FF6B35]/50 bg-[#FF6B35]/10' 
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveVehicle(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl mb-2 block">{v.image}</span>
                  <span className="text-white font-bold block">{v.name}</span>
                  <span className="text-white/50 text-sm">{v.type}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    TEAM SECTION WITH MODALS
// ═══════════════════════════════════════════════════════════════

function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  
  const team = [
    { 
      name: 'Schero', 
      role: 'Inhaber & Fahrlehrer', 
      image: '/assets/team/schero.webp', 
      klassen: 'B / BE', 
      sprachen: 'DE, EN, KU', 
      emoji: '⚽',
      bio: 'Als Gründer von FAHRWERK Münster bringe ich über 10 Jahre Erfahrung mit. Meine Mission: Jeden Fahrschüler sicher und entspannt zum Führerschein bringen!',
      funFact: 'Größter Fußball-Fan und FC Barcelona Supporter 🔵🔴',
      motto: '"Gemeinsam schaffen wir das!"',
    },
    { 
      name: 'Nils', 
      role: 'Fahrlehrer', 
      image: '/assets/team/nils.webp', 
      klassen: 'B / BE', 
      sprachen: 'DE', 
      emoji: '🎖️',
      bio: 'Mit meiner ruhigen Art helfe ich auch nervösen Fahrschülern, entspannt durch die Prüfung zu kommen.',
      funFact: 'Ehemaliger Bundeswehr-Fahrer mit Erfahrung auf allen Geländen 🪖',
      motto: '"Ruhe bewahren, sicher fahren!"',
    },
    { 
      name: 'Alan', 
      role: 'Fahrlehrer', 
      image: '/assets/team/alan.webp', 
      klassen: 'B / BE', 
      sprachen: 'DE, EN, KU', 
      emoji: '😄',
      bio: 'Ich sorge dafür, dass jede Fahrstunde Spaß macht! Mit Humor und Geduld zum Erfolg.',
      funFact: 'Bekannt für die besten Witze während der Fahrstunden 😂',
      motto: '"Lachen entspannt - auch beim Fahren!"',
    },
    { 
      name: 'Saad', 
      role: 'Fahrlehrer', 
      image: '/assets/team/saad.webp', 
      klassen: 'B / BE', 
      sprachen: 'DE, EN', 
      emoji: '🧘',
      bio: 'Mein Ansatz: Entspannt bleiben, fokussiert fahren. Ich helfe dir, Ruhe zu bewahren.',
      funFact: 'Praktiziert Yoga und bringt diese Ruhe in jede Fahrstunde 🧘',
      motto: '"Atmen, fokussieren, losfahren!"',
    },
    { 
      name: 'Idris', 
      role: 'Fahrlehrer', 
      image: '/assets/team/idris.webp', 
      klassen: 'B / BE', 
      sprachen: 'DE, AF', 
      emoji: '💪',
      bio: 'Motivation ist alles! Ich pushe jeden Fahrschüler zur Bestleistung.',
      funFact: 'Fitness-Enthusiast der selbst beim Fahren fit bleibt 💪',
      motto: '"Du kannst alles schaffen!"',
    },
  ];

  return (
    <section id="team" className="py-40 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8"
            animate={{ 
              boxShadow: ['0 0 20px rgba(255,107,53,0)', '0 0 40px rgba(255,107,53,0.3)', '0 0 20px rgba(255,107,53,0)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👨‍🏫 Mit uns zum Führerschein!
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            Das <span className="text-[#FF6B35]">FAHRWERK</span> Team
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Klick auf einen Fahrlehrer um mehr zu erfahren!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              onClick={() => setSelectedMember(i)}
            >
              <motion.div
                className="relative p-6 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 overflow-hidden"
                whileHover={{ 
                  y: -15, 
                  scale: 1.05, 
                  rotateY: 10,
                  borderColor: 'rgba(255,107,53,0.5)',
                  boxShadow: '0 30px 60px -15px rgba(255,107,53,0.3)',
                }}
                transition={{ type: 'spring' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glowing border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,107,53,0.3), transparent, rgba(255,107,53,0.3))',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{ backgroundPosition: ['0% 0%', '200% 200%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center text-2xl z-10"
                  whileHover={{ scale: 1.3, rotate: 30 }}
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {member.emoji}
                </motion.div>

                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#FF6B35]/20 to-purple-500/20">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                      backgroundSize: '200% 200%',
                    }}
                    animate={{ backgroundPosition: ['200% 0%', '-100% 0%'] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />

                  {/* "Click for more" overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/80 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-white font-bold text-sm">
                      Mehr erfahren →
                    </span>
                  </motion.div>
                </div>

                <h3 className="font-black text-white text-2xl mb-2">{member.name}</h3>
                <p className="text-[#FF6B35] font-semibold mb-4">{member.role}</p>
                
                <div className="flex flex-wrap gap-2">
                  <motion.span 
                    className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60"
                    whileHover={{ scale: 1.1, background: 'rgba(255,107,53,0.2)' }}
                  >
                    📋 {member.klassen}
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60"
                    whileHover={{ scale: 1.1, background: 'rgba(255,107,53,0.2)' }}
                  >
                    🗣️ {member.sprachen}
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-[3rem] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, rotateY: -30, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotateY: 30, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl hover:bg-[#FF6B35]/50 transition-colors"
                onClick={() => setSelectedMember(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Image */}
                <motion.div 
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden flex-shrink-0 mx-auto md:mx-0"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <Image 
                    src={team[selectedMember].image} 
                    alt={team[selectedMember].name} 
                    fill 
                    className="object-cover" 
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-3xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring', bounce: 0.5 }}
                  >
                    {team[selectedMember].emoji}
                  </motion.div>
                </motion.div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <motion.h3 
                    className="text-4xl font-black text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {team[selectedMember].name}
                  </motion.h3>
                  <motion.p 
                    className="text-[#FF6B35] text-xl font-semibold mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    {team[selectedMember].role}
                  </motion.p>

                  <motion.p 
                    className="text-white/70 text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {team[selectedMember].bio}
                  </motion.p>

                  <motion.div
                    className="p-4 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    <p className="text-[#FF6B35] font-bold mb-1">Fun Fact:</p>
                    <p className="text-white/80">{team[selectedMember].funFact}</p>
                  </motion.div>

                  <motion.p
                    className="text-2xl font-bold text-white/60 italic"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {team[selectedMember].motto}
                  </motion.p>
                </div>
              </div>

              {/* Skills/Tags */}
              <motion.div 
                className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                  📋 Klassen: {team[selectedMember].klassen}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white">
                  🗣️ Sprachen: {team[selectedMember].sprachen}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    TESTIMONIALS / BEWERTUNGEN SECTION
// ═══════════════════════════════════════════════════════════════

function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Lisa M.',
      age: 18,
      course: 'Intensiv-Kurs',
      rating: 5,
      text: 'Dank FAHRWERK habe ich meinen Führerschein in nur 5 Wochen geschafft! Das Team ist super motiviert und hat mir alle Ängste genommen. Kann ich nur weiterempfehlen! 🎉',
      avatar: '👩‍🎓',
      date: 'Januar 2025',
    },
    {
      name: 'Murat K.',
      age: 24,
      course: 'Express 10 Tage',
      rating: 5,
      text: 'Ich brauchte meinen Führerschein schnell für den Job. In 10 Tagen war alles erledigt! Professionell, freundlich und mega effizient. Danke Schero & Team! 💪',
      avatar: '👨‍💼',
      date: 'Dezember 2024',
    },
    {
      name: 'Sophie L.',
      age: 17,
      course: 'BF17',
      rating: 5,
      text: 'Mit 17 schon Auto fahren - dank FAHRWERK war das kein Problem! Die Fahrlehrer sind geduldig und erklären alles super verständlich. Bestanden beim ersten Versuch! ⭐',
      avatar: '👧',
      date: 'November 2024',
    },
    {
      name: 'Tobias R.',
      age: 35,
      course: 'Klassisch',
      rating: 5,
      text: 'Als später Führerschein-Anfänger hatte ich Bedenken, aber das Team hat mich super aufgenommen. Kein Druck, eigenes Tempo - perfekt! Nach 4 Monaten hatte ich den Lappen.',
      avatar: '👨‍🦰',
      date: 'Oktober 2024',
    },
    {
      name: 'Ayla S.',
      age: 22,
      course: 'BE-Anhänger',
      rating: 5,
      text: 'Für den BE-Führerschein war FAHRWERK die beste Wahl! Moderne Fahrzeuge und top Ausbildung. Jetzt kann ich endlich den Pferde-Anhänger selbst fahren! 🐴',
      avatar: '👩‍🔬',
      date: 'September 2024',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="bewertungen" ref={containerRef} className="py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-yellow-500/5 blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-6 py-3 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-bold mb-8"
            animate={{ 
              boxShadow: ['0 0 20px rgba(234,179,8,0)', '0 0 40px rgba(234,179,8,0.3)', '0 0 20px rgba(234,179,8,0)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ Was unsere Fahrschüler sagen
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            <span className="text-yellow-400">5.0</span> Sterne auf Google
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, type: 'spring', bounce: 0.5 }}
                animate={{ 
                  rotateZ: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                whileHover={{ scale: 1.5 }}
              >
                ⭐
              </motion.span>
            ))}
          </div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Über 200 zufriedene Fahrschüler können nicht irren!
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="relative p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote marks */}
              <motion.div
                className="absolute -top-6 -left-2 text-[120px] text-[#FF6B35]/20 font-serif leading-none"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                "
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl text-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Quote text */}
              <motion.p
                className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[activeTestimonial].text}
              </motion.p>

              {/* Author info */}
              <div className="flex items-center gap-6">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35]/30 to-purple-500/30 flex items-center justify-center text-4xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                >
                  {testimonials[activeTestimonial].avatar}
                </motion.div>
                <div>
                  <motion.h4
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].age}
                  </motion.h4>
                  <motion.p
                    className="text-[#FF6B35]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {testimonials[activeTestimonial].course} • {testimonials[activeTestimonial].date}
                  </motion.p>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#FF6B35] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                key={`progress-${activeTestimonial}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              className={`px-6 py-3 rounded-2xl border transition-all flex items-center gap-3 ${
                activeTestimonial === i
                  ? 'bg-[#FF6B35]/20 border-[#FF6B35]/50 text-white'
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
              }`}
              onClick={() => setActiveTestimonial(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{t.avatar}</span>
              <span className="font-medium">{t.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://g.page/r/fahrwerk-muenster/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 rounded-2xl text-white font-bold hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,107,53,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">📝</span>
            Auch eine Bewertung schreiben
            <span>→</span>
          </motion.a>
        </motion.div>
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
    { q: 'Wie schnell kann ich meinen Führerschein machen?', a: 'Mit unserem Express-Kurs in nur 10 Tagen! Im Intensivkurs 4-6 Wochen, klassisch 3-6 Monate.' },
    { q: 'Kann ich meine Musik während der Fahrstunden hören?', a: 'Klar! Deine Lieblingsmusik kann dir helfen, entspannt zu sein. Sprich einfach deinen Fahrlehrer an!' },
    { q: 'Welche Sprachen sprecht ihr?', a: 'Deutsch, Englisch, Kurdisch und Afghanisch – wir helfen dir in deiner Sprache!' },
  ];

  return (
    <section id="faq" className="py-40">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8">❓ Häufige Fragen</span>
          <h2 className="text-5xl font-black text-white">Noch <span className="text-[#FF6B35]">Fragen?</span></h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <motion.button
                className={`w-full p-8 rounded-3xl text-left transition-all ${openIndex === i ? 'bg-gradient-to-r from-[#FF6B35]/20 to-transparent border-[#FF6B35]/40' : 'bg-white/5 border-white/10 hover:bg-white/10'} border`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-white text-xl pr-4">{faq.q}</span>
                  <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }} className="text-[#FF6B35] text-3xl flex-shrink-0">+</motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-white/60 mt-6 text-lg overflow-hidden">
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
    <section id="kontakt" className="py-40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8">✉️ Schreib uns!</span>
            <h2 className="text-5xl font-black text-white mb-6">Wir sind <span className="text-[#FF6B35]">für dich da!</span></h2>
            <p className="text-white/60 mb-12 text-xl">Schick uns eine Nachricht – wir melden uns schnellstmöglich!</p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.input type="text" placeholder="Dein Name" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 text-lg" whileFocus={{ scale: 1.02, borderColor: '#FF6B35' }} />
                <motion.input type="email" placeholder="Deine E-Mail" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 text-lg" whileFocus={{ scale: 1.02 }} />
              </div>
              <motion.input type="tel" placeholder="Deine Telefonnummer" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 text-lg" whileFocus={{ scale: 1.02 }} />
              <motion.select className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white/70 focus:outline-none focus:border-[#FF6B35]/50 text-lg" whileFocus={{ scale: 1.02 }}>
                <option value="">Kurs wählen...</option>
                <option value="klassisch">📚 Klassisch (3-6 Monate)</option>
                <option value="intensiv">🚀 Intensiv (4-6 Wochen)</option>
                <option value="express">⚡ Express (10 Tage)</option>
              </motion.select>
              <motion.textarea placeholder="Deine Nachricht" rows={4} className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B35]/50 text-lg resize-none" whileFocus={{ scale: 1.02 }} />
              <motion.button
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-black text-white text-xl shadow-2xl shadow-[#FF6B35]/40"
                whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(255,107,53,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Nachricht senden 🚀
              </motion.button>
            </form>
          </motion.div>

          <motion.div className="space-y-8" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {[
              { name: 'Bremer Platz', address: 'Bremer Platz 5, 48155 Münster', hint: '🚂 4 Min vom Hbf' },
              { name: 'Metzer Straße', address: 'Metzer Str. 73, 48151 Münster', hint: '🚌 8 Min von Haltestelle' },
            ].map((s, i) => (
              <motion.div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10" whileHover={{ scale: 1.02, borderColor: 'rgba(255,107,53,0.3)' }}>
                <h3 className="font-black text-white text-xl mb-3 flex items-center gap-3"><span>📍</span>{s.name}</h3>
                <p className="text-white/60 mb-2">{s.address}</p>
                <p className="text-[#FF6B35]">{s.hint}</p>
              </motion.div>
            ))}
            <motion.div className="p-8 rounded-3xl bg-white/5 border border-white/10" whileHover={{ scale: 1.02 }}>
              <h3 className="font-black text-white text-xl mb-4">🕐 Öffnungszeiten</h3>
              <div className="flex justify-between"><span className="text-white/60">Mo - Do</span><span className="text-white font-bold">14:30 - 19:00</span></div>
              <div className="flex justify-between mt-2"><span className="text-white/60">Fr - So</span><span className="text-white/40">geschlossen</span></div>
            </motion.div>
            <motion.div className="p-8 rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 to-transparent border border-[#FF6B35]/30" whileHover={{ scale: 1.02 }}>
              <h3 className="font-black text-white text-xl mb-6">Direkter Kontakt</h3>
              <div className="space-y-4">
                <motion.a href="tel:+4917682081601" className="flex items-center gap-4 text-white/80 hover:text-[#FF6B35] text-lg" whileHover={{ x: 10 }}><span className="text-2xl">📞</span>0176 - 820 816 01</motion.a>
                <motion.a href="mailto:info@fahrwerk-muenster.de" className="flex items-center gap-4 text-white/80 hover:text-[#FF6B35] text-lg" whileHover={{ x: 10 }}><span className="text-2xl">✉️</span>info@fahrwerk-muenster.de</motion.a>
                <motion.a href="https://wa.me/4917682081601" className="flex items-center gap-4 text-white/80 hover:text-[#25D366] text-lg" whileHover={{ x: 10 }}><span className="text-2xl">💬</span>WhatsApp</motion.a>
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
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div className="flex items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#E55A25] flex items-center justify-center font-black text-white" whileHover={{ rotate: 10, scale: 1.1 }}>FW</motion.div>
            <span className="text-white/60">© 2025 Fahrwerk Münster GmbH</span>
          </motion.div>
          <div className="flex items-center gap-8">
            {['Instagram', 'Facebook'].map((s) => (
              <motion.a key={s} href="#" className="text-white/40 hover:text-[#FF6B35]" whileHover={{ scale: 1.1, y: -3 }}>{s}</motion.a>
            ))}
            <Link href="/impressum" className="text-white/40 hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="text-white/40 hover:text-white">Datenschutz</Link>
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
      <CrazyBackground />
      <Floating3DShapes />
      <AnimatedParticles />
      <Navigation />
      <HeroSection />
      <KurseSection />
      <FahrzeugeSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  );
}
