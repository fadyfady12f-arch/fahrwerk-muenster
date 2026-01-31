'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import SubPageLayout from '@/components/SubPageLayout';
import Link from 'next/link';

// Team Member Data
const teamMembers = [
  {
    id: 'schero',
    name: 'Schero Hajo',
    role: 'Inhaber & Fahrlehrer',
    image: '/assets/team/schero.webp',
    klassen: ['B', 'BE'],
    sprachen: ['Deutsch', 'Englisch', 'Kurdisch'],
    experience: '10+ Jahre',
    emoji: '⚽',
    color: '#FF6B35',
    bio: 'Als Inhaber und Gründer von FAHRWERK Münster ist Schero das Herzstück unserer Fahrschule. Mit seiner langjährigen Erfahrung und seiner Leidenschaft für das Fahren bringt er jeden Fahrschüler sicher ans Ziel.',
    specialties: ['Intensive Ausbildung', 'Express-Kurse', 'Angstfahrer'],
    quote: 'Bei uns lernst du nicht nur Fahren – du wirst ein sicherer Verkehrsteilnehmer!',
  },
  {
    id: 'nils',
    name: 'Nils',
    role: 'Fahrlehrer',
    image: '/assets/team/nils.webp',
    klassen: ['B', 'BE'],
    sprachen: ['Deutsch'],
    experience: '5+ Jahre',
    emoji: '🎖️',
    color: '#8B5CF6',
    bio: 'Nils überzeugt mit seiner ruhigen und geduldigen Art. Er versteht es, auch nervöse Fahrschüler zu beruhigen und ihnen das nötige Selbstvertrauen zu geben.',
    specialties: ['Geduld', 'Prüfungsvorbereitung', 'Autobahnfahrten'],
    quote: 'Jeder kann Autofahren lernen – man braucht nur den richtigen Lehrer.',
  },
  {
    id: 'alan',
    name: 'Alan',
    role: 'Fahrlehrer',
    image: '/assets/team/alan.webp',
    klassen: ['B', 'BE'],
    sprachen: ['Deutsch', 'Englisch', 'Kurdisch'],
    experience: '4+ Jahre',
    emoji: '😄',
    color: '#10B981',
    bio: 'Alan ist bekannt für seine fröhliche und motivierende Art. Seine positive Energie ist ansteckend und macht jede Fahrstunde zu einem guten Erlebnis.',
    specialties: ['Motivation', 'Mehrsprachig', 'Stadtfahrten'],
    quote: 'Mit guter Laune lernt es sich am besten!',
  },
  {
    id: 'saad',
    name: 'Saad',
    role: 'Fahrlehrer',
    image: '/assets/team/saad.webp',
    klassen: ['B', 'BE'],
    sprachen: ['Deutsch', 'Englisch'],
    experience: '3+ Jahre',
    emoji: '🧘',
    color: '#F59E0B',
    bio: 'Saad ist der ruhige Pol im Team. Mit seiner entspannten Art hilft er Fahrschülern, auch in stressigen Situationen einen kühlen Kopf zu bewahren.',
    specialties: ['Entspanntes Lernen', 'Stressmanagement', 'Sonderfahrten'],
    quote: 'Ruhe und Konzentration sind der Schlüssel zum Erfolg.',
  },
  {
    id: 'idris',
    name: 'Idris',
    role: 'Fahrlehrer',
    image: '/assets/team/idris.webp',
    klassen: ['B', 'BE'],
    sprachen: ['Deutsch', 'Afghanisch'],
    experience: '3+ Jahre',
    emoji: '💪',
    color: '#EC4899',
    bio: 'Idris bringt Energie und Enthusiasmus in jede Fahrstunde. Er motiviert seine Fahrschüler, immer ihr Bestes zu geben und über sich hinauszuwachsen.',
    specialties: ['Motivation', 'Praxisorientiert', 'Einparken'],
    quote: 'Du schaffst das – ich glaub an dich!',
  },
];

