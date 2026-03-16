'use client'
// app/page.tsx
// singleexpo.com — Event Homepage
// ============================================================

import Link from 'next/link'
import { useState, useEffect } from 'react'

// ─── Event config (replace with API / CMS) ───────────────────
const EVENT = {
  name:     'Single Expo Thailand 2026',
  tagline:  'Living Single. Living Full.',
  date:     'October 10–12, 2026',
  venue:    'BITEC Bangkok',
  dateISO:  '2026-10-10T10:00:00+07:00',
}

const TICKET_TIERS = [
  {
    tier:    'general',
    nameTH:  'บัตรทั่วไป',
    price:   299,
    perks:   ['เข้างานทั้ง 3 วัน', 'ทุก Zone + เวที', 'Welcome bag'],
    cta:     'ซื้อตั๋ว',
    accent:  false,
  },
  {
    tier:    'vip',
    nameTH:  'บัตร VIP',
    price:   899,
    perks:   ['ทุกสิทธิ์ General', 'Fast-track entry', 'VIP lounge access', 'Meet & greet speaker', 'Exclusive gift set'],
    cta:     'ซื้อ VIP',
    accent:  true,
  },
]

const ZONES = [
  { icon: '✈️', label: 'Solo Travel',  color: 'from-blue-600 to-cyan-500' },
  { icon: '💰', label: 'Money',        color: 'from-green-600 to-emerald-500' },
  { icon: '💪', label: 'Wellness',     color: 'from-pink-600 to-rose-500' },
  { icon: '🏠', label: 'Home & Space', color: 'from-amber-600 to-yellow-500' },
  { icon: '🚀', label: 'Career',       color: 'from-violet-600 to-purple-500' },
  { icon: '🍜', label: 'Food',         color: 'from-orange-600 to-red-500' },
  { icon: '📱', label: 'Tech',         color: 'from-sky-600 to-blue-500' },
  { icon: '🎤', label: 'Main Stage',   color: 'from-fuchsia-600 to-pink-500' },
]

// ─── Page ────────────────────────────────────────────────────
export default function ExpoHomePage() {
  return (
    <main className="min-h-screen bg-dark text-white">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 py-24">
        {/* BG glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary/30 border border-primary/50 rounded-full text-sm font-body text-primary/90 mb-8 tracking-wider uppercase">
            {EVENT.date} · {EVENT.venue}
          </span>

          <h1 className="font-display text-6xl lg:text-8xl font-bold leading-none mb-6">
            <span className="text-white">Single</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow">
              Expo
            </span>
          </h1>

          <p className="font-body text-white/60 text-xl lg:text-2xl mb-4">
            {EVENT.tagline}
          </p>

          <p className="font-body text-white/40 text-base mb-12">
            งาน Lifestyle Expo ครั้งแรกในประเทศไทย<br />
            สำหรับคนโสด 15 ล้านคนที่โลกยังไม่เห็น
          </p>

          {/* Countdown */}
          <CountdownTimer targetDate={EVENT.dateISO} />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/tickets"
              className="px-10 py-4 bg-gradient-to-r from-accent to-primary text-white font-body font-bold text-lg rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-accent/30"
            >
              ซื้อบัตร เริ่ม ฿299
            </Link>
            <Link
              href="/exhibitors"
              className="px-10 py-4 border border-white/20 text-white font-body font-medium text-lg rounded-full hover:bg-white/10 transition-colors"
            >
              ดู Exhibitors
            </Link>
          </div>
        </div>
      </section>

      {/* ── Zones ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">8 Zones</h2>
            <p className="font-body text-white/50">ครอบคลุมทุกมิติของชีวิตคนโสด</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ZONES.map((zone) => (
              <div
                key={zone.label}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="text-3xl mb-3">{zone.icon}</div>
                <p className="font-body font-medium text-white/80">{zone.label} Zone</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tickets ── */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">ซื้อบัตร</h2>
            <p className="font-body text-white/50">Early bird slots จำกัด</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TICKET_TIERS.map((t) => (
              <div
                key={t.tier}
                className={`rounded-3xl p-8 border ${t.accent
                  ? 'bg-gradient-to-br from-primary/40 to-accent/20 border-accent/50'
                  : 'bg-white/5 border-white/10'
                }`}
              >
                {t.accent && (
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs rounded-full mb-4 font-body">
                    แนะนำ
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">{t.nameTH}</h3>
                <p className="font-display text-4xl font-bold text-yellow mb-6">
                  ฿{t.price.toLocaleString()}
                </p>
                <ul className="space-y-2 mb-8">
                  {t.perks.map((perk) => (
                    <li key={perk} className="font-body text-white/70 text-sm flex items-center gap-2">
                      <span className="text-yellow">✓</span> {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/tickets?tier=${t.tier}`}
                  className={`block text-center py-3 rounded-full font-body font-medium transition-colors ${t.accent
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'border border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

// ─── Countdown Timer ─────────────────────────────────────────
function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { val: timeLeft.d, label: 'DAYS' },
    { val: timeLeft.h, label: 'HRS' },
    { val: timeLeft.m, label: 'MIN' },
    { val: timeLeft.s, label: 'SEC' },
  ]

  return (
    <div className="flex gap-4 justify-center">
      {units.map(({ val, label }) => (
        <div key={label} className="text-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
            <span className="font-display text-2xl lg:text-3xl font-bold text-yellow">
              {String(val).padStart(2, '0')}
            </span>
          </div>
          <p className="font-body text-white/40 text-xs mt-2 tracking-widest">{label}</p>
        </div>
      ))}
    </div>
  )
}
