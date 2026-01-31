'use client';

import { motion } from 'framer-motion';
import SubPageLayout from '@/components/SubPageLayout';

// Animated Info Card Component
function InfoCard({ 
  title, 
  children, 
  icon, 
  delay = 0,
  gradient = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  icon: string; 
  delay?: number;
  gradient?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative overflow-hidden rounded-3xl border p-8 ${
        gradient 
          ? 'bg-gradient-to-br from-[#FF6B35]/20 via-[#FF6B35]/10 to-transparent border-[#FF6B35]/30' 
          : 'bg-white/5 border-white/10 hover:border-[#FF6B35]/30'
      } transition-all duration-500 group`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Floating icon */}
      <motion.div
        className="absolute -top-2 -right-2 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-transparent flex items-center justify-center text-4xl opacity-50 group-hover:opacity-100 transition-opacity"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {icon}
      </motion.div>

      <h2 className="text-2xl font-black text-[#FF6B35] mb-6 flex items-center gap-3">
        <motion.span
          className="text-3xl"
          whileHover={{ scale: 1.3, rotate: 15 }}
        >
          {icon}
        </motion.span>
        {title}
      </h2>
      <div className="text-white/70 leading-relaxed relative">
        {children}
      </div>
    </motion.div>
  );
}

// Animated text reveal
function AnimatedText({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

export default function Impressum() {
  return (
    <SubPageLayout currentPage="/impressum">
      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold mb-8 border border-[#FF6B35]/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                📜
              </motion.span>
              Rechtliche Informationen
            </motion.span>

            {/* Title with animated letters */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <motion.span
                className="inline-block"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                Impre
              </motion.span>
              <motion.span
                className="inline-block bg-gradient-to-r from-[#FF6B35] via-[#FFB366] to-[#FF6B35] bg-clip-text text-transparent bg-[length:200%_auto]"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, backgroundPosition: ['0%', '200%'] }}
                transition={{ 
                  x: { delay: 0.4, type: 'spring' },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' }
                }}
              >
                ssum
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Alle wichtigen Angaben nach § 5 DDG
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-[#FF6B35]/20 rounded-2xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-16 h-16 border-2 border-purple-500/20 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8">
            {/* Main Contact Card - Featured */}
            <InfoCard title="Kontaktdaten nach § 5 DDG" icon="🏢" delay={0} gradient>
              <div className="space-y-4">
                <motion.p 
                  className="font-bold text-white text-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Fahrwerk Münster GmbH
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-3 text-lg"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-[#FF6B35]">📍</span>
                  <span>Bremer Platz 5, 48155 Münster</span>
                </motion.div>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <motion.a 
                    href="tel:01736522872" 
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.span 
                      className="text-2xl"
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                    >
                      📞
                    </motion.span>
                    <div>
                      <div className="text-white/50 text-xs">Telefon</div>
                      <div className="text-white font-bold group-hover:text-[#FF6B35] transition-colors">0173 / 6522872</div>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:info@fahrwerk-muenster.de" 
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.span 
                      className="text-2xl"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      ✉️
                    </motion.span>
                    <div>
                      <div className="text-white/50 text-xs">E-Mail</div>
                      <div className="text-white font-bold group-hover:text-[#FF6B35] transition-colors">info@fahrwerk-muenster.de</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </InfoCard>

            {/* Two column layout */}
            <div className="grid md:grid-cols-2 gap-8">
              <InfoCard title="Geschäftsführung" icon="👨‍💼" delay={0.1}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35]/30 to-purple-500/20 flex items-center justify-center text-2xl"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      👤
                    </motion.div>
                    <div>
                      <p className="text-white font-bold text-lg">Schero Hajo</p>
                      <p className="text-[#FF6B35] text-sm">Geschäftsführer (angestellt)</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/50 text-sm">Berufsbezeichnung:</span>
                    <p className="text-white font-semibold">Fahrlehrer</p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard title="Erlaubnis" icon="📋" delay={0.2}>
                <p className="mb-4">Erlaubnis nach §§ 10, 11 Fahrlehrergesetz</p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <p className="text-[#FF6B35] font-semibold text-sm">Zuständige Behörde:</p>
                  <p className="text-white">Ordnungsamt</p>
                  <p className="text-white/70">Fahrerlaubnis / Fahrschulen</p>
                  <motion.a 
                    href="tel:025149235503" 
                    className="text-[#FF6B35] hover:underline flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    📞 0251 / 49 23 503
                  </motion.a>
                </div>
              </InfoCard>
            </div>

            {/* Handelsregister */}
            <InfoCard title="Handelsregister" icon="📑" delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-white/50 text-sm mb-1">Registernummer</p>
                  <p className="text-white font-black text-2xl">HRB 20069</p>
                </motion.div>
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-white/50 text-sm mb-1">Registergericht</p>
                  <p className="text-white font-black text-2xl">Amtsgericht Münster</p>
                </motion.div>
              </div>
            </InfoCard>

            {/* Urheberrechte */}
            <InfoCard title="Urheberrechte" icon="©️" delay={0.4}>
              <p>
                Das Copyright für von der Fahrwerk Münster GmbH selbst erstellte Bildern und Texten bleibt allein bei uns. 
                Eine Vervielfältigung oder Verwendung solcher Fotos und Texte in anderen elektronischen oder gedruckten 
                Publikationen ist ohne ausdrückliche Zustimmung von uns nicht gestattet.
              </p>
              <motion.div 
                className="mt-4 p-4 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-[#FF6B35] text-sm font-semibold">
                  💡 Das Copyright für die anderen verwendeten Fotos bleibt bei deren Urhebern.
                </p>
              </motion.div>
            </InfoCard>

            {/* Verbraucher-Streitbeilegung */}
            <InfoCard title="Verbraucher-Streitbeilegung" icon="⚖️" delay={0.5}>
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-xl flex-shrink-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❌
                </motion.div>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </InfoCard>
          </div>

          {/* Back to Home CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-bold text-white text-lg shadow-xl shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>←</span>
              Zurück zur Startseite
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SubPageLayout>
  );
}