// Team Member Card Component
function TeamMemberCard({ 
  member, 
  index, 
  onSelect,
  isSelected 
}: { 
  member: typeof teamMembers[0]; 
  index: number;
  onSelect: () => void;
  isSelected: boolean;
}) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      onClick={onSelect}
    >
      <motion.div
        className={`relative p-6 rounded-3xl overflow-hidden transition-all duration-500 ${
          isSelected 
            ? 'bg-gradient-to-br from-white/20 to-white/5 border-2' 
            : 'bg-white/5 border border-white/10 hover:bg-white/10'
        }`}
        style={{ borderColor: isSelected ? member.color : 'transparent' }}
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}20 0%, transparent 70%)` }}
        />
        
        {/* Emoji badge */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10"
          style={{ background: `${member.color}30` }}
          whileHover={{ scale: 1.2, rotate: 20 }}
        >
          {member.emoji}
        </motion.div>

        {/* Image */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-white/10 to-transparent">
          <Image 
            src={member.image} 
            alt={member.name} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          />
        </div>

        {/* Info */}
        <div className="relative">
          <h3 className="font-black text-white text-2xl mb-1">{member.name}</h3>
          <p style={{ color: member.color }} className="font-semibold mb-4">{member.role}</p>
          
          {/* Quick info */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60 flex items-center gap-1">
              📋 {member.klassen.join(' / ')}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-white/60 flex items-center gap-1">
              ⏱️ {member.experience}
            </span>
          </div>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: member.color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <span className="text-white text-sm">✓</span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Team Member Detail View
function TeamMemberDetail({ member }: { member: typeof teamMembers[0] }) {
  return (
    <motion.div
      className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: 'spring' }}
      key={member.id}
    >
      {/* Background decorations */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Image & Basic Info */}
        <div className="md:col-span-1">
          <motion.div
            className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 border-4"
            style={{ borderColor: member.color }}
            whileHover={{ scale: 1.02 }}
          >
            <Image src={member.image} alt={member.name} fill className="object-cover" />
          </motion.div>
          
          <motion.div
            className="text-center p-4 rounded-2xl"
            style={{ background: `${member.color}20` }}
          >
            <motion.div 
              className="text-5xl mb-2"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              {member.emoji}
            </motion.div>
            <p className="text-white/60 text-sm italic">&quot;{member.quote}&quot;</p>
          </motion.div>
        </div>

        {/* Detailed Info */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">{member.name}</h2>
            <p style={{ color: member.color }} className="text-xl font-bold">{member.role}</p>
          </div>

          <p className="text-white/70 text-lg leading-relaxed">{member.bio}</p>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            <motion.div 
              className="p-4 rounded-2xl bg-white/5 border border-white/10"
              whileHover={{ borderColor: `${member.color}50` }}
            >
              <p className="text-white/50 text-sm mb-1">Erfahrung</p>
              <p className="text-white font-black text-2xl">{member.experience}</p>
            </motion.div>
            <motion.div 
              className="p-4 rounded-2xl bg-white/5 border border-white/10"
              whileHover={{ borderColor: `${member.color}50` }}
            >
              <p className="text-white/50 text-sm mb-1">Führerscheinklassen</p>
              <p className="text-white font-black text-2xl">{member.klassen.join(' / ')}</p>
            </motion.div>
            <motion.div 
              className="p-4 rounded-2xl bg-white/5 border border-white/10"
              whileHover={{ borderColor: `${member.color}50` }}
            >
              <p className="text-white/50 text-sm mb-1">Sprachen</p>
              <p className="text-white font-black text-lg">{member.sprachen.length}</p>
            </motion.div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <span>🗣️</span> Sprachen
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.sprachen.map((sprache, i) => (
                <motion.span
                  key={sprache}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ background: `${member.color}30` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {sprache}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <span>⭐</span> Spezialisierungen
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty, i) => (
                <motion.span
                  key={specialty}
                  className="px-4 py-2 rounded-full bg-white/10 text-white/80 font-medium border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: member.color, scale: 1.05 }}
                >
                  {specialty}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg shadow-xl transition-all"
              style={{ 
                background: `linear-gradient(135deg, ${member.color}, ${member.color}CC)`,
                boxShadow: `0 20px 40px -15px ${member.color}50`
              }}
            >
              Mit {member.name.split(' ')[0]} lernen
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0]>(teamMembers[0]);

  return (
    <SubPageLayout currentPage="/team">
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
            >
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                👨‍🏫
              </motion.span>
              Lerne uns kennen!
            </motion.span>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <motion.span
                className="inline-block"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                Unser
              </motion.span>
              {' '}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#FF6B35] via-[#FFB366] to-[#FF6B35] bg-clip-text text-transparent bg-[length:200%_auto]"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, backgroundPosition: ['0%', '200%'] }}
                transition={{ 
                  x: { delay: 0.4, type: 'spring' },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' }
                }}
              >
                Team
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {teamMembers.length} erfahrene Fahrlehrer – gemeinsam bringen wir dich sicher ans Ziel!
            </motion.p>
          </motion.div>
        </div>

        {/* Floating emojis */}
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.id}
            className="absolute text-4xl pointer-events-none opacity-30"
            style={{ 
              left: `${15 + i * 18}%`, 
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity, 
              delay: i * 0.5,
            }}
          >
            {member.emoji}
          </motion.div>
        ))}
      </div>

      {/* Team Stats */}
      <div className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: teamMembers.length, label: 'Fahrlehrer', icon: '👨‍🏫', color: '#FF6B35' },
              { value: '20+', label: 'Jahre Erfahrung', icon: '⏱️', color: '#8B5CF6' },
              { value: '5', label: 'Sprachen', icon: '🗣️', color: '#10B981' },
              { value: '1000+', label: 'Erfolgreiche Schüler', icon: '🎓', color: '#F59E0B' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center"
                whileHover={{ y: -5, borderColor: `${stat.color}50` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.span 
                  className="text-4xl block mb-2"
                  whileHover={{ scale: 1.2 }}
                >
                  {stat.icon}
                </motion.span>
                <motion.div 
                  className="text-3xl font-black mb-1"
                  style={{ color: stat.color }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-3xl font-black text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>👥</span> Wähle deinen Fahrlehrer
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={i}
                onSelect={() => setSelectedMember(member)}
                isSelected={selectedMember.id === member.id}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Selected Member Detail */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-3xl font-black text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ⭐
            </motion.span> 
            Mehr über {selectedMember.name.split(' ')[0]}
          </motion.h2>
          
          <AnimatePresence mode="wait">
            <TeamMemberDetail member={selectedMember} />
          </AnimatePresence>
        </div>
      </div>

      {/* Join CTA */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-[#FF6B35]/30 via-[#FF6B35]/20 to-transparent border border-[#FF6B35]/40 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 70% 50%, #8B5CF6 0%, transparent 50%)',
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative">
              <div className="flex justify-center gap-2 mb-6">
                {teamMembers.slice(0, 5).map((member, i) => (
                  <motion.div
                    key={member.id}
                    className="w-16 h-16 rounded-full border-4 border-[#12121f] overflow-hidden relative -ml-4 first:ml-0"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ zIndex: 5 - i }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </motion.div>
                ))}
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Werde Teil der FAHRWERK Familie!
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Unser Team freut sich darauf, dich kennenzulernen und dir das Fahren beizubringen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#E55A25] rounded-2xl font-bold text-white text-lg shadow-xl shadow-[#FF6B35]/40"
                  >
                    Jetzt anmelden
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                      🚀
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SubPageLayout>
  );
}
