'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SubPageLayout from '@/components/SubPageLayout';
import Link from 'next/link';

// Calendar Component
function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Example course dates (in real app, this would come from a database)
  const courseDates: { [key: string]: { type: string; name: string; color: string } } = {
    '2025-02-03': { type: 'start', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-04': { type: 'course', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-05': { type: 'course', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-06': { type: 'course', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-07': { type: 'course', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-10': { type: 'course', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-11': { type: 'end', name: 'Theorie Block 1', color: '#FF6B35' },
    '2025-02-17': { type: 'start', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-02-18': { type: 'course', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-02-19': { type: 'course', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-02-20': { type: 'course', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-02-21': { type: 'course', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-02-24': { type: 'course', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-02-25': { type: 'end', name: 'Theorie Block 2', color: '#8B5CF6' },
    '2025-03-03': { type: 'start', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-04': { type: 'course', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-05': { type: 'course', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-06': { type: 'course', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-07': { type: 'course', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-10': { type: 'course', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-11': { type: 'end', name: 'Theorie Block 3', color: '#10B981' },
    '2025-03-17': { type: 'start', name: 'Theorie Block 4', color: '#F59E0B' },
    '2025-03-18': { type: 'course', name: 'Theorie Block 4', color: '#F59E0B' },
    '2025-03-19': { type: 'course', name: 'Theorie Block 4', color: '#F59E0B' },
    '2025-03-20': { type: 'course', name: 'Theorie Block 4', color: '#F59E0B' },
    '2025-03-21': { type: 'course', name: 'Theorie Block 4', color: '#F59E0B' },
    '2025-03-24': { type: 'course', name: 'Theorie Block 4', color: '#F59E0B' },
    '2025-03-25': { type: 'end', name: 'Theorie Block 4', color: '#F59E0B' },
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday = 0
    
    return { daysInMonth, startingDay, year, month };
  };

  const { daysInMonth, startingDay, year, month } = getDaysInMonth(currentMonth);

  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 
                      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const formatDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const today = new Date();
  const isToday = (day: number) => {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Calendar Header */}
      <div className="p-6 bg-gradient-to-r from-[#FF6B35]/20 to-transparent border-b border-white/10">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={prevMonth}
            className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.h3 
            className="text-2xl font-black text-white"
            key={`${month}-${year}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {monthNames[month]} {year}
          </motion.h3>
          <motion.button
            onClick={nextMonth}
            className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 p-4 border-b border-white/10">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-white/50 text-sm font-bold py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${month}-${year}`}
            className="grid grid-cols-7 gap-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Empty cells for days before month starts */}
            {[...Array(startingDay)].map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            
            {/* Actual days */}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const dateKey = formatDateKey(day);
              const courseInfo = courseDates[dateKey];
              const dayOfWeek = (startingDay + i) % 7;
              const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

              return (
                <motion.div
                  key={day}
                  className={`aspect-square rounded-xl flex items-center justify-center relative cursor-pointer transition-all
                    ${isToday(day) ? 'ring-2 ring-[#FF6B35] ring-offset-2 ring-offset-[#12121f]' : ''}
                    ${courseInfo ? 'text-white font-bold' : isWeekend ? 'text-white/30' : 'text-white/70'}
                    ${!courseInfo && 'hover:bg-white/10'}
                  `}
                  style={{
                    background: courseInfo ? `${courseInfo.color}30` : 'transparent',
                    borderColor: courseInfo ? courseInfo.color : 'transparent',
                    borderWidth: courseInfo ? '2px' : '0',
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                >
                  {day}
                  {courseInfo?.type === 'start' && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px]"
                      style={{ background: courseInfo.color }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      🚀
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-white/10 bg-white/5">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { color: '#FF6B35', name: 'Block 1' },
            { color: '#8B5CF6', name: 'Block 2' },
            { color: '#10B981', name: 'Block 3' },
            { color: '#F59E0B', name: 'Block 4' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ background: item.color }}
              />
              <span className="text-white/60 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Upcoming Course Card
function CourseCard({ 
  title, 
  startDate, 
  duration, 
  spots, 
  color, 
  delay 
}: { 
  title: string; 
  startDate: string; 
  duration: string; 
  spots: number; 
  color: string; 
  delay: number;
}) {
  const spotsColor = spots <= 3 ? 'text-red-400' : spots <= 6 ? 'text-yellow-400' : 'text-green-400';
  
  return (
    <motion.div
      className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-opacity-30 transition-all group overflow-hidden relative"
      style={{ borderColor: `${color}30` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Background glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)` }}
      />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: `${color}20` }}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            📚
          </motion.div>
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${spotsColor} bg-white/5`}>
            {spots} Plätze frei
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-2">{title}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-white/60">
            <span>📅</span>
            <span>Start: <span className="text-white font-semibold">{startDate}</span></span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <span>⏱️</span>
            <span>Dauer: <span className="text-white font-semibold">{duration}</span></span>
          </div>
        </div>

        <motion.button
          className="w-full mt-6 py-3 rounded-xl font-bold text-white transition-all"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}
          whileHover={{ scale: 1.02, boxShadow: `0 10px 30px -10px ${color}80` }}
          whileTap={{ scale: 0.98 }}
        >
          Jetzt anmelden →
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Terminkalender() {
  return (
    <SubPageLayout currentPage="/terminkalender">
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
                📅
              </motion.span>
              Theorie-Blockunterricht
            </motion.span>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              <motion.span
                className="inline-block"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                Termin
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
                kalender
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Alle Theoriestunden in nur 7 Werktagen – finde deinen passenden Kurs!
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Info Box */}
      <div className="pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-3xl p-8 border border-[#FF6B35]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <motion.span 
                className="text-5xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ⚠️
              </motion.span>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Wichtiger Hinweis zum Blockunterricht</h2>
                <p className="text-white/70">
                  Die Theoriestunden können nur innerhalb eines kompletten Blocks durchlaufen werden! 
                  Einzelne Stunden auf mehrere Monate verteilt sind leider nicht möglich. 
                  <span className="text-[#FF6B35] font-semibold"> Das bedeutet: Du bist in 7 Werktagen durch mit der Theorie!</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vorteile */}
      <div className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '⚡', title: '7 Werktage', desc: 'Kompletter Theorieblock', color: '#FF6B35' },
              { icon: '📚', title: '14 Stunden', desc: 'Alle Pflichtthemen', color: '#8B5CF6' },
              { icon: '✅', title: 'Prüfungsbereit', desc: 'Direkt zur Prüfung', color: '#10B981' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group"
                whileHover={{ y: -10, borderColor: `${item.color}50` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.span 
                  className="text-6xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="font-black text-white text-2xl mb-2">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content - Calendar + Courses */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-3">
              <motion.h2 
                className="text-3xl font-black text-white mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span>📆</span> Kurskalender
              </motion.h2>
              <Calendar />
            </div>

            {/* Upcoming Courses */}
            <div className="lg:col-span-2">
              <motion.h2 
                className="text-3xl font-black text-white mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span>🚀</span> Nächste Kurse
              </motion.h2>
              <div className="space-y-4">
                <CourseCard
                  title="Theorie Block 1"
                  startDate="03. Februar 2025"
                  duration="7 Werktage"
                  spots={4}
                  color="#FF6B35"
                  delay={0}
                />
                <CourseCard
                  title="Theorie Block 2"
                  startDate="17. Februar 2025"
                  duration="7 Werktage"
                  spots={8}
                  color="#8B5CF6"
                  delay={0.1}
                />
                <CourseCard
                  title="Theorie Block 3"
                  startDate="03. März 2025"
                  duration="7 Werktage"
                  spots={12}
                  color="#10B981"
                  delay={0.2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timetable Info */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span>🕐</span> Unterrichtszeiten
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { day: 'Montag - Donnerstag', time: '18:30 - 21:45', lessons: '2 Stunden/Tag' },
                { day: 'Freitag', time: '18:30 - 21:45', lessons: '2 Stunden' },
                { day: 'Samstag', time: 'Frei', lessons: '-' },
                { day: 'Sonntag', time: 'Frei', lessons: '-' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10"
                  whileHover={{ borderColor: 'rgba(255,107,53,0.3)' }}
                >
                  <p className="text-[#FF6B35] font-bold text-sm mb-1">{item.day}</p>
                  <p className="text-white font-black text-xl">{item.time}</p>
                  <p className="text-white/50 text-sm">{item.lessons}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-[#FF6B35]/30 via-[#FF6B35]/20 to-transparent border border-[#FF6B35]/40 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 30% 50%, #FF6B35 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className="relative">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                🚗
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Bereit für deinen Führerschein?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Melde dich jetzt für einen unserer Theorie-Blöcke an und starte deine Ausbildung bei FAHRWERK!
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
                <motion.a
                  href="tel:+4917682081601"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 border border-white/20 rounded-2xl font-bold text-white text-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
                  >
                    📞
                  </motion.span>
                  Anrufen
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SubPageLayout>
  );
}
