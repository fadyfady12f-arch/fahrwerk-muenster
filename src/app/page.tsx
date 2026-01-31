'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

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
//                    SPEED LINES ON SCROLL
// ═══════════════════════════════════════════════════════════════

function SpeedLines() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100, 500], [0, 1, 0]);
  
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ opacity }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#FF6B35]/50 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 200}px`,
            rotate: `${-45 + Math.random() * 10}deg`,
          }}
          animate={{
            x: [-200, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
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
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, 0]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);

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
              className="relative h-10 w-48"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/assets/logo.webp" alt="Fahrwerk Münster" fill className="object-contain" priority />
            </motion.div>
          </Link>

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
              {['Kurse', 'Klassen', 'Team', 'FAQ', 'Kontakt'].map((item, i) => (
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
//                    HERO SECTION
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
//                    KURSE SECTION WITH SCROLL EFFECTS
// ═══════════════════════════════════════════════════════════════

function KurseSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const kurse = [
    { title: 'Klassisch', duration: '3-6 Monate', icon: '📚', color: '#10B981', features: ['Flexibles Lerntempo', 'Persönliche Betreuung', 'Easy Ausbildung', 'Keine Eile'], popular: false },
    { title: 'Intensiv', duration: '4-6 Wochen', icon: '🚀', color: '#FF6B35', features: ['Theorie + Praxis verzahnt', 'Hoher Lerneffekt', 'Bevorzugte Antragstellung', 'Schneller fertig'], popular: true },
    { title: 'Express', duration: '10 Tage', icon: '⚡', color: '#8B5CF6', features: ['Maximale Geschwindigkeit', 'Sofortige Prüfungen', 'Bevorzugte Antragstellung', 'Rekordzeit'], popular: false },
  ];

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

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {kurse.map((kurs, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 80, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring' }}
            >
              <motion.div
                className={`relative p-10 rounded-[2rem] border overflow-hidden h-full ${
                  kurs.popular
                    ? 'bg-gradient-to-b from-[#FF6B35]/20 to-transparent border-[#FF6B35]/50'
                    : 'bg-white/5 border-white/10'
                }`}
                whileHover={{ y: -20, scale: 1.02, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated shine */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{ backgroundPosition: ['0% 0%', '200% 200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {kurs.popular && (
                  <motion.div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-full text-sm font-black text-white shadow-xl shadow-[#FF6B35]/40"
                    initial={{ scale: 0, y: 30 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring', bounce: 0.5 }}
                    animate={{ scale: [1, 1.05, 1] }}
                  >
                    🔥 BELIEBT
                  </motion.div>
                )}

                <motion.div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-6xl mb-10"
                  style={{ background: `${kurs.color}20` }}
                  whileHover={{ rotate: [0, -20, 20, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {kurs.icon}
                </motion.div>

                <h3 className="text-3xl font-black text-white mb-4">{kurs.title}</h3>
                <motion.div
                  className="text-5xl font-black mb-10"
                  style={{ color: kurs.color }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {kurs.duration}
                </motion.div>

                <ul className="space-y-5 mb-10">
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

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
//                    KLASSEN SECTION (mit echten SVGs)
// ═══════════════════════════════════════════════════════════════

function KlassenSection() {
  const klassen = [
    { name: 'PKW', klasse: 'Klasse B / B197', icon: '/assets/classes/pkw.svg', desc: 'Der klassische Autoführerschein für alle PKW bis 3,5t', color: '#FF6B35' },
    { name: 'Motorrad', klasse: 'Klasse A', icon: '/assets/classes/motorrad.svg', desc: 'Für alle Motorräder ohne Leistungsbegrenzung', color: '#8B5CF6' },
    { name: 'Anhänger', klasse: 'Klasse BE', icon: '/assets/classes/anhaenger.svg', desc: 'PKW mit Anhänger über 750 kg', color: '#10B981' },
  ];

  return (
    <section id="klassen" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8">
            🚗 Führerscheinklassen
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            Welche <span className="text-[#FF6B35]">Klasse</span> brauchst du?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {klassen.map((k, i) => (
            <motion.div
              key={i}
              className="group relative p-10 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -15, scale: 1.03, borderColor: `${k.color}50` }}
            >
              <motion.div
                className="relative w-32 h-32 mx-auto mb-8"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <Image src={k.icon} alt={k.name} fill className="object-contain filter brightness-0 invert opacity-90" />
              </motion.div>
              <h3 className="text-3xl font-black text-white mb-2">{k.name}</h3>
              <motion.p className="text-xl font-bold mb-4" style={{ color: k.color }}>{k.klasse}</motion.p>
              <p className="text-white/60">{k.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
//                    APP SECTION (mit echtem Bild)
// ═══════════════════════════════════════════════════════════════

function AppSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8">
              📱 drive.buzz App
            </motion.span>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Lerne <span className="text-[#FF6B35]">digital</span> & flexibel
            </h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Die drive.buzz App ermöglicht dir individuelles, flexibles und ortsunabhängiges Lernen – 
              perfekt abgestimmt auf deine Fahrausbildung.
            </p>
            <ul className="space-y-4 mb-10">
              {['Intelligente Lernfunktionen', 'Realistische Prüfungssimulationen', 'Termine & Kosten im Überblick', 'Jederzeit & überall verfügbar'].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 text-white/80 text-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="w-8 h-8 rounded-full bg-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35]">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: 'spring' }}
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-[#FF6B35]/30">
                <Image src="/assets/app-phone.webp" alt="drive.buzz Fahrschul App" fill className="object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl text-base font-black text-white shadow-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📲 Kostenlos
              </motion.div>
            </motion.div>
          </motion.div>
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
    { name: 'Schero', role: 'Inhaber & Fahrlehrer', image: '/assets/team/schero.webp', hoverImage: '/assets/team/schero-hover.webp', klassen: 'B / BE', sprachen: 'DE, EN, KU', emoji: '⚽' },
    { name: 'Nils', role: 'Fahrlehrer', image: '/assets/team/nils.webp', hoverImage: '/assets/team/nils-hover.webp', klassen: 'B / BE', sprachen: 'DE', emoji: '🎖️' },
    { name: 'Alan', role: 'Fahrlehrer', image: '/assets/team/alan.webp', hoverImage: '/assets/team/alan-hover.webp', klassen: 'B / BE', sprachen: 'DE, EN, KU', emoji: '😄' },
    { name: 'Saad', role: 'Fahrlehrer', image: '/assets/team/saad.webp', hoverImage: '/assets/team/saad-hover.webp', klassen: 'B / BE', sprachen: 'DE, EN', emoji: '🧘' },
    { name: 'Idris', role: 'Fahrlehrer', image: '/assets/team/idris.webp', hoverImage: '/assets/team/idris-hover.webp', klassen: 'B / BE', sprachen: 'DE, AF', emoji: '💪' },
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
          <motion.span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8">
            👨‍🏫 Mit uns zum Führerschein!
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            Das <span className="text-[#FF6B35]">FAHRWERK</span> Team
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
            >
              <motion.div
                className="relative p-6 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 overflow-hidden"
                whileHover={{ y: -15, scale: 1.05, rotateY: 10 }}
                transition={{ type: 'spring' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center text-2xl z-10"
                  whileHover={{ scale: 1.3, rotate: 30 }}
                >
                  {member.emoji}
                </motion.div>

                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#FF6B35]/20 to-purple-500/20">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-all duration-500 group-hover:opacity-0" />
                  <Image src={member.hoverImage} alt={`${member.name} hover`} fill className="object-cover absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <h3 className="font-black text-white text-2xl mb-2">{member.name}</h3>
                <p className="text-[#FF6B35] font-semibold mb-4">{member.role}</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60">📋 {member.klassen}</span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60">🗣️ {member.sprachen}</span>
                </div>
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
      <KlassenSection />
      <AppSection />
      <TeamSection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </main>
  );
}
