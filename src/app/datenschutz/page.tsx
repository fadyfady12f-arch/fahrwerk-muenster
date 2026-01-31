'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Datenschutz() {
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
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-12">Datenschutz</h1>

            <div className="space-y-8 text-white/70 leading-relaxed">
              {/* Einleitung */}
              <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p>Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p className="mt-4">Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne deine ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                <p className="mt-4">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              </section>

              {/* Speicherdauer */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Speicherdauer</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben deine personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn du ein berechtigtes Löschersuchen geltend machst oder eine Einwilligung zur Datenverarbeitung widerrufst, werden deine Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung deiner personenbezogenen Daten haben.</p>
                </div>
              </section>

              {/* Rechtsgrundlagen */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Rechtsgrundlagen</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Sofern du in die Datenverarbeitung eingewilligt hast, verarbeiten wir deine personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.</p>
                  <p className="mt-4">Die Einwilligung ist jederzeit widerrufbar. Sind deine Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir deine Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.</p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Cookies</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Die Internetseiten verwenden so genannte Cookies. Cookies richten auf deinem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
                  <p className="mt-4">Cookies sind kleine Textdateien, die auf deinem Rechner abgelegt werden und die dein Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende deines Besuchs automatisch gelöscht.</p>
                  <p className="mt-4">Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren.</p>
                </div>
              </section>

              {/* Server-Log-Files */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Server-Log-Files</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die dein Browser automatisch an uns übermittelt. Dies sind:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                  </ul>
                  <p className="mt-4">Diese Daten sind nicht bestimmten Personen zuordnungsbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                </div>
              </section>

              {/* Deine Rechte */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Deine Rechte</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Du hast das Recht, Daten, die wir auf Grundlage deiner Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an dich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>
                  <p className="mt-4">Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
                  <p className="mt-4">Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit an uns wenden: <a href="mailto:info@fahrwerk-muenster.de" className="text-[#FF6B35] hover:underline">info@fahrwerk-muenster.de</a></p>
                </div>
              </section>

              {/* Widerruf */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Widerruf deiner Einwilligung</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per <a href="mailto:info@fahrwerk-muenster.de" className="text-[#FF6B35] hover:underline">E-Mail</a> an uns.</p>
                  <p className="mt-4">Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                </div>
              </section>

              {/* Beschwerderecht */}
              <section>
                <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">Beschwerderecht</h2>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p>Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.</p>
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
              <Link href="/impressum" className="text-white/40 hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="text-[#FF6B35]">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
