'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SubPageLayout from '@/components/SubPageLayout';

// Accordion Item Component
function AccordionItem({ 
  title, 
  icon, 
  children, 
  isOpen, 
  onClick, 
  index 
}: { 
  title: string; 
  icon: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="overflow-hidden"
    >
      <motion.button
        className={`w-full p-6 sm:p-8 rounded-3xl text-left transition-all duration-500 border ${
          isOpen 
            ? 'bg-gradient-to-r from-[#FF6B35]/20 via-[#FF6B35]/10 to-transparent border-[#FF6B35]/40 shadow-xl shadow-[#FF6B35]/10' 
            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
        }`}
        onClick={onClick}
        whileHover={{ scale: isOpen ? 1 : 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${
                isOpen ? 'bg-[#FF6B35]/30' : 'bg-white/10'
              }`}
              animate={{ rotate: isOpen ? 10 : 0, scale: isOpen ? 1.1 : 1 }}
            >
              {icon}
            </motion.div>
            <span className={`font-bold text-lg sm:text-xl transition-colors ${
              isOpen ? 'text-[#FF6B35]' : 'text-white'
            }`}>
              {title}
            </span>
          </div>
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all ${
              isOpen ? 'bg-[#FF6B35] text-white' : 'bg-white/10 text-white/50'
            }`}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            +
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div 
                className="pt-6 text-white/70 leading-relaxed space-y-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

// Highlight Box Component
function HighlightBox({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
  };

  const icons = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
  };

  return (
    <motion.div 
      className={`p-4 rounded-xl border ${styles[type]} flex items-start gap-3`}
      whileHover={{ scale: 1.01 }}
    >
      <span className="text-xl">{icons[type]}</span>
      <span className="text-sm">{children}</span>
    </motion.div>
  );
}

export default function Datenschutz() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const sections = [
    {
      title: 'Einleitung & Überblick',
      icon: '📋',
      content: (
        <>
          <p>
            Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine 
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
            sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) 
            erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne 
            deine ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
          <HighlightBox type="warning">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </HighlightBox>
        </>
      ),
    },
    {
      title: 'Speicherdauer',
      icon: '⏱️',
      content: (
        <>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
            verbleiben deine personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <motion.div 
              className="p-4 rounded-xl bg-white/5 border border-white/10"
              whileHover={{ borderColor: 'rgba(255,107,53,0.3)' }}
            >
              <span className="text-2xl">🗑️</span>
              <p className="text-white font-semibold mt-2">Löschung auf Anfrage</p>
              <p className="text-sm">Bei berechtigtem Löschersuchen</p>
            </motion.div>
            <motion.div 
              className="p-4 rounded-xl bg-white/5 border border-white/10"
              whileHover={{ borderColor: 'rgba(255,107,53,0.3)' }}
            >
              <span className="text-2xl">↩️</span>
              <p className="text-white font-semibold mt-2">Widerruf möglich</p>
              <p className="text-sm">Einwilligung jederzeit widerrufbar</p>
            </motion.div>
          </div>
        </>
      ),
    },
    {
      title: 'Rechtsgrundlagen (DSGVO)',
      icon: '⚖️',
      content: (
        <>
          <p>
            Sofern du in die Datenverarbeitung eingewilligt hast, verarbeiten wir deine personenbezogenen 
            Daten auf Grundlage von <strong className="text-white">Art. 6 Abs. 1 lit. a DSGVO</strong> bzw. 
            <strong className="text-white"> Art. 9 Abs. 2 lit. a DSGVO</strong>, sofern besondere Datenkategorien 
            nach Art. 9 Abs. 1 DSGVO verarbeitet werden.
          </p>
          <HighlightBox type="info">
            Die Einwilligung ist jederzeit widerrufbar. Sind deine Daten zur Vertragserfüllung oder zur 
            Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir deine Daten auf Grundlage 
            des Art. 6 Abs. 1 lit. b DSGVO.
          </HighlightBox>
        </>
      ),
    },
    {
      title: 'Cookies',
      icon: '🍪',
      content: (
        <>
          <p>
            Die Internetseiten verwenden so genannte Cookies. Cookies richten auf deinem Rechner keinen 
            Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
            effektiver und sicherer zu machen.
          </p>
          <p>
            Cookies sind kleine Textdateien, die auf deinem Rechner abgelegt werden und die dein Browser speichert. 
            Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende 
            deines Besuchs automatisch gelöscht.
          </p>
          <div className="p-4 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20">
            <p className="text-white font-semibold mb-2">🔧 Browser-Einstellungen</p>
            <p className="text-sm">
              Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst 
              und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell 
              ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren.
            </p>
          </div>
        </>
      ),
    },
    {
      title: 'Server-Log-Files',
      icon: '📊',
      content: (
        <>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, 
            die dein Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 py-2">
            {[
              { icon: '🌐', text: 'Browsertyp und Browserversion' },
              { icon: '💻', text: 'Verwendetes Betriebssystem' },
              { icon: '🔗', text: 'Referrer URL' },
              { icon: '🖥️', text: 'Hostname des Rechners' },
              { icon: '🕐', text: 'Uhrzeit der Serveranfrage' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <HighlightBox type="success">
            Diese Daten sind nicht bestimmten Personen zuordnungsbar. Eine Zusammenführung dieser Daten 
            mit anderen Datenquellen wird nicht vorgenommen.
          </HighlightBox>
        </>
      ),
    },
    {
      title: 'Deine Rechte',
      icon: '🛡️',
      content: (
        <>
          <p>
            Du hast das Recht, Daten, die wir auf Grundlage deiner Einwilligung oder in Erfüllung eines 
            Vertrags automatisiert verarbeiten, an dich oder an einen Dritten in einem gängigen, 
            maschinenlesbaren Format aushändigen zu lassen.
          </p>
          <div className="grid gap-3 py-2">
            {[
              { icon: '📄', title: 'Auskunftsrecht', desc: 'Unentgeltliche Auskunft über deine Daten' },
              { icon: '✏️', title: 'Berichtigungsrecht', desc: 'Korrektur falscher Daten' },
              { icon: '🗑️', title: 'Löschungsrecht', desc: 'Löschung deiner personenbezogenen Daten' },
              { icon: '📤', title: 'Datenportabilität', desc: 'Übertragung deiner Daten' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ borderColor: 'rgba(255,107,53,0.3)', x: 5 }}
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-white font-bold">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="pt-2">
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit an uns wenden: 
            <motion.a 
              href="mailto:info@fahrwerk-muenster.de" 
              className="text-[#FF6B35] hover:underline ml-1 font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              info@fahrwerk-muenster.de
            </motion.a>
          </p>
        </>
      ),
    },
    {
      title: 'Widerruf deiner Einwilligung',
      icon: '↩️',
      content: (
        <>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. 
            Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen.
          </p>
          <motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-[#FF6B35]/20 to-transparent border border-[#FF6B35]/30 my-4"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-white font-bold mb-2">📧 So einfach geht&apos;s:</p>
            <p>
              Dazu reicht eine formlose Mitteilung per{' '}
              <motion.a 
                href="mailto:info@fahrwerk-muenster.de" 
                className="text-[#FF6B35] hover:underline font-bold"
                whileHover={{ scale: 1.05 }}
              >
                E-Mail
              </motion.a>{' '}
              an uns.
            </p>
          </motion.div>
          <HighlightBox type="info">
            Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </HighlightBox>
        </>
      ),
    },
    {
      title: 'Beschwerderecht',
      icon: '📝',
      content: (
        <>
          <p>
            Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der 
            zuständigen Aufsichtsbehörde zu.
          </p>
          <motion.div 
            className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 my-4"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-purple-400 font-semibold mb-2">🏛️ Zuständige Aufsichtsbehörde</p>
            <p>
              Der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat 
              (Nordrhein-Westfalen).
            </p>
          </motion.div>
        </>
      ),
    },
  ];

  return (
    <SubPageLayout currentPage="/datenschutz">
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
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                🔒
              </motion.span>
              Deine Daten sind bei uns sicher
            </motion.span>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <motion.span
                className="inline-block"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                Daten
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
                schutz
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transparenz ist uns wichtig – hier erfährst du alles über den Umgang mit deinen Daten
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Shield */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FF6B35]">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </motion.div>
      </div>

      {/* Content - Accordion */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress indicator */}
          <motion.div 
            className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/50 text-sm">Datenschutz-Themen</span>
              <span className="text-[#FF6B35] font-bold">{sections.length} Abschnitte</span>
            </div>
            <div className="flex gap-1">
              {sections.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all cursor-pointer ${
                    i === openIndex ? 'bg-[#FF6B35]' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setOpenIndex(i)}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {sections.map((section, i) => (
              <AccordionItem
                key={i}
                title={section.title}
                icon={section.icon}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                index={i}
              >
                {section.content}
              </AccordionItem>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 via-[#FF6B35]/10 to-transparent border border-[#FF6B35]/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-5xl mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💬
            </motion.div>
            <h3 className="text-2xl font-black text-white mb-4">Noch Fragen zum Datenschutz?</h3>
            <p className="text-white/60 mb-6">
              Wir sind für dich da und beantworten gerne alle deine Fragen.
            </p>
            <motion.a
              href="mailto:info@fahrwerk-muenster.de"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-bold text-white text-lg shadow-xl shadow-[#FF6B35]/30"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(255,107,53,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✉️</span>
              Kontakt aufnehmen
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SubPageLayout>
  );
}
